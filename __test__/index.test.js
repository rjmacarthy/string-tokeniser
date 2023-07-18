import { tokeniser } from '..'
import {
  texts,
  sequences,
  wordCounts,
  wordIndex,
  indexWord,
} from './fixtures'

test('tokeniser tests', () => {
  expect(tokeniser(texts).sequences).toStrictEqual(sequences)
  expect(tokeniser(texts).wordCounts).toStrictEqual(wordCounts)
  expect(tokeniser(texts).wordIndex).toStrictEqual(wordIndex)
  expect(tokeniser(texts).indexWord).toStrictEqual(indexWord)
})
