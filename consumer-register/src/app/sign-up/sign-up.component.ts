import { Consumer } from './../consumer';
import { ConsumerService } from './../../../services/consumer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  consumer: any = {};
  formTitle: string;
  id;
  constructor(private service: ConsumerService, private route : ActivatedRoute) {
    this.id =  this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.formTitle = 'Edit Consumer';
      this.service.getConsumer(this.id).subscribe(c=> this.consumer = c);
    }
    else{
      this.formTitle = 'New Consumer';
    }
   }

  ngOnInit(): void {
  }

  save(form){
    console.log(form);
    console.log(this.id);
    if(this.id) this.service.updateConsumer(this.id,form);
    else this.service.createConsumer(form);
  }

}
