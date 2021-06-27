import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  usuario: string = '';
  usuarioSubs: Subscription;

  constructor( private authService: AuthService,
                private router: Router,
                private store: Store<AppState>) { }
                
    ngOnInit() {
      this.usuarioSubs = this.store.select('user')
        .pipe(
          filter( ({user}) => user != null)
        )
      .subscribe( (user) => {
        this.usuario = user.user.nombre
      })
    }
    
    logout() {
      this.authService.logout().then( () => {
        this.router.navigate(['/login']);
      })
    }
    
    ngOnDestroy(): void {
      this.usuarioSubs.unsubscribe();
    }
}
