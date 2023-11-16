import { CanActivateFn } from '@angular/router';
import { SwalUtils } from '../utils/swal-utils';

export const promoGuard: CanActivateFn = (route, state) => {

    const usuario = JSON.parse(sessionStorage.getItem('user')!)
    console.log(usuario);
    
    if (usuario) {
      console.log(usuario.role.toLowerCase() == 'invitado');
      
      if(usuario.role.toLowerCase() == 'invitado'){
        SwalUtils.customMessageError('Acceso denegado','Lo sentimos , solo usuarios registrados o el administrado puede acceder a esta area')
        return false
      }else{
        return true
      }
    } else {
        return false
    }

  
};
