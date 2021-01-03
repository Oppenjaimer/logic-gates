# @jaimermxd/logic-gates

A simple package introducing logic gates.

## Installation

```sh
$ npm install @jaimermxd/logic-gates
```

## Usage

```js
const { AndGate, and, not, NotGate } = require("@jaimermxd/logic-gates");

// Basic gate usage

var andGate = AndGate.create([true, false, true, false, false]);
console.log(andGate.input); // [ true, false, true, false, false ]
console.log(andGate.output); // false

var shortAndGate = and([true, true, true]);
console.log(shortAndGate); // true

var shortNotGate = not([false, true, true, true, false, true]);
console.log(shortNotGate); // [ true, false, false, false, true, false ]

// Truth tables

var xorGate = XorGate.create([false, true]);
console.log(xorGate.truthTable);

/*
[
  [ false, false, false ],
  [ false, true, true ],
  [ true, false, true ],
  [ true, true, false ]
]
*/

var xorTruthTable = XorGate.getTruthTable();
console.log(xorTruthTable);

/*
[
  [ false, false, false ],
  [ false, true, true ],
  [ true, false, true ],
  [ true, true, false ]
]
*/
```

## Documentation

Check out the [repository's wiki](https://github.com/JaimermXD/logic-gates/wiki) for a detailed documentation of the package.

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

## License

Released under the [MIT](https://github.com/JaimermXD/logic-gates/blob/master/LICENSE) license.
