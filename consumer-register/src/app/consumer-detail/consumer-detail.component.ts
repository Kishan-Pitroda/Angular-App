import { ConsumerService } from './../../../services/consumer.service';
import { Consumer } from './../consumer';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consumer-detail',
  templateUrl: './consumer-detail.component.html',
  styleUrls: ['./consumer-detail.component.css'],
})
export class ConsumerDetailComponent implements OnInit {
  consumer: Consumer;
  isDelete: boolean = false;

  constructor(
    private service: ConsumerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let id = this.route.snapshot.paramMap.get('id');
    this.isDelete = this.route.snapshot.routeConfig.path.includes('delete');
    if (id) this.service.getConsumer(id).subscribe((c) => (this.consumer = c));
  }

  ngOnInit(): void {}

  onDelete() {
    this.service.deleteConsumer(this.consumer.id);
  }
}
