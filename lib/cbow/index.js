const _ = require('lodash')

const { splitText } = require('../tokeniser')

const cbows = (sentence) => {
  const words = splitText(sentence)
  _.map(
    _.compact(
      _.filter(
        _.map(words, (_word, i) => {
          if (i === 0) return
          return [
            _.filter(
              [words[i - 2], words[i - 1], words[i + 1], words[i + 2]],
              _.identity
            ),
            _word
          ]
        })
      )
    ),
    (bag) => [
      _.map(bag[0], (word) =>
        _.times(_.size(words), (i) => (words[i] === word ? 1 : 0))
      ),
      bag[1]
    ]
  )
}

module.exports = {
  cbows
}
