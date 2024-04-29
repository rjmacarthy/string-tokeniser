import { fit } from '..'
import {
  texts,
  sequences,
  wordCounts,
  wordIndex,
  indexWord
} from './fixtures'

test('tokeniser tests', () => {
  expect(fit(texts).sequences).toStrictEqual(sequences)
  expect(fit(texts).wordCounts).toStrictEqual(wordCounts)
  expect(fit(texts).wordIndex).toStrictEqual(wordIndex)
  expect(fit(texts).indexWord).toStrictEqual(indexWord)
})
