export const texts = [
  'this is &*&^*$%£(^&) the best +- tokenizer !"£$%^&*() in the world',
  'this is also "£$"£$"£$^&&*(" the bestest best !"£$%^&*() tokenizer in the entire world',
]

export const indexWord = {
  1: 'the',
  2: 'this',
  3: 'is',
  4: 'best',
  5: 'tokenizer',
  6: 'in',
  7: 'world',
  8: 'also',
  9: 'bestest',
  10: 'entire',
}

export const wordIndex = {
  the: '1',
  this: '2',
  is: '3',
  best: '4',
  tokenizer: '5',
  in: '6',
  world: '7',
  also: '8',
  bestest: '9',
  entire: '10',
}

export const wordCounts = {
  this: 2,
  is: 2,
  the: 4,
  best: 2,
  tokenizer: 2,
  in: 2,
  world: 2,
  also: 1,
  bestest: 1,
  entire: 1,
}

export const sequences = [
  [2, 3, 1, 4, 5, 6, 1, 7],
  [2, 3, 8, 1, 9, 4, 5, 6, 1, 10, 7],
]

export const padded = [
  [0, 0, 0, 2, 3, 1, 4, 5, 6, 1, 7],
  [2, 3, 8, 1, 9, 4, 5, 6, 1, 10, 7],
]

export const yLabels = [7, 7]

export const categoricalY = [
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
]
