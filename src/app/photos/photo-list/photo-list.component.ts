import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from 'src/app/models/IPhoto';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  
  photos: IPhoto[] = [];
  filter: string = '';

  
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {

      const userName = this.activatedRoute
      .snapshot
      .params
      .userName;

      this.photoService
        .listFromUser(userName)
        .subscribe(photos => this.photos = photos);
  }
  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.filter = elemento.value;
    }
  }

}
