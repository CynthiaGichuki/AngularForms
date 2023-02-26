import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  default = 'default'
  genders = ['Male', 'Female']
  form!: FormGroup
  // unAllowedUserNames:['']

  ngOnInit(): void {
    this.form = new FormGroup({
      personalDetails: new FormGroup({
        fullname: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      role: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      gender: new FormControl('Female', [Validators.required]),
      hobbies: new FormArray([])
    })
  }
  submitData() {
    console.log(this.form);
  }

  addHobby() {
    let control = new FormControl(null, [Validators.required]);
    (this.form.get('hobbies') as FormArray).push(control)

  }
  getControls() {
    return (this.form.get('hobbies') as FormArray).controls
  }
  removeHobby(i: number) {
    (this.form.get('hobbies') as FormArray).removeAt(i)
  }
}
