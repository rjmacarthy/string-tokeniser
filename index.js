import _ from 'lodash'

const FILTER_REGEX = /[\\.,/#!$£%"@+-^&*;:{}=\-_.`~()]/g
const SEPARTOR = ' '

const splitText = (text) => _.split(
  _.toLower(
    _.trim(_.replace(text, FILTER_REGEX, ''))
  ), SEPARTOR
)

const splitTexts = (texts) => _.map(texts, (text) =>
  splitText(text)
)

const flattenSplitTexts = (texts) => _.compact(_.flatten(splitTexts(texts)))

const getIndexWord = (texts) => _.fromPairs(
  _.map(
    _.entries(getWordCounts(texts))
      .sort((a, b) => b[1] - a[1]),
    ([word], index) => [index + 1, word]
  )
)

const getWords = (text) => _.compact(splitText(text))

const getSequences = (texts, wordIndex) => (
  _.map(
    texts, (text) => (
      _.map(getWords(text), (word) => (
        _.toNumber(
          _.get(wordIndex, word)
        )
      ))
    )
  )
)

const getWordIndex = (texts) => _.invert(getIndexWord(texts))

const getWordCounts = (texts) => _.countBy(flattenSplitTexts(texts))

export const tokenizer = (texts) => ({
  indexWord: getIndexWord(texts),
  wordIndex: getWordIndex(texts),
  wordCounts: getWordCounts(texts),
  sequences: getSequences(texts, getWordIndex(texts))
})

export default tokenizer
