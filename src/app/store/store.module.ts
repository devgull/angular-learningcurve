import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { MatTabsModule, MatIconModule } from '@angular/material';


@NgModule({

    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, MatTabsModule, MatIconModule],

    declarations: [StoreComponent, CounterDirective, CartSummaryComponent,

        CartDetailComponent, CheckoutComponent],

    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]

})

export class StoreModule { }