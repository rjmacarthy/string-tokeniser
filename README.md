### string-tokeniser

A simple implementation inspired by [Keras Tokenizer](https://www.tensorflow.org/api_docs/python/tf/keras/preprocessing/text/Tokenizer) in JavaScript.

```
npm i string-tokeniser
```

```
import { tokeniser } from 'string-tokeniser'

console.log(tokeniser(['hello world', 'how are you?']))
```

```
{
  indexWord: { '1': 'hello', '2': 'world', '3': 'how', '4': 'are', '5': 'you' },
  wordIndex: { hello: '1', world: '2', how: '3', are: '4', you: '5' },
  wordCounts: { hello: 1, world: 1, how: 1, are: 1, you: 1 },
  sequences: [ [ 1, 2 ], [ 3, 4, 5 ] ]
}
```

MIT
