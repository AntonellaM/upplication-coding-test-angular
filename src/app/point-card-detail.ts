export class PointCardDetail {

  private _name: string;
  private _points: number;
  private _image: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get points(): number {
    return this._points;
  }

  set points(value: number) {
    this._points = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}
