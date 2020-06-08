import { Component, OnInit } from '@angular/core';
import { MediateService } from 'src/app/services/mediate.service';

@Component({
  selector: 'app-playzone',
  templateUrl: './playzone.component.html',
  styleUrls: ['./playzone.component.scss']
})
export class PlayzoneComponent implements OnInit {

  dataRet;
  constructor(private ms:MediateService) {  this.dataRet = this.ms.songData }

  ngOnInit(): void {
  }

}
