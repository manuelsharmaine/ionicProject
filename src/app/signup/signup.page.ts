import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });


  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      province: ['']
    }),
    hobbies: this.fb.array([
      this.fb.control('')
    ])
  });


  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.displayUsers();
  }

  onSubmit(){
    this.userService.submitUser(this.profileForm.value).subscribe(response => {
      console.log(response);
    });
    console.log(this.profileForm.value);
  }

  //sample method for displaying user from http client request
  displayUsers(){
    this.userService.getUsers().subscribe(response => {
      console.log(response);
    })
  }

  //sample method for deleting user specific from http client request may be applied to profile form to remove account
  deleteUser(){
    this.userService.deleteUser(15).subscribe();
  }


  //sample code for updating value of form
  update() {
    this.profileForm.patchValue({
      firstName: 'John',
      lastName: 'Doe'
    });
  }
  get hobbies() {
    return this.profileForm.get('hobbies') as FormArray;
  }

  addHobby(){
    this.hobbies.push(this.fb.control(''));
  }
}
