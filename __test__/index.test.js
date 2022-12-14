import { tokeniser } from '../lib/tokeniser'
import { getCategorical, getLabels, getPadded } from '../lib/utils'
import {
  texts,
  sequences,
  wordCounts,
  wordIndex,
  indexWord,
  wordTokens,
  padded,
  yLabels,
  categoricalY,
  wordTokenIndex,
  
} from './fixtures'

test('tokeniser tests', () => {
  expect(tokeniser(texts).sequences).toStrictEqual(sequences)
  expect(tokeniser(texts).wordCounts).toStrictEqual(wordCounts)
  expect(tokeniser(texts).wordIndex).toStrictEqual(wordIndex)
  expect(tokeniser(texts).indexWord).toStrictEqual(indexWord)
  expect(tokeniser(texts).wordTokens).toStrictEqual(wordTokens)
  expect(tokeniser(texts).wordTokenIndex).toStrictEqual(wordTokenIndex)
  expect(getPadded(tokeniser(texts))).toStrictEqual(padded)
  expect(getLabels(getPadded(tokeniser(texts)))).toStrictEqual(yLabels)
  expect(getCategorical(getLabels(getPadded(tokeniser(texts))))).toStrictEqual(
    categoricalY,
  )
})
