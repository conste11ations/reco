import React from 'react';
import Business from './Business'


const businesses = [{
  id: 1,
  website: "http://www.levirungarestaurant.ca/",
  name: "Le Virunga",
  created_at: "2020-06-06T17:24:29.341Z",
  updated_at: "2020-06-06T17:24:29.341Z"
  },
  {
  id: 2,
  website: "https://www.maisonducari.com",
  name: "Caribbean Curry House",
  created_at: "2020-06-06T17:24:29.358Z",
  updated_at: "2020-06-06T17:24:29.358Z"
  },
  {
  id: 3,
  website: "https://www.nilbleurestaurant.com/",
  name: "Le Nil Bleu",
  created_at: "2020-06-06T17:24:29.363Z",
  updated_at: "2020-06-06T17:24:29.363Z"
  },
  {
  id: 4,
  website: "https://www.boomjscuisine.ca/",
  name: "Boom J's Cuisine",
  created_at: "2020-06-06T17:24:29.368Z",
  updated_at: "2020-06-06T17:24:29.368Z"
  },
  {
  id: 5,
  website: "https://caribbeanfoodfactory.restaurant/",
  name: "Caribbean Food Factory",
  created_at: "2020-06-06T17:24:29.372Z",
  updated_at: "2020-06-06T17:24:29.372Z"
  },
  {
  id: 6,
  website: "https://www.mangobay.ca/",
  name: "Mango Bay",
  created_at: "2020-06-06T17:24:29.376Z",
  updated_at: "2020-06-06T17:24:29.376Z"
  },
  {
  id: 7,
  website: "http://www.restaurantakwaba.ca/",
  name: "Akwaba",
  created_at: "2020-06-06T17:24:29.380Z",
  updated_at: "2020-06-06T17:24:29.380Z"
  },
  {
  id: 8,
  website: "http://mtlbagel.ca/",
  name: "MTL Bagel",
  created_at: "2020-06-06T17:24:29.384Z",
  updated_at: "2020-06-06T17:24:29.384Z"
  },
  {
  id: 9,
  website: "https://www.instagram.com/phyllobarmelinas",
  name: "Phyllo Bar Melina's",
  created_at: "2020-06-06T17:24:29.388Z",
  updated_at: "2020-06-06T17:24:29.388Z"
  },
  {
  id: 10,
  website: "http://resonancecafe.com/",
  name: "Cafe Resonance",
  created_at: "2020-06-06T17:24:29.391Z",
  updated_at: "2020-06-06T17:24:29.391Z"
  }];

function List({list}) {

  return (
    <div>
    <h3>{list}</h3>
    <ul>{businesses.map(business => <Business website={business.website} name={business.name}></Business>
    )}
    </ul>
  </div>
  )
}

export default List;