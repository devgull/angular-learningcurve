import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MainComponent } from "./features/main.component";
import { MyFreestyleComponent } from "./features/my-freestyle/my-freestyle.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { DirectiveComponent } from "./features/codewithmosh/diretive.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
import { MaterialModule } from './components/shared/material.module';
import { MatInputModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { CoursesService } from './services/courses.service';
import { QRCodeModule } from 'angular2-qrcode';
import { MapToKeysPipe } from './pipe/maptokeys.pipe'

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    CommonModule,
    MaterialModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    QRCodeModule,
    ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-left',
            preventDuplicates: true,
        }),
    RouterModule.forRoot([
       {
        path: "main",
        component: MainComponent
      },
       {
        path: "my-freestyle",
        component: MyFreestyleComponent
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
      {
        path: "codewithmosh",
        component: DirectiveComponent,
        canActivate: [StoreFirstGuard]
      },

      { path: "**", redirectTo: "/main" }
    ])
  ],
  exports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StoreFirstGuard, CoursesService],

  declarations: [AppComponent, MainComponent, DirectiveComponent, MyFreestyleComponent, MapToKeysPipe],

  bootstrap: [AppComponent]
})
export class AppModule {}
