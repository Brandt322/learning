import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  myForm!: FormGroup;
  @Output() dataEmitter = new EventEmitter<any[]>();
  data: any[] = []
  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      stack: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      career: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      year: [0, [Validators.required, Validators.min(17), Validators.max(100)]],
    })
  }

  onSave() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.data.push(this.myForm.value);
      this.dataEmitter.emit(this.data);
      console.log(this.data);
    }

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }
  }

  isvalidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null

    const errors = this.myForm.controls[field].errors || {}

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Debe tener mínimo ${this.myForm.get(field)?.errors?.['minlength'].requiredLength} letras`
        case 'maxlength':
          return "Debe tener máximo 20 letras"
        case 'min':
          return "Debe tener minimo 17 años"
        case 'max':
          return "Debe tener maximo 100 años"
        default:
          return null
      }
    }
    return null
  }
}
