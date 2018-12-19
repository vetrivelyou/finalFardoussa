import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertisseurPoidsComponent } from './convertisseur-poids/convertisseur-poids.component';
import { ConvertisseurDistancesComponent } from './convertisseur-distances/convertisseur-distances.component';
import { ConvertisseurTemperatureComponent } from './convertisseur-temperature/convertisseur-temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertisseurPoidsComponent,
    ConvertisseurDistancesComponent,
    ConvertisseurTemperatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
