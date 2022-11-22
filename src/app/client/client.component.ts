import { AuthserviceService } from '../Services/authservice.service';
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
import { CustomValidators } from '../register/register.component';

interface User {
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  phone: String;
  adress: String;

}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent {
  //users: User[] = clientdata;
  readData: any;
  public users: any;


  user = {
    firstname: '',
    lastname: '',
    phone: '',
    adress: '',
    email: '',
    password: ''

  }

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
  constructor(private service: AuthserviceService) { }
  ngOnInit(): void {
    /*this.service.getAllData().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });*/
  }
}
