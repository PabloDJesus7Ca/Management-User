import { Routes } from '@angular/router';
import { PersonaList } from './Components/persona-list/persona-list';
import { PersonaForm } from './Components/persona-form/persona-form';

export const routes: Routes = [
  { path: '', redirectTo: 'personas', pathMatch: 'full' },

  { path: 'personas', component: PersonaList },

  { path: 'personas/nuevo', component: PersonaForm },

  { path: 'personas/editar/:id', component: PersonaForm },
];
