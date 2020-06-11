const sortAlphabetical = (businessList) => {
  console.log('az')
  return businessList.sort((a, b) => {
    if (a.props.business.name < b.props.business.name) {
      return -1;
    }
    if (a.props.business.name > b.props.business.name) {
      return 1;
    }

    return 0
  })
}

const sortUpVotes = (businessList) => {
  console.log('upvotes')
  return businessList.sort((a, b) => {
    return b.props.upvotes - a.props.upvotes
  })
}

const sortDownVotes = (businessList) => {
  console.log('down')
  return businessList.sort((a, b) => {
    return a.props.downvotes - b.props.downvotes
  })
}

// NOT CURRENTLY WORKING
const sortRecentRecos = (businessList, comments) => {
  return businessList.sort((a, b) => {
    // reduce a and b comments to most recent date 
    const A = a.props.comments.reduce((acc, current) => {
      // if (current.date_updated > acc.date_updated ){
      //   return 
      // }
      // return current.updated_at - acc.updated_at
      
      console.log(current.updated_at)

    }, comments[0])
    // console.log(A)
    // order by most recent date
    // return A - B;
  })
}

export {sortAlphabetical, sortUpVotes, sortDownVotes, sortRecentRecos}