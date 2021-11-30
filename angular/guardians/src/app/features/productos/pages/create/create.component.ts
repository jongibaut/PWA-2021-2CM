import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: any; // :FormGroup
  selectedFile: any; // :File
  previewUrl: any;
  imageSelected: boolean = false;


  formObject: any = {
    nombre: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
  }

  createForm(): void {
    this.form = new FormGroup(this.formObject);
  }

  onFileSelected(e: any) {
    const reader = new FileReader();
    const { files } = e.target;
    if (files && files.length) {
      this.selectedFile = files[0];
      reader.onload = (e) => {
        this.previewUrl = reader.result;
        this.imageSelected = true;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  constructor(/*declaro el servicio*/) { }

  async upload() {
    const { nombre, precio, stock } = this.form.value;
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('precio', precio);
    fd.append('stock', stock);
    fd.append('imagen', this.selectedFile, this.selectedFile.name);
    //const result = await this.service.create(fd); result me devuelve la respuesta del servidor
  }

  ngOnInit(): void {
    this.createForm();
  }

}
