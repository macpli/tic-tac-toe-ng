import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { PlayerComponent } from './components/player/player.component';
import { StartComponent } from './components/start/start.component';
import { PlayMenuComponent } from './components/start/play-menu/play-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PlayerComponent,
    StartComponent,
    PlayMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'play-menu', component: PlayMenuComponent},
      {path: 'play', component: BoardComponent},
      {path: '**', component: StartComponent},
      {path: '', component: StartComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
