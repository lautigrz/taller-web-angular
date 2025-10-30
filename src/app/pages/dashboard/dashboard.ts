import { Component, inject } from '@angular/core';
import { ImagenProduct } from '../../dashboard/imagen-product/imagen-product';
import { FormProduct } from "../../dashboard/form-product/form-product";
import { VarianteProduct } from "../../dashboard/variante-product/variante-product";
import { Button } from "../../shared/ui/button/button";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoFormValue } from '../../dashboard/models/new-product.interface';
import { DashboardService } from '../../dashboard/data-access/dashboard.service';
import { LoadingComponent } from "../../shared/ui/loading-component/loading-component";
import { ProductStateService } from '../../core/data-access/product-state.service';

@Component({
  selector: 'app-dashboard',
  imports: [ImagenProduct, FormProduct, VarianteProduct, Button, ReactiveFormsModule, LoadingComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {


  private dashboardService = inject(DashboardService)
  private productState = inject(ProductStateService);

  loading = false;

  constructor() { }
  productoForm = new FormGroup({
    imagen: new FormControl<File[] | null>(null, Validators.required),
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    equipo: new FormControl('', Validators.required),
    liga: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    cantidad: new FormControl(0, Validators.required),
    tallasDisponibles: new FormArray([])

  });


  onSubmit() {

    if (this.productoForm.valid) {
      this.loading = true;
      const producto: ProductoFormValue = {
        imagen: this.productoForm.value.imagen!,
        titulo: this.productoForm.value.titulo!,
        descripcion: this.productoForm.value.descripcion!,
        equipo: this.productoForm.value.equipo!,
        liga: this.productoForm.value.liga!,
        color: this.productoForm.value.color!,
        precio: Number(this.productoForm.value.precio),
        cantidad: this.productoForm.value.cantidad!,
        tallasDisponibles: this.productoForm.value.tallasDisponibles || []
      };

      this.dashboardService.crearNuevoProducto(producto).subscribe({
        next:(data) => {
          this.loading = false;
          console.log("Producto con exito",this.loading, data);
          this.productState.addProduct(data)
          this.productoForm.reset();
        },
        error:(err) => {
          this.loading = false;
          console.log(err);
        }
      })

    }

  }
}
