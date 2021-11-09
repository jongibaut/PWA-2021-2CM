import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { SwalService } from './../../services/swal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loaded: boolean = false;
  formObject: any = {
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(25)
    ])
  }
  form: FormGroup = new FormGroup(this.formObject);
  constructor(private service: LoginService, private swal: SwalService) { }

  ngOnInit(): void {
    this.form = new FormGroup(this.formObject);
    this.loaded = true;
  }
  verifyField(field: string): string {
    let mensaje = ``;
    const control = this.form.controls[field];
    control.status === 'INVALID' && control.touched
      ? (mensaje = `${field} es obligatorio`)
      : '';
    return mensaje;
  }
  async login() {
    console.log(this.form);
    try {
      const result: any = await this.service.auth(this.form.value);
      this.swal.normalMessage({ html: 'Sesion Iniciada' });
      /*
        localStorage.setItem('JWT', result.JWT);
        localStorage.setItem('usuario', JSON.stringify(result.info))
      */
    }
    catch (e) {
      this.swal.normalMessage({ html: 'Usuario o password incorrectos', icon: 'error' });
    }
  }
}
