import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/models';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchAnimeControl = new FormControl();
  public user: User;

  constructor(private route : ActivatedRoute,
    private router : Router,
    private authenticationService: AuthService)
    {
      this.authenticationService.currentUser.subscribe(x => this.user = x);
    }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }
}
