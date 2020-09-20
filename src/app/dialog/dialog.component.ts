import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Coupon} from '../../model/Coupon';

@Component({
    selector: 'app-dialog',
    templateUrl: 'dialog.component.html'
})
export class DialogComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Coupon[]) {}

    onClick(): void {
        console.log(this.data);
        this.dialogRef.close();
    }
}
