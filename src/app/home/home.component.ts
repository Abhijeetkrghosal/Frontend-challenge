import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  public businessTtile:string='Boost your business with Open';
  public businessSubTtile:string='Get your hands on a term loan that’s crafted for your business';
  public buttonText:string='Get an Open Account';
  public blobSmall = '../assets/svg_images/blob-small.svg'
  public lineImage = '../assets/svg_images/Line3.svg'

  ngOnInit(): void {
  }

  benefitcardData = [
  {
    benefitTitle : 'Quick cash disbursement',
  benefitDescription : 'Get terms loans that your business needs within 72 hrs',
  benefitImage : '../assets/images/GetPaidInstantly.png'
},
{
  benefitTitle : 'Low-interest rate',
  benefitDescription : 'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
  benefitImage : '../assets/images/Lowinterestrate.png'
},
  {
    benefitTitle : 'Zero Paperwork',
  benefitDescription : 'Get started instantly by submitting only your basic details & bank statements',
  benefitImage : '../assets/images/SecurePayments.png'
},
{
  benefitTitle : 'Ace your business finances',
  benefitDescription : 'Manage banking, accounting & everything in between, on one platform',
  benefitImage : '../assets/images/freelancer_feature_icon.png'
},
{
  benefitTitle : 'Loans to fight COVID-19',
  benefitDescription : 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
  benefitImage : '../assets/images/Covid.png'
}
 ]
}
