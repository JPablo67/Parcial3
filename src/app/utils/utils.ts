export class Utils {

    static getRole(): string {
        const usuario = JSON.parse(sessionStorage.getItem('user')!)
        if (usuario) {
          return usuario.role
        } else {
          return ''
        }
      }
  
    static isRole(role: string): boolean{
      const usuario = JSON.parse(sessionStorage.getItem('user')!)
      console.log(usuario);
      
      if (usuario) {
        console.log(usuario.role.toLowerCase() == role.toLowerCase());
        
        return usuario.role.toLowerCase() == role.toLowerCase()
      } else {
        return false
      }
  
    }

    static isInvited(role: string): boolean{
      const usuario = JSON.parse(sessionStorage.getItem('user')!)
      console.log(usuario);
      
      if (usuario) {
        console.log(usuario.role.toLowerCase() == role.toLowerCase());
        
        if(usuario.role.toLowerCase() == role.toLowerCase()){
          return false
        }else{
          return true
        }
      } else {
        return true
      }
  
    }
  }