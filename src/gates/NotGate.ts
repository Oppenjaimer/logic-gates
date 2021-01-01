import { BaseGate, Input, Output, TruthTable } from "./BaseGate";
import InvalidInputError from "../utils/InvalidInputError";
import product from "../utils/product";

export class NotGate extends BaseGate {
  setOutput() {
    this.output = this.input.map(inp => !inp);
  }

  setTruthTable() {
    this.truthTable.forEach((row, index) => this.truthTable[index].push([...row].map(inp => !inp)));
  }

  static getTruthTable(inputs: number = 1): TruthTable {
    if (inputs < 1) throw new InvalidInputError("'inputs' must be greater than or equal to 1");

    let table: TruthTable = product([false, true], inputs);
    table.forEach((row, index) => table[index].push([...row].map(inp => !inp)));
    return table;
  }

  checkInputValidity(input: Input): void {
    if (input.length < 1) throw new InvalidInputError("'input' must contain at least one value");
  }
}

export function not(input: Input): Output {
  return NotGate.create(input).output;
}
