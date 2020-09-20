import {Component} from '@angular/core';
import {Coupon} from '../../model/Coupon';
import coupons from '../../model/CouponSupplier';
import {Category} from '../../model/Category';
import categories from '../../model/CategorySupplier';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
    selector: 'app-coupon',
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.component.css']
})
export class CouponComponent {
    coupons: Coupon[] = coupons;
    categories: Category[] = categories;
    card:Coupon[]=[];

    constructor(public dialog: MatDialog) {
    }

    addToCard(coupon: Coupon):void{
        this.card.push(coupon)
    }

    checkOut(): void{
        this.openDialog()
    }

    openDialog(): void {
        this.dialog.open(DialogComponent, {
            width: '250px',
            data: this.card
        });
        this.card = [];
    }
}
