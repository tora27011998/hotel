import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
//
import { ThemeModule } from '@app/theme';
import { SharedModule } from '@app/shared/shared.module';
import { BookingService, AppLookupService } from '@app/modules/admin/services';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/users/users.component';
import { SearchFormComponent } from '@app/modules/admin/components/shared/search-form/search-form.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { BookedClientsComponent } from './components/booked-list/booked-list.component';
import { AppState } from './store';
import { RevenueComponent } from './components/revenue/revenue.component';
import { BookingComponent } from './components/booking/booking.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { TabRoomsComponent } from './components/tab-rooms/tab-rooms.component';
import { TabCustomersComponent } from './components/tab-customers/tab-customers.component';
import { TabServicesComponent } from './components/tab-services/tab-services.component';

const PROVIDERS = [
    BookingService,
    AppLookupService
];


export const STATES = [
    AppState
  ];

@NgModule({
    imports: [
        NgxsModule.forFeature([...STATES]),
        ThemeModule,
        SharedModule,
        //
        RouterModule.forChild([
            {
                path: '',
                component: AdminComponent,
                children: [
                    { path: '', redirectTo: 'all', pathMatch: 'full' },
                    {
                        path: 'all',
                        component: RoomsComponent
                    },
                    {
                        path: 'booked-list',
                        component: BookedClientsComponent
                    },
                    {
                        path: 'revenue',
                        component: RevenueComponent
                    }
                ]
            }
        ]),
    ],
    declarations: [
        RoomsComponent,
        AdminComponent,
        UsersComponent,
        BookedClientsComponent,
        SearchFormComponent,
        RevenueComponent,
        BookingComponent,
        CheckoutComponent,
        TabRoomsComponent,
        TabCustomersComponent,
        TabServicesComponent
    ],
    providers: [
        ...PROVIDERS
    ]
})
export class AdminModule {
}
