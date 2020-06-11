import React, { useEffect } from "react";
import { mainTheme, useMainStyle } from '../../constants/mainThemes'
import { ThemeProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Search from '../Search/Search'
import Balls from './Balls.jsx'
import Ball2 from './Ball2'

export default function Main({ transitionToShow }) {

  const classes = useMainStyle();


  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "scripts/balls.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  // window.onload = () => {

  useEffect(() => {
    console.log(document.getElementById("canvas"))
    const canvas = {
      element: document.getElementById('canvas'),
      width: 600,
      height: 400,
      initialize: function () {
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        document.body.appendChild(this.element);
      }
    };

    var Ball = {
      create: function (color, dx, dy) {
        var newBall = Object.create(this);
        newBall.dx = dx;
        newBall.dy = dy;
        newBall.width = 40;
        newBall.height = 40;
        newBall.element = document.createElement('div');
        newBall.element.style.backgroundColor = color;
        newBall.element.style.width = newBall.width + 'px';
        newBall.element.style.height = newBall.height + 'px';
        newBall.element.className += ' ball';
        newBall.width = parseInt(newBall.element.style.width);
        newBall.height = parseInt(newBall.element.style.height);
        canvas.element.appendChild(newBall.element);
        return newBall;
      },
      moveTo: function (x, y) {
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
      },
      changeDirectionIfNecessary: function (x, y) {
        if (x < 0 || x > canvas.width - this.width) {
          this.dx = -this.dx;
        }
        if (y < 0 || y > canvas.height - this.height) {
          this.dy = -this.dy;
        }
      },
      draw: function (x, y) {
        this.moveTo(x, y);
        var ball = this;
        setTimeout(function () {
          ball.changeDirectionIfNecessary(x, y);
          ball.draw(x + ball.dx, y + ball.dy);
        }, 1000 / 60);
      }
    };
    canvas.initialize();
    var ball1 = Ball.create("blue", 4, 3);
    var ball2 = Ball.create("red", 1, 5);
    var ball3 = Ball.create("green", 2, 2);
    ball1.draw(0, 0);
    ball2.draw(20, 200);
    ball3.draw(300, 330);
  }, [])

  return (
    <ThemeProvider theme={mainTheme}>
      <div id="canvas" style={{
        position: "relative",
        backgroundColor: "none",
        margin: "1em auto"
      }}>
      </div>
      {/* <Ball2></Ball2> */}
      <div className={classes.root}>
        <h1>Reco</h1>
        <section className={classes.section}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English.
        </section>
        <section className={classes.section}>
          <div>
            <Typography align='center' variant='h6' noWrap>
              Any recommendations for
            </Typography>
            <Search placeholder={"Black owned MTL restaurants"} queryKey='list' setResultId={"setResultId"} />

            <Typography align='center' variant='h6' noWrap>
              near
            </Typography>
            <Search placeholder={"Montreal, QC (optional)"} queryKey='location' setResultId={"setResultId"} />
            <Typography align='center' variant='h6' noWrap>
              ?
            </Typography>
          </div>
          <div>
            <Button onClick={() => { transitionToShow() }} variant='contained' size='small' color='secondary'>
              Search
            </Button>
          </div>
        </section>
      </div>
    </ThemeProvider>
  )
}