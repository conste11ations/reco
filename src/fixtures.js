const list = {
  id: 1,
  location: "Montreal, QC",
  name: "Black Owned MTL Restaurants",
  created_at: "2020-06-06T17:24:29.293Z",
  updated_at: "2020-06-06T17:24:29.293Z",
  description: "Support local black owned businesses! Where possible, order directly with restaurants and not via UberEats, SkipTheDishes, etc, to ensure restaurants receive as much money as possible."
}

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
  },
];

const comments = [{
    id: 1,
    because: "this place is awesome",
    business_id: 1,
    created_at: "2020-06-06T17:24:29.596Z",
    updated_at: "2020-06-06T17:24:29.596Z"
    },
    {
    id: 2,
    because: "Lamb Curry is incredible",
    business_id: 2,
    created_at: "2020-06-06T17:24:29.643Z",
    updated_at: "2020-06-06T17:24:29.643Z"
    },
    {
    id: 3,
    because: "my family and I are regulars; the staff is so kind!",
    business_id: 3,
    created_at: "2020-06-06T17:24:29.647Z",
    updated_at: "2020-06-06T17:24:29.647Z"
    },
    {
    id: 4,
    because: "can't get enough of this place, the energy rocks!",
    business_id: 4,
    created_at: "2020-06-06T17:24:29.651Z",
    updated_at: "2020-06-06T17:24:29.651Z"
    },
    {
    id: 5,
    because: "I LOVE the Ackee and Salt Fish. Get it, you won't regret it!",
    business_id: 5,
    created_at: "2020-06-06T17:24:29.655Z",
    updated_at: "2020-06-06T17:24:29.655Z"
    },
    {
    id: 6,
    because: "love Mango Bay!",
    business_id: 6,
    created_at: "2020-06-06T17:24:29.659Z",
    updated_at: "2020-06-06T17:24:29.659Z"
    },
    {
    id: 7,
    because: "Mango lassi people, need I say more?",
    business_id: 7,
    created_at: "2020-06-06T17:24:29.662Z",
    updated_at: "2020-06-06T17:24:29.662Z"
    },
    {
    id: 8,
    because: "everybody raves about st v or fairmount bagels, but this spot is the real deal. If you've never been, you don't know a Montreal bagel.",
    business_id: 8,
    created_at: "2020-06-06T17:24:29.666Z",
    updated_at: "2020-06-06T17:24:29.666Z"
    },
    {
    id: 9,
    because: "I literally get the spanakopita multiple times a week. I can't get enough and the vibe is so welcoming",
    business_id: 9,
    created_at: "2020-06-06T17:24:29.670Z",
    updated_at: "2020-06-06T17:24:29.670Z"
    },
    {
    id: 10,
    because: "the best jazz, the best chili, the best community. Nobody does it better.",
    business_id: 10,
    created_at: "2020-06-06T17:24:29.673Z",
    updated_at: "2020-06-06T17:24:29.673Z"
    }]

const recommendations = [{
    id: 1,
    business_id: 1,
    list_id: 1,
    created_at: "2020-06-06T17:24:29.442Z",
    updated_at: "2020-06-06T17:24:29.442Z",
    upvotes: 25,
    downvotes: 1
    },
    {
    id: 2,
    business_id: 2,
    list_id: 1,
    created_at: "2020-06-06T17:24:29.478Z",
    updated_at: "2020-06-06T17:24:29.478Z",
    upvotes: 78,
    downvotes: 2
    },
    {
    id: 3,
    business_id: 3,
    list_id: 1,
    created_at: "2020-06-06T17:24:29.486Z",
    updated_at: "2020-06-06T17:24:29.486Z",
    upvotes: 219,
    downvotes: 10
    },
    {
    id: 4,
    business_id: 4,
    list_id: 1,
    created_at: "2020-06-06T17:24:29.494Z",
    updated_at: "2020-06-06T17:24:29.494Z",
    upvotes: 36,
    downvotes: 0
    },
    {
    id: 5,
    business_id: 5,
    list_id: 1,
    created_at: "2020-06-06T17:24:29.502Z",
    updated_at: "2020-06-06T17:24:29.502Z",
    upvotes: 89,
    downvotes: 2
    },
    {
    id: 6,
    business_id: 6,
    list_id: 1,
    created_at: "2020-06-06T17:24:29.508Z",
    updated_at: "2020-06-06T17:24:29.508Z",
    upvotes: 49,
    downvotes: 1
    },
    {
    id: 7,
    business_id: 7,
    list_id: 1,
    created_at: "2020-06-06T17:24:29.515Z",
    updated_at: "2020-06-06T17:24:29.515Z",
    upvotes: 4,
    downvotes: 0
    },
    {
    id: 8,
    business_id: 8,
    list_id: 1,
    created_at: "2020-06-06T17:24:29.526Z",
    updated_at: "2020-06-06T17:24:29.526Z",
    upvotes: 263,
    downvotes: 8
    },
    {
    id: 9,
    business_id: 9,
    list_id: 1,
    created_at: "2020-06-06T17:24:29.535Z",
    updated_at: "2020-06-06T17:24:29.535Z",
    upvotes: 591,
    downvotes: 13
    },
    {
    id: 10,
    business_id: 10,
    list_id: 1,
    created_at: "2020-06-06T17:24:29.544Z",
    updated_at: "2020-06-06T17:24:29.544Z",
    upvotes: 422,
    downvotes: 2
    }]

    export { list, businesses, recommendations, comments }