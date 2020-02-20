import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { TypographyComponent } from './typography/typography.component';
import { SpacingComponent } from './spacing/spacing.component';
import { IconsComponent } from './icons/icons.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { SizingComponent } from './sizing/sizing.component';
import { UtilityComponent } from './utility/utility.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'colors',
  },
  {
    path: '',
    children: [
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors - Naologic',
        }
      },
      {
        path: 'iconography',
        component: IconsComponent,
        data: {
          title: 'Iconography - Naologic',
        }
      },
      {
        path: 'illustration',
        component: IllustrationComponent,
        data: {
          title: 'Illustration - Naologic',
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography - Naologic',
        }
      },
      {
        path: 'spacing',
        component: SpacingComponent,
        data: {
          title: 'Spacing - Naologic',
        }
      },
      {
        path: 'sizing',
        component: SizingComponent,
        data: {
          title: 'Sizing - Naologic',
        }
      },
      {
        path: 'utility',
        component: UtilityComponent,
        data: {
          title: 'Utilities - Naologic',
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRouting { }
