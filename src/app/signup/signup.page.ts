import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
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
    address: this.fb.group({
      street: [''],
      city: [''],
      province: ['']
    }),
    hobbies: this.fb.array([
      this.fb.control('')
    ])
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.profileForm);
  }

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
