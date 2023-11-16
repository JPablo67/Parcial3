import { Injectable } from '@angular/core';
import { Videogame } from './videogame';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  private videogames: Videogame[] = [

    {
      nombre: "Grand Theft Auto",
      launchDate: "10-06-1995",
      price:80,
      minAge:18,
      image:"https://sm.ign.com/ign_nordic/cover/g/grand-thef/grand-theft-auto-v_69at.jpg"
    },
    {
      nombre: "Grand Theft Auto",
      launchDate: "10-06-1995",
      price:80,
      minAge:18,
      image:"https://sm.ign.com/ign_nordic/cover/g/grand-thef/grand-theft-auto-v_69at.jpg"
    },
    {
      nombre: "Grand Theft Auto",
      launchDate: "10-06-1995",
      price:80,
      minAge:18,
      image:"https://sm.ign.com/ign_nordic/cover/g/grand-thef/grand-theft-auto-v_69at.jpg"
    },
    {
      nombre: "Grand Theft Auto",
      launchDate: "10-06-1995",
      price:80,
      minAge:18,
      image:"https://sm.ign.com/ign_nordic/cover/g/grand-thef/grand-theft-auto-v_69at.jpg"
    },

  ];
  
  constructor() {
    const storedVideogames = localStorage.getItem('videogames');
    if (storedVideogames) {
      this.videogames = JSON.parse(storedVideogames);
    }
  }

  getGames(): Videogame[] {
    return this.videogames;
  }

  agregarGame(nuevoVideojuego: Videogame) {
    this.videogames.push(nuevoVideojuego);
    localStorage.setItem('users', JSON.stringify(this.videogames));
  }
}
