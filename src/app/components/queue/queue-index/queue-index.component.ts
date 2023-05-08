import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueueService } from 'src/app/services/queue.service';
@Component({
  selector: 'app-queue-index',
  templateUrl: './queue-index.component.html',
  styleUrls: ['./queue-index.component.css']
})
export class QueueIndexComponent implements OnInit {

  constructor(
    private queueService: QueueService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  redirectCreate(){
    this.router.navigate(['queue/add']);
  }
}
