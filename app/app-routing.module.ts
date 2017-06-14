import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TampilanMhsComponent }		from './tampilanmhs/tampilanmhs.component';
import { RekapComponent }		from './rekapitulasi/rekap.component';
import { IsiComponent } from './isi/isi.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent},
  { path : 'tampilanmhs', component: TampilanMhsComponent},
  { path : 'rekapitulasi', component: RekapComponent},
  { path : 'edit/:nim/:tanggal', component: IsiComponent},
  { path : 'absen', component: EditComponent},
  { path : 'input', component: IsiComponent},
  
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}