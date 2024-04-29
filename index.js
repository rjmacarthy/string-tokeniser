const _ = require('lodash')
const FILTER_REGEX = /[^a-zA-Z0-9\s]/g

const cleanText = (text) =>
  _.replace(text, FILTER_REGEX, '').trim().toLowerCase()

const splitText = (text) => cleanText(text).split(/\s+/)

const countWords = (texts) =>
  _.countBy(_.flatten(_.map(texts, (text) => splitText(text))))

const getSortedWords = (wordCounts) =>
  _.orderBy(_.keys(wordCounts), (word) => wordCounts[word], 'desc')

const getWordIndexes = (sortedWords) =>
  _.invert(_.zipObject(_.range(1, _.size(sortedWords) + 1), sortedWords))

const getWordSequences = (texts, wordIndex) =>
  _.map(texts, (text) =>
    _.map(splitText(text), (word) => _.toNumber(wordIndex[word]))
  )

const fit = (texts) => {
  const wordCounts = countWords(texts)
  const sortedWords = getSortedWords(wordCounts)
  const wordIndex = getWordIndexes(sortedWords)

  return {
    indexWord: _.zipObject(_.range(1, _.size(sortedWords) + 1), sortedWords),
    wordIndex,
    wordCounts,
    sequences: getWordSequences(texts, wordIndex)
  }
}

module.exports = {
  fit
}
