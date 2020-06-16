const sortAlphabetical = (businessList) => {
  const result = businessList.sort((a, b) => {
    const A = a.props.business.name.toLowerCase()
    const B = b.props.business.name.toLowerCase()
    if (A < B) {
      return -1;
    }
    if (A > B) {
      return 1;
    }
    return 0
  })
  return result
}

const sortUpVotes = (businessList) => {
  return businessList.sort((a, b) => {
    return b.props.upvotes - a.props.upvotes
  })
}

const sortDownVotes = (businessList) => {
  return businessList.sort((a, b) => {
    return a.props.downvotes - b.props.downvotes
  })
}

const sortRecentRecos = (businessList) => {
  return businessList.sort((a, b) => {
      const aStart = new Date(a.props.business.created_at).getTime()
      const A = a.props.comments.reduce((acc, current) => {
        const tmp = new Date(current.created_at).getTime()
        if (tmp > acc) {
          acc = tmp
        }
        return acc
      }, aStart)

      const bStart = new Date(b.props.business.created_at).getTime()
      const B = b.props.comments.reduce((acc, current) => {
        const tmp = new Date(current.created_at).getTime()
        if (tmp > acc) {
          acc = tmp
        }
        return acc
      }, bStart)

    return B - A;
  })
}

export {sortAlphabetical, sortUpVotes, sortDownVotes, sortRecentRecos}