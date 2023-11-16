import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';
import { Videogame } from 'src/app/videogame/videogame';
import { VideogameService } from 'src/app/videogame/videogame.service';

@Component({
  selector: 'app-gamerdashboard',
  templateUrl: './gamerdashboard.component.html',
  styleUrls: ['./gamerdashboard.component.css']
})
export class GamerdashboardComponent implements OnInit{


  usuario : User = JSON.parse(sessionStorage.getItem('user')!)
  
  

  videogames : Videogame[] = []

  constructor(
    private gameService: VideogameService) {

  }

  ngOnInit(): void {
      this.videogames=this.gameService.getGames()
  }



}
