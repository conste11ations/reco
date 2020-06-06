import React from 'react';
import Business from './Business'

function List({ list, businesses, recommendations, business_listings }) {

  return (
    <div>
      <h3>{list}</h3>
      <ul>{businesses.map((business, index) =>
        <Business
          website={business.website}
          name={business.name}
          because={recommendations[index].because}
          upvotes={business_listings[index].upvotes}
          downvotes={business_listings[index].downvotes}>
        </Business>
      )}
      </ul>
    </div>
  )
}

export default List;