const _ = require("lodash");
const FILTER_REGEX = /[^a-zA-Z0-9\s]/g;

const cleanText = (text) =>
  _.replace(text, FILTER_REGEX, "").trim().toLowerCase();

const splitText = (text, options) =>
  _.compact(options.clean ? cleanText(text).split(/\s+/) : text.split(/\s+/));

const countWords = (texts, options) =>
  _.countBy(_.flatten(_.map(texts, (text) => splitText(text, options))));

const getSortedWords = (wordCounts) =>
  _.orderBy(_.keys(wordCounts), (word) => wordCounts[word], "desc");

const getWordIndexes = (sortedWords) =>
  _.invert(_.zipObject(_.range(1, _.size(sortedWords) + 1), sortedWords));

const getWordSequences = (texts, wordIndex, options) =>
  _.map(texts, (text) =>
    _.map(splitText(text, options), (word) => _.toNumber(wordIndex[word]))
  );

const tokeniser = (texts, options = { clean: true }) => {
  const wordCounts = countWords(texts, options);
  const sortedWords = getSortedWords(wordCounts);
  const wordIndex = getWordIndexes(sortedWords);

  return {
    indexWord: _.zipObject(_.range(1, _.size(sortedWords) + 1), sortedWords),
    wordIndex: wordIndex,
    wordCounts: wordCounts,
    sequences: getWordSequences(texts, wordIndex, options),
  };
};

module.exports = {
  tokeniser,
};
