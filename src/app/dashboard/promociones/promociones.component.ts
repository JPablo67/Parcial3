import { Component } from '@angular/core';
import { Videogame } from 'src/app/videogame/videogame';
import { VideogameService } from 'src/app/videogame/videogame.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent {

  videogames : Videogame[] = []

  constructor(
    private gameService: VideogameService) {

  }

  ngOnInit(): void {
      this.videogames = this.gameService.getGames()
  }

}
