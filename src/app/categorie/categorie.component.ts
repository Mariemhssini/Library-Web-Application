import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {

  constructor(private service: ApiserviceService) {

  }

  success: any;
  errormsg: any;
  successmsg: any;
  public readData: any;


  ngOnInit(): void {
    this.service.getAllData().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });
  }
  //getdelete
  deleteId(id_categorie: any) {
    console.log(id_categorie, 'deleteid==>');
    this.service.deleteData(id_categorie).subscribe((res) => {
      console.log(res, 'deleteres');
      this.successmsg = res.message;
      this.service.getAllData().subscribe((res) => {
        console.log(res, "res==>");
        this.readData = res.data;
      });
    });
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
        this.service.getAllData().subscribe((res) => {
          console.log(res, "res==>");
          this.readData = res.data;
        });
      });

    }
    else {
      this.errormsg = 'all field is required ! ';
    }
  }


}


