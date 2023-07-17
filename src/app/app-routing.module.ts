import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'baptism',
    loadChildren: () => import('./pages/baptism/baptism.module').then( m => m.BaptismPageModule)
  },
  {
    path: 'marriage',
    loadChildren: () => import('./pages/marriage/marriage.module').then( m => m.MarriagePageModule)
  },
  {
    path: 'eucharist',
    loadChildren: () => import('./pages/eucharist/eucharist.module').then( m => m.EucharistPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./pages/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'reconciliation',
    loadChildren: () => import('./pages/reconciliation/reconciliation.module').then( m => m.ReconciliationPageModule)
  },
  {
    path: 'mass',
    loadChildren: () => import('./pages/mass/mass.module').then( m => m.MassPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'developers',
    loadChildren: () => import('./developers/developers.module').then( m => m.DevelopersPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'adminbaptism',
    loadChildren: () => import('./adminPages/baptism/baptism.module').then( m => m.BaptismPageModule)
  },
  {
    path: 'adminmarriage',
    loadChildren: () => import('./adminPages/marriage/marriage.module').then( m => m.MarriagePageModule)
  },
  {
    path: 'adminreconciliation',
    loadChildren: () => import('./adminPages/reconciliation/reconciliation.module').then( m => m.ReconciliationPageModule)
  },
  {
    path: 'adminconfirmation',
    loadChildren: () => import('./adminPages/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'admineucharist',
    loadChildren: () => import('./adminPages/eucharist/eucharist.module').then( m => m.EucharistPageModule)
  },
  {
    path: 'adminmass',
    loadChildren: () => import('./adminPages/mass/mass.module').then( m => m.MassPageModule)
  },
  {
    path: 'infant',
    loadChildren: () => import('./adminPages/baptism/infant/infant.module').then( m => m.InfantPageModule)
  },
  {
    path: 'adult',
    loadChildren: () => import('./adminPages/baptism/adult/adult.module').then( m => m.AdultPageModule)
  },
  {
    path: 'first-holy-communion',
    loadChildren: () => import('./adminPages/eucharist/first-holy-communion/first-holy-communion.module').then( m => m.FirstHolyCommunionPageModule)
  },
  {
    path: 'confirmation2',
    loadChildren: () => import('./adminPages/confirmation/confirmation2/confirmation2.module').then( m => m.Confirmation2PageModule)
  },
  {
    path: 'marriage2',
    loadChildren: () => import('./adminPages/marriage/marriage2/marriage2.module').then( m => m.Marriage2PageModule)
  },
  {
    path: 'confession',
    loadChildren: () => import('./adminPages/reconciliation/confession/confession.module').then( m => m.ConfessionPageModule)
  },
  {
    path: 'thanksgiving',
    loadChildren: () => import('./adminPages/mass/thanksgiving/thanksgiving.module').then( m => m.ThanksgivingPageModule)
  },
  {
    path: 'mfts',
    loadChildren: () => import('./adminPages/mass/mfts/mfts.module').then( m => m.MftsPageModule)
  },
  {
    path: 'petition',
    loadChildren: () => import('./adminPages/mass/petition/petition.module').then( m => m.PetitionPageModule)
  },
  {
    path: 'funeral',
    loadChildren: () => import('./adminPages/mass/funeral/funeral.module').then( m => m.FuneralPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
