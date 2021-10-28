import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = new FormControl('');
  constructor(private router: Router) { }

  ngOnInit() {
  }


  login(){
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(['/home']);  
  }

  update() {
    this.password.setValue('sad');
  }
}
