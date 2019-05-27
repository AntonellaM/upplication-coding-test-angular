import {Component, OnInit} from '@angular/core';
import {PointsCardService} from './points-card.service';
import {PointCard} from './point-card';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend-angular-css';
  pointCard: PointCard

  constructor(private pointsCardService: PointsCardService) {}

  ngOnInit() {
    this.pointsCardService.get()
      .subscribe(points => this.pointCard = points);
  }
}
