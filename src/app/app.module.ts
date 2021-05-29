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

@NgModule({
  declarations: [AppComponent, OrderFormComponent, CreateProductComponent],
  imports: [
    BrowserModule,
    FormsModule,
    DataViewModule,
    PanelModule,
    ButtonModule,
    ProgressBarModule,
  ],
  providers: [PersonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
