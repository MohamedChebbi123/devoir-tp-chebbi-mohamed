import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path:"inscription",component:InscriptionComponent},
  {path:"pannier",component:PanierComponent},
  {path:"connexion",component:ConnexionComponent},
  {path:"acceuil",component:AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
