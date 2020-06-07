import React from 'react';
// import Business from './Business'
// import Circle from './Circle.jsx'
import BubbleChart from '@weknow/react-bubble-chart-d3';

function List({ list, businesses, recommendations, business_listings }) {
  const colorOptions = ['#6FCF97', '#2F80ED', '#F2C94C', '#56CCF2', '#27AE60']

  const bubbles = businesses.map((business, index) => (
    {label: business.name, color: colorOptions[index%5], value: business_listings[index].upvotes - business_listings[index].downvotes}
    ))

  return (
    <div>
      <h3>{list}</h3>
      <BubbleChart
          width={1000}
          height={900}
          fontFamily="Arial"
          data={bubbles}
          showLegend={true}
          bubbleClickFun={(label) => console.log(`our custom click functions for...${label}`)}
          // valueFont={{color: 'none'}}
        />
    </div>
  )
}

export default List;

        // <ul>{businesses.map((business, index) =>
        //   <Circle
        //     website={business.website}
        //     name={business.name}
        //     because={recommendations[index].because}
        //     upvotes={business_listings[index].upvotes}
        //     downvotes={business_listings[index].downvotes}>
        //   </Circle>
        // )}
        // </ul>