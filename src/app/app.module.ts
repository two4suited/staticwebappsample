import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HelloService } from './services/helloservice';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule {}
