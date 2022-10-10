const _ = require('lodash')

export const getMaxLen = _.memoize((x) => _.max(_.map(x.sequences, (n) => _.size(n))))

export const getPadded = (x) =>
  _.map(x.sequences, (r) => [
    ..._.fill(Array(getMaxLen(x) - _.size(r)), 0),
    ...r
  ])

export const getLabels = (x) => _.map(x, (r) => _.last(r))

export const getCategorical = (x) =>
  _.map(x, (i) => {
    const r = _.fill(Array(_.max(x) + 1), 0)
    r[i - 1] = 1
    return r
  })
