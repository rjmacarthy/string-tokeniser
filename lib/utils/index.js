const _ = require('lodash')

export const getMaxLen = _.memoize((x) => _.max(_.map(x.sequences, (n) => _.size(n))))

export const getPadded = (x) =>
  _.map(x.sequences, (r) => [
    ..._.fill(Array(getMaxLen(x) - _.size(r)), 0),
    ...r
  ])
