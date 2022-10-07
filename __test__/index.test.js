import { tokeniser, pad, labels, categorical } from '../index'
import {
  texts,
  sequences,
  wordCounts,
  wordIndex,
  indexWord,
  padded,
  yLabels,
  categoricalY,
} from './fixtures'

test('tokeniser tests', () => {
  expect(tokeniser(texts).sequences).toStrictEqual(sequences)
  expect(tokeniser(texts).wordCounts).toStrictEqual(wordCounts)
  expect(tokeniser(texts).wordIndex).toStrictEqual(wordIndex)
  expect(tokeniser(texts).indexWord).toStrictEqual(indexWord)
  expect(pad(tokeniser(texts))).toStrictEqual(padded)
  expect(labels(pad(tokeniser(texts)))).toStrictEqual(yLabels)
  expect(categorical(labels(pad(tokeniser(texts))))).toStrictEqual(categoricalY)
})
