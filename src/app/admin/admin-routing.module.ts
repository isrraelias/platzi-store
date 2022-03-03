import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { NavComponent } from "./components/nav/nav.component";
import { TableComponent } from "./components/table/table.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { FormProductComponent } from "./components/form-product/form-product.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroUsuarioComponent } from "./components/registro-usuario/registro-usuario.component";

const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    children:[
      {
        path:'create',
        component: ProductFormComponent
      },
      {
        path:'inventary',
        component: TableComponent
      },
      {
        path:'home',
        component: DashboardComponent
      },
      {
        path:'products',
        component: ProductsListComponent
      },
      {
        path:'products/create',
        component: FormProductComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'registroUsuario',
        component: RegistroUsuarioComponent
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
