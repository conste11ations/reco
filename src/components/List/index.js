import React, { useState } from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import ListsDrawer from './ListsDrawer'
import RecommendationDrawer from './RecommendationDrawer'


// Material UI Components and Styling
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1000,
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ListSpace ({ dispatch, list, businesses, recommendations, comments }) {
  const [drawerState, setDrawer] = useState({open: false, index: 0})

  const classes = useStyles();

  const toggleRecoDrawer = () => {
    setDrawer(prev => ({...prev, open: !prev.open}))
  }
  
  const findIndexByName = (businesses, label) => {
    const result = businesses.findIndex((business) => business.name === label)
    return result
  }
  
  const bubbleColours = ['#6FCF97', '#2F80ED', '#F2C94C', '#56CCF2', '#27AE60', '#007065']

  const bubbles = businesses.map((business, index) => (
    {label: business.name, 
    color: bubbleColours[index%6], 
    value: recommendations[index].upvotes - recommendations[index].downvotes}
    ))

  return (
    <>
      <ListsDrawer 
        list={list}
        recommendations={recommendations} 
        businesses={businesses}
        comments={comments}
        toggleRecoDrawer={toggleRecoDrawer}
        setRecoDrawer={setDrawer}
        recoDrawerState={drawerState}
        />
      {/* <main className={classes.content}> */}
      <Container className={classes.container}>
        <BubbleChart
          width={1000}
          height={900}
          fontFamily="Arial"
          data={bubbles}
          showLegend={false}
          graph={{zoom: .9}}
          padding={8}
          bubbleClickFun={(label) => {
            if (!drawerState.open) {toggleRecoDrawer()}
            const result = findIndexByName(businesses, label)
            setDrawer(prev => ({...prev, index: result}))
          }}
          valueFont={{color: 'none'}}
        />
      </Container>
      {/* </main> */}
      {recommendations[drawerState.index] && <RecommendationDrawer
      dispatch={dispatch}
      drawerState={drawerState}
      toggleRecoDrawer={toggleRecoDrawer}
      list={list}
      recommendation={recommendations[drawerState.index]}
      business={businesses[drawerState.index]}
      comments={comments[drawerState.index]}/>}
    </>
  )
}