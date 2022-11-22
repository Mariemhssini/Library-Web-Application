import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApilivreService } from './apilivre.service';
@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  constructor(private service: ApilivreService) { }

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
  deleteId(id_livre: any) {
    console.log(id_livre, 'deleteid==>');
    this.service.deleteData(id_livre).subscribe((res) => {
      console.log(res, 'deleteres');
      this.successmsg = res.message;
      this.service.getAllData().subscribe((res) => {
        console.log(res, "res==>");
        this.readData = res.data;
      });
    });
  }

  userForm = new FormGroup({
    'nom_livre': new FormControl('', Validators.required),
    'nom_ecrivain': new FormControl('', Validators.required),
    'prix': new FormControl('', Validators.required),
    'Description': new FormControl('', Validators.required),
    'Disponibilite': new FormControl('', Validators.required),
    'Langue': new FormControl('', Validators.required),
    'type': new FormControl('', Validators.required),
    'Categorie': new FormControl('', Validators.required),
    'QTE': new FormControl('', Validators.required),




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
