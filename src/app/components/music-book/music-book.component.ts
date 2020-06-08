import { Component, OnInit } from '@angular/core';
import { MediateService } from 'src/app/services/mediate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music-book',
  templateUrl: './music-book.component.html',
  styleUrls: ['./music-book.component.scss']
})
export class MusicBookComponent implements OnInit {
  musicData;
  
  constructor(private ms:MediateService, private router:Router) { 
    this.musicData = this.ms.musicList
    console.log(this.musicData)
  }

  ngOnInit(): void {
  }


  play(index){
    this.ms.getSong(this.musicData[index])
    this.ms.isAllowed = true;
    this.router.navigate(["/playzone"]);
  }
  clear(index){
    this.musicData.splice(index,1)
  }
  add(){
    this.router.navigate(["/"])
  }
}
