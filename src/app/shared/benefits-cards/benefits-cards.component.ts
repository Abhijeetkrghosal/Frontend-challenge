import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits-cards',
  templateUrl: './benefits-cards.component.html',
  styleUrls: ['./benefits-cards.component.css']
})
export class BenefitsCardsComponent implements OnInit {
 @Input() benefitTitle;
 @Input() benefitDescription;
 @Input() benefitImage;

  @Input() benefitscardData:data[];

  constructor() { }

  ngOnInit(): void {
  }

}

interface data {
  benefitTitle: string;
  benefitDescription: string;
  benefitImage:any;
  }