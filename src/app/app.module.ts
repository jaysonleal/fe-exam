import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueueIndexComponent } from './components/queue/queue-index/queue-index.component';
import { QueueCreateComponent } from './components/queue/queue-create/queue-create.component';
import { QueueViewUpdateComponent } from './components/queue/queue-view-update/queue-view-update.component';

@NgModule({
  declarations: [
    AppComponent,
    QueueIndexComponent,
    QueueCreateComponent,
    QueueViewUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
