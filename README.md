# logic-gates

A simple package introducing logic gates.

## Installation

```sh
$ npm install @jaimermxd/logic-gates
```

## Usage

```js
const { AndGate, and, not, NotGate } = require("@jaimermxd/logic-gates");

// Basic gate usage

let andGate = AndGate.create([true, false, true, false, false]);
console.log(andGate.input); // [ true, false, true, false, false ]
console.log(andGate.output); // false

let shortAndGate = and([true, true, true]);
console.log(shortAndGate); // true

let shortNotGate = not([false, true, true, true, false, true]);
console.log(shortNotGate); // [ true, false, false, false, true, false ]

// Truth tables

let xorGate = XorGate.create([false, true]);
console.log(xorGate.truthTable); // [ [ false, false, false ], [ false, true, true ], [ true, false, true ], [ true, true, false ] ]

let xorTruthTable = XorGate.getTruthTable(2);
console.log(xorTruthTable); // [ [ false, false, false ], [ false, true, true ], [ true, false, true ], [ true, true, false ] ]
```

## Documentation

Every gate is a class extending `BaseGate`, and can be created in two different ways:

- Using the class' `create()` method
- Using the gate's function

When creating a gate using the first method, you can access all three of the resulting object's properties (`input`, `output` and `truthTable`). However, when using the second method, the `output` property's value is the one accessed.

### Gate methods

- `static create(input)`

  | Parameter |    Type     | Default |               Description               |
  | :-------: | :---------: | :-----: | :-------------------------------------: |
  |   input   | `boolean[]` | _none_  | The input or inputs the gate will have. |

  Returns: gate object

- `static getTruthTable(inputs)`

  | parameter |   Type   | Default |               Description                |
  | :-------: | :------: | :-----: | :--------------------------------------: |
  |  inputs   | `number` |   `2`   | The number of inputs the gate will have. |

  Returns: truth table

### Gate structure

```js
{
  input: boolean[],
  output: boolean | boolean[],
  truthTable: Array<(boolean | boolean[])[]>
}
```

### Truth table structure

```js
[
  [ ...input, output ],
  [ ...input, output ],
  ...
]
```

## License

Released under the [MIT](https://github.com/JaimermXD/logic-gates/blob/master/LICENSE) license.
