import React from 'react'

function Business({ website, name, because, upvotes, downvotes }) {
  return (
    <div>
      <li>{because}</li>
      <li>{name}</li>
      <li>{website}</li>
      <li>upvotes: {upvotes}</li>
      <li>downvotes: {downvotes}</li>
    </div>
  )
}

export default Business;