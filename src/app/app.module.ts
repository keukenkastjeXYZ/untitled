import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SubscriptionComponent} from './subscription/subscription.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexModule} from '@angular/flex-layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {CouponComponent} from './coupon/coupon.component';
import {MatButtonModule} from '@angular/material/button';
import {HomeComponent} from './home/home.component';
import {CountdownModule} from 'ng2-countdown-timer';
import {CardComponent} from './card/card.component';
import {PoetryComponent} from './poetry/poetry.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        SubscriptionComponent,
        CouponComponent,
        HomeComponent,
        CardComponent,
        PoetryComponent,
        DialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatExpansionModule,
        MatGridListModule,
        FlexModule,
        MatProgressBarModule,
        MatTabsModule,
        MatButtonModule,
        AppRoutingModule,
        CountdownModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
