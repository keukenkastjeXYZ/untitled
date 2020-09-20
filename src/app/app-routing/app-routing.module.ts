import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubscriptionComponent} from '../subscription/subscription.component';
import {CouponComponent} from '../coupon/coupon.component';
import {HomeComponent} from '../home/home.component';
import {PoetryComponent} from '../poetry/poetry.component';

const routes: Routes = [
    {
        path: 'subscription',
        component: SubscriptionComponent,
        data: {animation: 'subscription'}
    },
    {
        path: 'coupon',
        component: CouponComponent,
        data: {animation: 'coupon'}
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {animation: 'home'}
    },
    {
        path: 'poetry',
        component: PoetryComponent,
        data: {animation: 'poetry'}
    },
    {
        path: '',
        component: HomeComponent,
        data: {animation: 'home'}
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
