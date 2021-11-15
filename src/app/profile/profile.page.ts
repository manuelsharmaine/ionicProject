import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: [''],
    password: [''],
    id: ['']
   
  });
  user: any;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user);

    this.profileForm.patchValue({
      firstName: this.user.firstname,
      lastName: this.user.lastname,
      email: this.user.email,
      id: this.user.id
    });
  }

  onSubmit(){

    this.userService.updateUserProfile(this.profileForm.value)
    .subscribe((result: any) => {
        localStorage.setItem('currentUser', JSON.stringify(result));
        // console.log(result);
    });
    // console.log(this.profileForm.value);
  }
}
