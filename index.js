const _ = require("lodash")
const FILTER_REGEX = /[^a-zA-Z0-9\s]/g 

const cleanText = (text) =>
  _.replace(text, FILTER_REGEX, "").trim().toLowerCase()

const splitText = (text) => _.compact(cleanText(text).split(/\s+/))

const getWordCounts = (texts) =>
  _.countBy(_.flatten(_.map(texts, (text) => splitText(text))))

const getSortedWords = (wordCounts) =>
  _.orderBy(_.keys(wordCounts), (word) => wordCounts[word], 'desc')

const getWordIndex = (sortedWords) =>
  _.invert(_.zipObject(_.range(1, _.size(sortedWords) + 1), sortedWords))

const getWordSequences = (texts, wordIndex) =>
  _.map(texts, (text) =>
    _.map(splitText(text), (word) => _.toNumber(wordIndex[word]))
  )

const tokeniser = (texts) => {
  const wordCounts = getWordCounts(texts)
  const sortedWords = getSortedWords(wordCounts)
  const wordIndex = getWordIndex(sortedWords)

  return {
    indexWord: _.zipObject(_.range(1, _.size(sortedWords) + 1), sortedWords),
    wordIndex: wordIndex,
    wordCounts: wordCounts,
    sequences: getWordSequences(texts, wordIndex),
  }
}

module.exports = {
  tokeniser,
}
