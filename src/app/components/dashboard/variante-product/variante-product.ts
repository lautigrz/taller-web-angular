import { Component, Input, input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Talla } from '../../products/models/sizes.enum';

@Component({
  selector: 'app-variante-product',
  imports: [ReactiveFormsModule],
  templateUrl: './variante-product.html',
  styleUrl: './variante-product.css'
})
export class VarianteProduct {
  @Input() form!: FormGroup;
  tallas = Object.values(Talla);

  onCheckboxChange(event: any) {
    const fg = this.form;

    if (!fg) return

    const tallasArray: FormArray = fg.get('tallasDisponibles') as FormArray;

    if (event.target.checked) {
      tallasArray.push(new FormControl(event.target.value));
    } else {
      const index = tallasArray.controls.findIndex(x => x.value === event.target.value);
      if (index >= 0) tallasArray.removeAt(index);
    }
  }
}
