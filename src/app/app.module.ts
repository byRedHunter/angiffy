import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GiffyModule } from './giffy/giffy.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, GiffyModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
