import {PointCardDetail} from './point-card-detail';

export class PointCard {

  private _points: number;
  private _pointsCard: Array<PointCardDetail>;

  get points(): number {
    return this._points;
  }

  set points(value: number) {
    this._points = value;
  }

  get pointsCard(): Array<PointCardDetail> {
    return this._pointsCard;
  }

  set pointsCard(value: Array<PointCardDetail>) {
    this._pointsCard = value;
  }
}
