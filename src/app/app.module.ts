import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule }  from 'angularfire2';
import {AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { CategoryService } from './category.service';
import { FormsModule } from '../../node_modules/@angular/forms';
import { ProductService } from './product.service';
import { DataTableModule } from 'angular5-data-table';
import { CustomFormsModule } from 'ng2-validation';
import { ProductFilterComponent } from './Products/product-filter/product-filter.component';
import { ProdcutCardComponent } from './prodcut-card/prodcut-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProdcutCardComponent,
    ProductQuantityComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      {path:'',component:ProductsComponent},
      {path:'products',component:ProductsComponent},
      {path:'login',component:LoginComponent},
      {path:'shopping-cart',component:ShoppingCartComponent},

      {path:'my/orders',component:MyOrdersComponent,canActivate:[AuthGaurdService]}, 
      {path:'check-out',component:CheckOutComponent,canActivate:[AuthGaurdService]},
      {path:'order-success',component:OrderSuccessComponent,canActivate:[AuthGaurdService]},
      
      {path:'admin/prodcuts/new',component:ProductFormComponent,canActivate:[AuthGaurdService,AdminAuthGuardService]},
      {path:'admin/prodcuts/:id',component:ProductFormComponent,canActivate:[AuthGaurdService,AdminAuthGuardService]},
      {path:'admin/prodcuts',component:AdminProductsComponent,canActivate:[AuthGaurdService,AdminAuthGuardService]},
      {path:'admin/orders',component:AdminOrdersComponent,canActivate:[AuthGaurdService,AdminAuthGuardService]}
    ])
  ],
  providers: [
    AuthService,
    AuthGaurdService,
    UserService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
