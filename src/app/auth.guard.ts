import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MediateService } from './services/mediate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private ms:MediateService, private router:Router){}
  canActivate(): boolean {
   if (this.ms.isAllowed){
     return true
   }
   else{
     this.router.navigate(["/"])
     return false
   }
  }
  
}
