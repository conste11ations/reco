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

const sortRecentRecos = (businessList, comments) => {
  return businessList.sort((a, b) => {
    // reduce a and b comments to most recent date 
      const aStart = new Date(a.props.comments[0].updated_at).getTime()
      const A = a.props.comments.reduce((acc, current) => {
        const tmp = new Date(current.updated_at).getTime()
        if (tmp > acc) {
          acc = tmp
        }
        return acc
      }, aStart)

      const bStart = new Date(b.props.comments[0].updated_at).getTime()
      const B = b.props.comments.reduce((acc, current) => {
        const tmp = new Date(current.updated_at).getTime()
        if (tmp > acc) {
          acc = tmp
        }
        return acc
      }, bStart)

    return B - A;
  })
}

export {sortAlphabetical, sortUpVotes, sortDownVotes, sortRecentRecos}