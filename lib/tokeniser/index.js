const _ = require('lodash')

const FILTER_REGEX = /[\\.,/#!$£%"@+-^&*;:{}=\-_.`~()]/g
const SEPARTOR = ' '

const splitText = _.memoize((text) =>
  _.compact(
    _.split(_.toLower(_.trim(_.replace(text, FILTER_REGEX, ''))), SEPARTOR)
  )
)

const getIndexWord = _.memoize((texts) =>
  _.fromPairs(
    _.map(
      _.entries(getWordCounts(texts)).sort((a, b) => b[1] - a[1]),
      ([word], index) => [index + 1, word]
    )
  )
)

const getWordIndex = _.memoize((texts) => _.invert(getIndexWord(texts)))

const getWordCounts = _.memoize((texts) =>
  _.countBy(_.compact(_.flatMap(texts, (text) => splitText(text))))
)

const getSequences = _.memoize((texts) =>
  _.map(texts, (text) =>
    _.map(splitText(text), (word) =>
      _.toNumber(_.get(getWordIndex(texts), word))
    )
  )
)

const tokeniser = _.memoize((texts) => ({
  indexWord: getIndexWord(texts),
  wordIndex: getWordIndex(texts),
  wordCounts: getWordCounts(texts),
  sequences: getSequences(texts)
}))

module.exports = {
  tokeniser,
  splitText
}
