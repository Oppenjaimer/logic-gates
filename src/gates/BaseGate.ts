import InvalidInputError from "../utils/InvalidInputError";
import product from "../utils/product";

export type Input = boolean[];
export type Output = boolean[] | boolean;
export type TruthTable = Array<(boolean | boolean[])[]>;

export class BaseGate {
  input: Input;
  output: Output;
  truthTable: TruthTable;

  constructor(input: Input) {
    if (!Array.isArray(input) || !input.every(inp => typeof inp === "boolean")) {
      throw new InvalidInputError("'input' must be an array of boolean values");
    }

    this.checkInputValidity(input);

    this.input = input;
    this.output = [];
    this.truthTable = product([false, true], this.input.length);

    this.setOutput();
    this.setTruthTable();
  }

  static create(input: Input): BaseGate {
    let gate = new this(input);
    return gate;
  }

  static getTruthTable(): void {}

  protected setOutput(): void {}

  protected setTruthTable(): void {}

  protected checkInputValidity(input: Input): void {}
}
