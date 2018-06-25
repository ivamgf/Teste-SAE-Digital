import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armchairs',
  templateUrl: './armchairs.component.html',
  styleUrls: ['./armchairs.component.sass']
})
export class ArmchairsComponent implements OnInit {

  armchair_list: any[] = [
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', ''
  ];

  constructor() { }

  ngOnInit() {
  }

}
