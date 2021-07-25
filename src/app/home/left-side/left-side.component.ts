import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  constructor() { }
  public headTitle = `We make it Super 
                      Simple`;
  public collectImage = '../assets/images/collect_img-video.png'
  public lineImage = '../assets/svg_images/Line3.svg'
  public accountingDots = '../assets/svg_images/accounting_dots.svg'
  ngOnInit(): void {
  }

}
