import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import data from '../data/data.json';
import { Router } from '@angular/router';
import { AuthserviceService } from '../Services/authservice.service';
import Swal from 'sweetalert2';



interface user {
  id: Number,
  email: String,
  password: String,
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user = {
    email: '',
    password: ''
  }

  hide = true;
  result: String | undefined;
  email!: string;
  password!: string;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private http: HttpClient, private auth: AuthserviceService, private router: Router) { }
  ngOnInit(): void {

   }
   token: any;
   login() {
 
     let credentials = {
       email: this.email,
       password: this.password,
     };
 
     this.auth.login(this.user)
       .subscribe(
         res => {
           this.token = res;
          //  localStorage.setItem('token', this.token.myToken)
          //  console.log(res);
           this.router.navigate([''])
         },
         err => {
           console.log(err);
           Swal.fire({
             position: 'top-end',
             icon: 'error',
             title: 'Votre email ou mot de passe est incorrect !',
             showConfirmButton: false,
             timer: 1500
           })
         }
       )
   }
 
 
}
