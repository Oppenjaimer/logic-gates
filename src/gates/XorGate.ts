import { BaseGate, Input, Output, TruthTable } from "./BaseGate";
import InvalidInputError from "../utils/InvalidInputError";
import product from "../utils/product";

export class XorGate extends BaseGate {
  setOutput() {
    this.output = this.input.filter(Boolean).length % 2 === 1;
  }

  setTruthTable() {
    this.truthTable.forEach((row, index) => this.truthTable[index].push(row.filter(Boolean).length % 2 === 1));
  }

  static getTruthTable(inputs: number = 2): TruthTable {
    if (inputs < 2) throw new InvalidInputError("'inputs' must be greater than or equal to 2");

    let table: TruthTable = product([false, true], inputs);
    table.forEach((row, index) => table[index].push(row.filter(Boolean).length % 2 === 1));
    return table;
  }

  checkInputValidity(input: Input): void {
    if (input.length < 2) throw new InvalidInputError("'input' must contain at least two values");
  }
}

export function xor(input: Input): Output {
  return XorGate.create(input).output;
}
