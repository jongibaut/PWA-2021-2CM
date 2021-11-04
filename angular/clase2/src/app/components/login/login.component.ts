import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SwalService } from './../../services/swal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formObject = {
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8)
    ]),
    pass: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)
    ])
  }

  form: FormGroup = new FormGroup(this.formObject);

  constructor(private swal: SwalService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup(this.formObject);
  }

  login(): void {
    console.log("click en boton login!!")
    console.log(this.form)

    this.swal.normalMenssge({ html: 'LOGUEADO !!!', timer: 10000 });
    this.router.navigate(['characters'])

  }

  verifyInput(field: string): string {
    let message = '';
    const input = this.form.controls[field];
    input.status == 'INVALID' && input.touched ?
      message = `El campo ${field} es obligatorio` : null
    return message;
  }

}
