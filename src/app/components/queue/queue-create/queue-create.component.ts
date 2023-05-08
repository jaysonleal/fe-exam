import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';
@Component({
  selector: 'app-queue-create',
  templateUrl: './queue-create.component.html',
  styleUrls: ['./queue-create.component.css']
})
export class QueueCreateComponent implements OnInit {

  constructor(
    private queueService: QueueService
  ) { }

  queue = {
    mobile: '',
    peopleCount: '',
    name: '',
    priority: false,
    queueNumber: ''
  };

  submitted = false;

  ngOnInit() {
  }

  public createQueue(): void {
    const date = Date.now()
    console.log('date',date)
    const data = {
      queueNumber: this.queue.queueNumber,
      mobile: this.queue.mobile,
      peopleCount: this.queue.peopleCount,
      name: this.queue.name,
      priority: this.queue.priority,
      dateCreate: date,
      dateModified: date
    }

    this.queueService.create(data).subscribe(result => {
      if(result.success) {
        `<div class="alert alert-success" role="alert">
          successfully added
        </div>`
      }
    })
    console.log(data,'data hare')
  }

  setValue(e){
    if(e.checked){
        this.queue.priority = true
   }else{
        this.queue.priority = false
   }
}
}
