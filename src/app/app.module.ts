import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureComponent } from './shared/components/feature/feature.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeroImgComponent } from './shared/components/hero-img/hero-img.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { InspirationComponent } from './shared/components/inspiration/inspiration.component';
import { IconsComponent } from './shared/components/icons/icons.component';
import { FeatureCardComponent } from './shared/components/feature-card/feature-card.component';

@NgModule({
  declarations: [
    AppComponent,
   
    FeatureComponent,
    FooterComponent,
    HeroImgComponent,
    NavbarComponent,
    InspirationComponent,
    IconsComponent,
    FeatureCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
