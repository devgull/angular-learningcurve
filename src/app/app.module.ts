import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MainComponent } from "./features/main.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
import { MaterialModule } from './components/shared/material.module';
import { MatInputModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    MaterialModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterModule.forRoot([
       {
        path: "main",
        component: MainComponent
      },
      {
        path: "store",
        component: StoreComponent,

        canActivate: [StoreFirstGuard]
      },

      {
        path: "cart",
        component: CartDetailComponent,

        canActivate: [StoreFirstGuard]
      },

      {
        path: "checkout",
        component: CheckoutComponent,

        canActivate: [StoreFirstGuard]
      },

      {
        path: "admin",

        loadChildren: "./admin/admin.module#AdminModule",

        canActivate: [StoreFirstGuard]
      },

      { path: "**", redirectTo: "/main" }
    ])
  ],
  exports: [
    MaterialModule
  ],
  providers: [StoreFirstGuard],

  declarations: [AppComponent, MainComponent],

  bootstrap: [AppComponent]
})
export class AppModule {}
