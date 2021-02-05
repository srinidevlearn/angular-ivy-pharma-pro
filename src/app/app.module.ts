import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppRoutingModule } from "./app-routing.module";
import { BarCodeFormsComponent } from "./components/bar-code-forms/bar-code-forms.component";
import { BarCodeBaseComponent } from "./components/bar-code-base/bar-code-base.component";
import { AppNavComponent } from "./components/app-nav/app-nav.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BarCodeFormsComponent,
    BarCodeBaseComponent,
    AppNavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
