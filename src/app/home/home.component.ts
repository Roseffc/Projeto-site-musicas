import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicsService } from './musics.service';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  musics:any= []

  constructor(private musicsService: MusicsService,
              private router: Router
    ) { }

  ngOnInit(): void {
     this.musics= this.musicsService.getListMusics()
  }

  edit(id:any){
    debugger
    this.router.navigateByUrl("/edit/"+id);
    console.log(id)
  }


}




