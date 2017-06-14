import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { HomeComponent }    from './home/home.component';
import { LoginComponent }    from './login/login.component';
import { TampilanMhsComponent}    from './tampilanmhs/tampilanmhs.component';
import { RekapComponent}    from './rekapitulasi/rekap.component';
import { IsiComponent } from './isi/isi.component';
import { EditComponent } from './edit/edit.component';

import { RekapService}    from './_services/rekap.service';
import { DataService}    from './_services/data.service';
import { MhsService } from './_services/mhs.service';
import { KelasService } from './_services/kelas.service';
import { LoginService }    from './_services/login.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AppComponent,
    LoginComponent,
    TampilanMhsComponent,
    RekapComponent,
    IsiComponent,
    EditComponent,
  ],
   providers: [
     LoginService,
     MhsService,
     KelasService,
	 RekapService,
	 DataService
  ],
  
  bootstrap: [ AppComponent ]
})



export class AppModule { }
