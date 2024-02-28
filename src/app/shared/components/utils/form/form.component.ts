import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  technicallSkillsNumber: number[] = []

  ngOnInit(): void {
    this.buildForm()
    this.addNewTechnicallSkill()
  }

  buildForm() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      stack: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      career: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      year: [0, [Validators.required, Validators.min(17), Validators.max(100)]],
      technicallSkill: this.formBuilder.array([])
    })
  }

  addNewTechnicallSkill() {
    this.technicallSkillsNumber.push(this.technicallSkillsNumber.length)
    const control = this.myForm.controls['technicallSkill'] as FormArray;
    control.push(this.formBuilder.group({
      skill: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      years: [0, [Validators.required, Validators.min(1)]]
    }))
  }

  get technicalSkills(): FormArray {
    return this.myForm.get('technicallSkill') as FormArray;
  }

  onSave() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.data.push(this.myForm.value);
      this.dataEmitter.emit(this.data);
      // console.log(this.data);
    }

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }
  }

  isvalidField(field: string): boolean | null {
    let control: AbstractControl | null;
    if (field.includes('.')) {
      const [arrayName, arrayIndex, controlName] = field.split('.');
      const index = Number(arrayIndex);
      if (isNaN(index)) return false;
      control = ((this.myForm.get(arrayName) as FormArray).controls[index] as FormGroup).get(controlName);
    } else {
      control = this.myForm.get(field);
    }
    return (control?.touched && control?.invalid) ?? false;
  }

  getFieldError(field: string): string | null {
    let control: AbstractControl | null;
    let fieldName = field;
    if (field.includes('.')) {
      const [arrayName, arrayIndex, controlName] = field.split('.');
      const index = Number(arrayIndex);
      if (isNaN(index)) return null;
      control = ((this.myForm.get(arrayName) as FormArray).controls[index] as FormGroup).get(controlName);
      fieldName = controlName;
    } else {
      control = this.myForm.get(field);
    }

    if (!control) return null;

    const errors = control.errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Debe tener mínimo ${this.myForm.get(field)?.errors?.['minlength'].requiredLength} letras`
        case 'maxlength':
          return "Debe tener máximo 20 letras"
        case 'min':
          if (field.startsWith('technicallSkill.') && field.endsWith('.years')) {
            return `Minimo ${errors['min'].min} año`;
          } else {
            return `Debe tener mínimo ${errors['min'].min} años`;
          }
        case 'max':
          return "Debe tener maximo 100 años"
        default:
          return null
      }
    }
    return null
  }
}
