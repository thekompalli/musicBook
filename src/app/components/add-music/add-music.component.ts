import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MediateService } from 'src/app/services/mediate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent implements OnInit {
  musicForm: FormGroup;
  musicList = [];

  constructor(private fb:FormBuilder, private ms:MediateService, private router:Router) {
   
   }

  ngOnInit(): void {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.musicForm = this.fb.group({
      name: ['', Validators.required],
      genre: [''],
      artist: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern(reg)]],
      description: ['']
    })
  }
  onSubmit(){
    this.ms.getMusicList(this.musicForm.value);
    this.router.navigate(["/book"])
  }
  
}
