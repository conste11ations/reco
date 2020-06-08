import React, {Fragment, useState} from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import Drawer from '@material-ui/core/Drawer';

function List({ list, businesses, recommendations, business_listings }) {
  const [drawerState, toggleDrawer] = useState(false)
  const colorOptions = ['#6FCF97', '#2F80ED', '#F2C94C', '#56CCF2', '#27AE60', '#007065']

  const bubbles = businesses.map((business, index) => (
    {label: business.name, 
    color: colorOptions[index%6], 
    value: business_listings[index].upvotes - business_listings[index].downvotes}
    ))

  return (
    <>
      <br></br>
      <br></br>
      <BubbleChart
          width={1000}
          height={900}
          fontFamily="Arial"
          data={bubbles}
          showLegend={true}
          bubbleClickFun={(label) => console.log(`our custom click functions for...${label}`)}
          valueFont={{color: 'none'}}
        />
      <button onClick={() => toggleDrawer(drawerState ? false : true)}>toggle</button>
      <p>{`${drawerState}`}</p>
    </>
  )
}

export default List;

{/* <ul>{businesses.map((business, index) =>
  <Circle
    website={business.website}
    name={business.name}
    because={recommendations[index].because}
    upvotes={business_listings[index].upvotes}
    downvotes={business_listings[index].downvotes}>
  </Circle>
)}</ul> */}