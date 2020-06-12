import { ModuleWithProviders, NgModule } from "@angular/core";

import { ThemeModule } from "@app/theme";
import {
    AuthenticationService,
    AuthGuard,
    GuestGuard,
    LoggedUserService,
} from "@app/modules/auth/services";
import {
    ApiService,
    AppLoadService,
    DeviceDetectorService,
    ScreenService,
} from "@app/modules/core/services";
import { PopoverConfirmBoxComponent } from "@app/shared/components/popover-confirm-box/popover-confirm-box.component";
import { PopoverTitleComponent } from "@app/shared/components/popover-title/popover-title.component";
import { PopupListRoomsComponent } from "./components/popup-list-rooms/popup-list-rooms.component";
import { AppState } from "@app/modules/admin/store";
import { NgxsModule } from "@ngxs/store";

const PROVIDERS = [
    //
    AuthGuard,
    GuestGuard,
    //
    ApiService,
    ScreenService,
    AppLoadService,
    AuthenticationService,
    LoggedUserService,
    DeviceDetectorService,
];

const COMPONENTS = [
    PopoverConfirmBoxComponent,
    PopoverTitleComponent,
    PopupListRoomsComponent,
];

export const STATES = [AppState];

@NgModule({
    imports: [ThemeModule, NgxsModule.forFeature([...STATES])],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [...PROVIDERS],
        } as ModuleWithProviders;
    }
}
