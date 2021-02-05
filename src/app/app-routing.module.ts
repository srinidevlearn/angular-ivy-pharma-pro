import { NgModule } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { BarCodeFormsComponent } from "./components/bar-code-forms/bar-code-forms.component";

import { BarCodeBaseComponent } from "./components/bar-code-base/bar-code-base.component";

const appRoutes: any = [
  {
    path: "bar-code",
    component: BarCodeBaseComponent
  },
  {
    path: "",
    redirectTo: "/bar-code",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false
    })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
