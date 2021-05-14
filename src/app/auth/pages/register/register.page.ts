import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor( private formBuilder: FormBuilder ) { }

  form: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required ] ],
    phone: [ '', [ Validators.required ] ],
    gender: [ '', [ Validators.required ] ],
    email: [ '', [ Validators.required, Validators.pattern( this.emailPattern ) ], ],
    password: [ '', [ Validators.required ] ],
    password2: [ '', [ Validators.required ] ]
  })

  ngOnInit() {
  }

}
