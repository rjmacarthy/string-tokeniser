const _ = require('lodash')

const FILTER_REGEX = /[\\.,/#!$£%"@+-^&*;:{}=\-_.`~()]/g
const SEPARTOR = ' '

const splitText = _.memoize((text) =>
  _.compact(
    _.split(_.toLower(_.trim(_.replace(text, FILTER_REGEX, ''))), SEPARTOR),
  ),
)

const getIndexWord = (texts) =>
  _.fromPairs(
    _.map(
      _.entries(getWordCounts(texts)).sort((a, b) => b[1] - a[1]),
      ([word], index) => [index + 1, word],
    ),
  )

const getWordIndex = _.memoize((texts) => _.invert(getIndexWord(texts)))

const getWordCounts = (texts) =>
  _.countBy(_.compact(_.flatMap(texts, (text) => splitText(text))))

const getSequences = (texts) =>
  _.map(texts, (text) =>
    _.map(splitText(text), (word) =>
      _.toNumber(_.get(getWordIndex(texts), word)),
    ),
  )

const tokeniser = _.memoize((texts) => ({
  indexWord: getIndexWord(texts),
  wordIndex: getWordIndex(texts),
  wordCounts: getWordCounts(texts),
  sequences: getSequences(texts),
}))

const getMaxLen = _.memoize((x) => _.max(_.map(x.sequences, (n) => _.size(n))))

const pad = (x) =>
  _.map(x.sequences, (r) => [
    ..._.fill(Array(getMaxLen(x) - _.size(r)), 0),
    ...r,
  ])

const labels = (x) => _.map(x, (r) => _.last(r))

const categorical = (x) =>
  _.map([_.first(x)], (i) => {
    let r = _.fill(Array(_.max(x) + 1), 0)
    r[i - 1] = 1
    return r
  })

module.exports = {
  labels,
  pad,
  categorical,
  tokeniser,
}
