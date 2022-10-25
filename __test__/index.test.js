import { tokeniser } from '../lib/tokeniser'
import { getCategorical, getLabels, getPadded } from '../lib/utils'
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
import { cbow } from '../lib/cbow'

test('tokeniser tests', () => {
  expect(tokeniser(texts).sequences).toStrictEqual(sequences)
  expect(tokeniser(texts).wordCounts).toStrictEqual(wordCounts)
  expect(tokeniser(texts).wordIndex).toStrictEqual(wordIndex)
  expect(tokeniser(texts).indexWord).toStrictEqual(indexWord)
  expect(getPadded(tokeniser(texts))).toStrictEqual(padded)
  expect(getLabels(getPadded(tokeniser(texts)))).toStrictEqual(yLabels)
  expect(getCategorical(getLabels(getPadded(tokeniser(texts))))).toStrictEqual(
    categoricalY,
  )
})

test('cbow skip gram', () => {
  console.log(cbows(['i am so cool yea!']))
  
})
