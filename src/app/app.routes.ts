import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StayDetailComponent } from './pages/stay-detail/stay-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SuccessComponent } from './pages/success/success.component';
import { FailComponent } from './pages/fail/fail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'stay/:id', component: StayDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'fail', component: FailComponent },
];
