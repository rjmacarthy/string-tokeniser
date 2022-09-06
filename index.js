import _ from 'lodash'

const FILTER_REGEX = /[\\.,/#!$£%"@+-^&*;:{}=\-_.`~()]/g
const SEPARTOR = ' '

const splitText = _.memoize(
  (text) => _.split(
    _.toLower(
      _.trim(_.replace(text, FILTER_REGEX, ''))
    ), SEPARTOR
  )
)

const getIndexWord = (texts) => _.fromPairs(
  _.map(
    _.entries(getWordCounts(texts))
      .sort((a, b) => b[1] - a[1]),
    ([word], index) => [index + 1, word]
  )
)

const getWordIndex = _.memoize(
  (texts) => _.invert(getIndexWord(texts))
)

const getWordCounts = (texts) => _.countBy(
  _.compact(
    _.flatMap(texts, (text) => splitText(text))
  )
)

const getSequences = (texts) => (
  _.map(texts, (text) => (
    _.map(_.compact(splitText(text)), (word) => (
      _.toNumber(
        _.get(getWordIndex(texts), word)
      )
    ))
  ))
)

export const tokeniser = _.memoize((texts) => ({
  indexWord: getIndexWord(texts),
  wordIndex: getWordIndex(texts),
  wordCounts: getWordCounts(texts),
  sequences: getSequences(texts)
}))
