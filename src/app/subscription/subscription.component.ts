import {Component} from '@angular/core';
import {Subscription} from '../../model/Subscription';
import subscriptions from '../../model/SubscriptionSupplier';

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
    subscriptions: Subscription[] = subscriptions;

    constructor() {
    }

}
