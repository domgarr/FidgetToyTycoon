import { NgModule } from "@angular/core";
import { OrderFormComponent } from "./order-form/order-form.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "orders", component: OrderFormComponent },
  { path: "production", component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
