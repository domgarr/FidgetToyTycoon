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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BadgeModule } from "primeng/badge";
import { CardModule } from "primeng/card";
import { Menubar, MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";

import { ProgressSpinnerModule } from "primeng/progressspinner";
import { TagModule } from "primeng/tag";
import {
  NgxWebstorageModule,
  StrategyCacheService,
  StrategyIndex,
} from "ngx-webstorage";
import { ProductService } from "./service/product.service";
import { MenuComponent } from "./menu/menu.component";
import { AppRoutingModule } from './app-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    CreateProductComponent,
    ViewProductComponent,
    ProductListComponent,
    MenuComponent,
    OrderListComponent,
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
    BrowserAnimationsModule,
    BadgeModule,
    ProgressSpinnerModule,
    TagModule,
    NgxWebstorageModule.forRoot(),
    CardModule,
    MenubarModule,
    InputTextModule,
    AppRoutingModule,
  ],
  providers: [
    PersonService,
    FilterService,
    PrimeNGConfig,
    MessageService,
    ProductService,
    StrategyIndex,
    StrategyCacheService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
