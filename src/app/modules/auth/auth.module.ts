import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

//
import {ThemeModule} from '@app/theme';
import {GuestGuard} from '@app/modules/auth/services';
import {LoginFormComponent} from '@app/modules/auth/components/login-form/login-form.component';

const COMPONENTS = [
  LoginFormComponent
];


@NgModule({
  imports: [
    ThemeModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginFormComponent,
        canActivate: [GuestGuard]
      }
    ])
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class AuthModule {
}
