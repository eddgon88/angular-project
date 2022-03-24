import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectionComponent } from './components/redirection/redirection.component';
import { UnknownErrorComponent } from './components/unknown-error/unknown-error.component';
import { ExpiredOrderComponent } from './components/expired-order/expired-order.component';

const routes: Routes = [
    {
        path: '',
        component: UnknownErrorComponent
    },
    {
        path: 'expiredLink',
        component: ExpiredOrderComponent
    },
    {
        path: 'error',
        component: UnknownErrorComponent
    },
    {
        path: ':link',
        component: RedirectionComponent
    },
    {path: '**', component: UnknownErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
