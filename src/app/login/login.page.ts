import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl  } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = new FormControl('');
  user: any;
  constructor(private router: Router, private userService: UserService, private toastController: ToastController) { }

  ngOnInit() {
    //check if there is an existing account redirect to home
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user);
    if(this.user){
      this.router.navigate(['/home']);  
    }
  }


  login(){
 
    //use a user service to access the api and pass the email and password 
    //this.email use simple declation 
    //this.password.value used formcontrol so you need to use the value property 
    this.userService.login(this.email, this.password.value)
    .subscribe((result:any) => {
      console.log(result);
      //result.success on the api there is a success property set to true or false to easily check on the mobile
        if(result.success){
          //store the result.data you may use session storage on this part
          localStorage.setItem('currentUser', JSON.stringify(result.data));
          this.router.navigate(['/home']);  
        }else{
          //use a toast to display error
          //you may include message property in the return from you backend
          this.presentToast(result.message);
        }
    });
  }

  async presentToast(message){
    const toast = await this.toastController.create({
      message: message,
      duration: 500
    });
    toast.present();

  }

}
