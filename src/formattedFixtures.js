export default {
  list: {
    id: 1,
    location: "Montreal, QC",
    name: "Black Owned MTL Restaurants",
    created_at: "2020-06-06T17:24:29.293Z",
    updated_at: "2020-06-06T17:24:29.293Z",
    description: "Support local black owned businesses! Where possible, order directly with restaurants and not via UberEats, SkipTheDishes, etc, to ensure restaurants receive as much money as possible."
  },
  recommendations: [{
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
  ],
  businesses: [{
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
    }
  ],
  comments: [{
    id: 1,
    because: "this place is awesome",
    business_id: 1,
    created_at: "2020-06-06T17:24:29.596Z",
    updated_at: "2020-06-06T17:24:29.596Z"
    },
    {
    id: 2,
    because: "Lamb Curry is incredible",
    business_id: 1,
    created_at: "2020-06-06T17:24:29.643Z",
    updated_at: "2020-06-06T17:24:29.643Z"
    },
    {
    id: 3,
    because: "my family and I are regulars; the staff is so kind!",
    business_id: 2,
    created_at: "2020-06-06T17:24:29.647Z",
    updated_at: "2020-06-06T17:24:29.647Z"
    },
    {
    id: 4,
    because: "can't get enough of this place, the energy rocks!",
    business_id: 3,
    created_at: "2020-06-06T17:24:29.651Z",
    updated_at: "2020-06-06T17:24:29.651Z"
    },
  ]
}