import { tokenizer } from '../index'
import { texts, sequences, wordCounts, wordIndex, indexWord } from './fixtures'

test('tokenizer tests', () => {
  console.log(tokenizer(texts).wordCounts)
  expect(tokenizer(texts).sequences).toStrictEqual(sequences)
  expect(tokenizer(texts).wordCounts).toStrictEqual(wordCounts)
  expect(tokenizer(texts).wordIndex).toStrictEqual(wordIndex)
  expect(tokenizer(texts).indexWord).toStrictEqual(indexWord)
})
