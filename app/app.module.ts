import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { HomeComponent }    from './home/home.component';
import { LoginComponent }    from './login/login.component';
import { TampilanMhsComponent}    from './tampilanmhs/tampilanmhs.component';
import { LoginService }    from './_services/login.service';
import { RekapComponent}    from './rekapitulasi/rekap.component';
import { MhsService } from './_services/mhs.service';
import { KelasService } from './_services/kelas.service';
import { IsiComponent } from './isi/isi.component';
import { EditComponent } from './edit/edit.component';

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
     KelasService
  ],
  
  bootstrap: [ AppComponent ]
})



export class AppModule { }
