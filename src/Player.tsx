interface AbstractPlayer {}

export class Player extends Array implements AbstractPlayer {
  static _count = 0;
  static get count() {
    return this._count;
  }
  *[Symbol.iterator]() {
    yield* this.values();
  }

  private _name!: string;
  constructor() {
    super();
  }
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
}
