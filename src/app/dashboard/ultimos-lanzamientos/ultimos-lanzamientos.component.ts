import { Component } from '@angular/core';
import { Videogame } from '../../videogame/videogame';
import { VideogameService } from '../../videogame/videogame.service';

@Component({
  selector: 'app-ultimos-lanzamientos',
  templateUrl: './ultimos-lanzamientos.component.html',
  styleUrls: ['./ultimos-lanzamientos.component.css']
})
export class UltimosLanzamientosComponent {

  videogames : Videogame[] = []

  constructor(
    private gameService: VideogameService) {

  }

  ngOnInit(): void {
      this.videogames = this.gameService.getGames()
  }

}
