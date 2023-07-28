import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuDesktopComponent } from '../shared/components/menu-desktop/menu-desktop.component';
import { MenuMobileComponent } from '../shared/components/menu-mobile/menu-mobile.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations:
  [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    MenuDesktopComponent,
    MenuMobileComponent,
    UserRegisterComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FontAwesomeModule,
    OverlayModule,
    SharedModule,
  ],
  providers:
  [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
})
export class WebsiteModule { }
