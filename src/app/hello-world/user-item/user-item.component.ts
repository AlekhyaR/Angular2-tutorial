import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: String;

  constructor() { }

  ngOnInit() {
    console.log('This is the value user-id:'+ this.name);
  } 

}
