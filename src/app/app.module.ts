import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { IconService } from './demo/service/icon.service';
import { PhotoService } from './demo/service/photo.service';
import {ParserService} from "./demo/components/parser/service/parser.service";
import { LoginModule } from './demo/components/auth/login/login.module';
import { RegisterModule } from './demo/components/auth/register/register.module';
@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule,LoginModule,RegisterModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
         IconService, PhotoService, ProductService , ParserService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
