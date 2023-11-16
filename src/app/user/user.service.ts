import { Injectable, OnInit } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private users: User[] = [
    
    {
      email: "juanpa@gmail.com",
      password: "123456",
      role: "Admin"
  },
  {
      email: "angular@gmail.com",
      password: "654321",
      role: "Gamer"
  },
  {
    email: "pablo@gmail.com",
    password: "111111",
    role: "Invitado"
  },

  ];
  
  constructor() { 

    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }

  }

  

  getUsuarios(): User[] {
    return this.users;
  }

  agregarUsuario(nuevoUsuario: User) {
    this.users.push(nuevoUsuario);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  findUserByEmailAndPassword(email: string, password: string): User | undefined{
    
    for(let User of this.users){
      if(User.email== email && User.password==password){
        return User
      }
      
    }
    return undefined
  }

  login(email: string, password: string): boolean {
    const foundUser = this.findUserByEmailAndPassword(email, password);
    if (foundUser) {
      console.log("User found:", foundUser);
      sessionStorage.setItem("user",JSON.stringify(foundUser)!)
      return true
    } else {
      console.log("User not found or password incorrect.");
      return false
    }
    }


}
