import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {
 public accountingDots = '../assets/svg_images/accounting_dots.svg'
  constructor() { }

  ngOnInit(): void {
  }

}
