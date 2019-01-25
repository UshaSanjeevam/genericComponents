import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlGenerationComponent } from './htmlGeneration/html-generation/html-generation.component';
import { ParentComponent } from './parent/parent/parent.component';
import { ChildComponent } from './child/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HtmlChildComponent } from './htmlChild/html-child/html-child.component';
import { HtmlParentComponent } from './htmlParent/html-parent/html-parent.component';
import { HtmlGenerationServiceService } from './Services/html-generation-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HtmlGenerationComponent,
    ParentComponent,
    ChildComponent,
    HtmlChildComponent,
    HtmlParentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HtmlGenerationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
