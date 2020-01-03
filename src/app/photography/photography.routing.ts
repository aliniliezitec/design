import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CompositionsComponent } from './compositions/compositions.component';
import { CastingComponent } from './casting/casting.component';
import { LocationsComponent } from './locations/locations.component';
import { LightingAndColorComponent } from './lighting-and-color/lighting-and-color.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
  },
  {
    path: '',
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
        data: {
          title: 'Overview - Naologic',
        }
      },
      {
        path: 'compositions',
        component: CompositionsComponent,
        data: {
          title: 'Compositions - Naologic',
        }
      },
      {
        path: 'casting',
        component: CastingComponent,
        data: {
          title: 'Casting - Naologic',
        }
      },
      {
        path: 'locations',
        component: LocationsComponent,
        data: {
          title: 'Locations - Naologic',
        }
      },
      {
        path: 'lighting-and-color',
        component: LightingAndColorComponent,
        data: {
          title: 'Lighting and color - Naologic',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotographyRouting { }
