import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: ApiService, private router: Router) { }

  ngOnInit() {
    this.auth.logout()
    this.router.navigate(['home'])
  }

}
