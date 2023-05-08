import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueIndexComponent } from './components/queue/queue-index/queue-index.component';
import { QueueCreateComponent } from './components/queue/queue-create/queue-create.component';
import { QueueViewUpdateComponent } from './components/queue/queue-view-update/queue-view-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/queues', pathMatch: 'full' },
  { path: 'queues', component: QueueIndexComponent},
  { path: 'queues/id', component: QueueViewUpdateComponent},
  { path: 'queue/add', component: QueueCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
