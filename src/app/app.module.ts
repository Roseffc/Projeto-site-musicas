import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { CardMusicaComponent } from './home/card-musica/card-musica.component';
import { MusicEditComponent } from './music-edit/music-edit.component';
import { MusicsService } from './home/musics.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardMusicaComponent,
    MusicEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [MusicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
