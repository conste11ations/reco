import React from 'react'

function Business({ website, name, because, upvotes, downvotes }) {
  return (
    <li>
      <div>{because}</div>
      <div>{name}</div>
      <div>{website}</div>
      <div>upvotes: {upvotes}</div>
      <div>downvotes: {downvotes}</div>
    </li>
  )
}

export default Business;