import { Component, OnInit } from '@angular/core';
import { ApifournisseurService } from '../Services/apifournisseur.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  constructor(private service: ApifournisseurService) { }
  success: any;
  errormsg: any;
  successmsg: any;
  public readData: any[] = [];
  ngOnInit(): void {
    this.service.getAllData().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });
  }


  //getdelete
  deleteId(id_fournisseur: any) {
    console.log(id_fournisseur, 'deleteid==>');
    this.service.deleteData(id_fournisseur).subscribe((res) => {
      console.log(res, 'deleteres');
      this.successmsg = res.message;
      this.service.getAllData().subscribe((res) => {
        console.log(res, "res==>");
        this.readData = res.data;
      });
    });
  }

  userForm = new FormGroup({
    'nom': new FormControl('', Validators.required),
    'prenom': new FormControl('', Validators.required),
    'mail': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.required),
    'adresse': new FormControl('', Validators.required),






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