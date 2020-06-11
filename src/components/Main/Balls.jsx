import React from "react";
import ReactDOM from 'react-dom'
import { render } from "@testing-library/react";


export default class Balls extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
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

  };

  render() {
    return (
      <div>

      </div>
    )
  };
}
