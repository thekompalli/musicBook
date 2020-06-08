import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediateService {
  musicList = [];
  songData;
  isAllowed = false;
  constructor() { }

  getMusicList(data){
    this.musicList.push(data);
  }
  getSong(data){
    this.songData = data;
  }
}
