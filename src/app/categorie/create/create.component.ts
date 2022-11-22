import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private service: ApiserviceService) { }
  errormsg: any;
  success: any;
  ngOnInit(): void {
  }
  userForm = new FormGroup({
    'libelle': new FormControl('', Validators.required)
  });

  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.service.createData(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
        this.success = res.message;
      });

    }
    else {
      this.errormsg = 'all field is required ! ';
    }
  }
}
