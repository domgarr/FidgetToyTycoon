import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OrderFormComponent } from "./order-form/order-form.component";
import { PersonService } from "./service/person.service";
import { FormsModule } from "@angular/forms";
import { CreateProductComponent } from "./create-product/create-product.component";
import { DataViewModule } from "primeng/dataview";
import { PanelModule } from "primeng/panel";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from "primeng/progressbar";
import { RatingModule } from "primeng/rating";
import { FilterService, MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";
import { ViewProductComponent } from "./view-product/view-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    CreateProductComponent,
    ViewProductComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataViewModule,
    PanelModule,
    ButtonModule,
    ProgressBarModule,
    RatingModule,
    ToastModule,
  ],
  providers: [PersonService, FilterService, PrimeNGConfig, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
