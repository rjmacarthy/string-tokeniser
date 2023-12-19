type WordCount = {
  [word: string]: number;
};

type WordIndex = {
  [word: string]: number;
};

type IndexWord = {
  [index: number]: string;
};

type Sequence = number[];

interface StringTokenizer {
  wordIndex: WordIndex;
  indexWord: IndexWord;
  wordCounts: WordCount;
  sequences: Sequence[];
}

declare module "string-tokeniser" {
  /**
   * Tokenizes the given texts and returns an object containing word indexes, word counts, and sequences.
   * @param texts An array of text strings to be tokenized.
   * @returns A StringTokenizer object.
   */
  export function tokeniser(
    texts: string[],
    options: { clean: boolean }
  ): StringTokenizer;
}
