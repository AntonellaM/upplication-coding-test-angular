import { Injectable } from '@angular/core';
import {PointCard} from './point-card';
import {Observable, of} from 'rxjs';
import {PointCardDetail} from './point-card-detail';

@Injectable({
  providedIn: 'root'
})
export class PointsCardService {

  constructor() { }

  get(): Observable<PointCard> {
    const pointCard = new PointCard();
    pointCard.points = 42;
    pointCard.pointsCard = [];

    const pointCardDetail = new PointCardDetail();
    pointCardDetail.image = 'https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg';
    pointCardDetail.name = '2x1 en cenas';
    pointCardDetail.points = 67;
    pointCard.pointsCard.push(pointCardDetail);

    const pointCardDetail2 = new PointCardDetail();
    pointCardDetail2.image = 'http://cactusfood.com.ec/home/sites/default/files/catus4.png';
    pointCardDetail2.name = 'Postre gratis';
    pointCardDetail2.points = 100;
    pointCard.pointsCard.push(pointCardDetail2);

    return of(pointCard);
  }
}
