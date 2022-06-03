import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicsService } from '../home/musics.service';

@Component({
  selector: 'spa-music-edit',
  templateUrl: './music-edit.component.html',
  styleUrls: ['./music-edit.component.css']
})
export class MusicEditComponent implements OnInit {

  constructor(private musicsService:MusicsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((result:any)=>{
      this.musicsService.searchMusic(result.id)
      console.log(this.musicsService.searchMusic(result.id));
      
    })
  }

  
  // this.route.paramMap
  //   .pipe(map(params => params.get('id')), tap(id => (this.id = +id)))
  //   .subscribe(id => {});
  



}
