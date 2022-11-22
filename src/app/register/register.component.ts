import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthserviceService } from '../Services/authservice.service';



interface User {
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  phone: String;
  adress: String;

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    firstname: '',
    lastname: '',
    phone: '',
    adress: '',
    email: '',
    password: ''

  }

  //users: User[] = client;
  createData :any ;

  hide = true;
  hidee = true;
  firstName!: String;
  lastName!: string;
  email!: string;
  phone!: string;
  adress!: string;
  password!: string;

  registerForm = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      adress: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required]),
    },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: CustomValidators.passwordsMatching }
  );

  constructor(private http: HttpClient, private auth: AuthserviceService, private router: Router) { }
  register() {
    if (!this.registerForm.valid) {
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };


    this.auth.register(this.user)
      .subscribe(
        res => {
          Swal.fire(
            'Good job!',
            'Your account has been created !',
            'success'
          )

          this.router.navigate(['/login']);

        }, err => {
          console.log(err);

        }
      )



  }

  ngOnInit(): void {
     /*this.auth.createData(this.user).subscribe((res) => {
       console.log(res, "res==>");
     });*/
  }
}
export class CustomValidators {
  static passwordsMatching(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const passwordConfirm = control.get('passwordConfirm')?.value;

    // Check if passwords are matching. If not then add the error 'passwordsNotMatching: true' to the form
    if (
      password === passwordConfirm &&
      password !== null &&
      passwordConfirm !== null
    ) {
      return null;
    } else {
      return { passwordsNotMatching: true };
    }
  }
}


