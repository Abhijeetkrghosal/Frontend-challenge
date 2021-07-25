import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  // fileUrl = '../../../assets/svg_images/images.svg';
  /**User input for icon name
   * @default check to get rid of errors if developer forgets to give icon name
   */
  @Input() name = 'check';
  /**User input for icon color
   * @default default i.e. #212529
   */
  @Input() color = '';
  /**User input for icon size. Supported sizes are 18, 24, 36, 48.
   * @default 24
   */
  @Input() size = 24;
  @Input() extraClass = '';
 
  private _colors = {
    "default": "#212529",
    "white": "#fff",
    "primary": "#0174f0",
    "green": "#28a745",
    "red": "#dc3545",
    "light-blue": "#17a2b8",
    "yellow": "#ffc107",
    "grey": "#9e9e9e",
    "dark": "#343a40",
    "blue": "#0056b3",
    "nav-bar": "#1a237e",
    "danger": "#dc3545",
    "success": "#28a745",
 
  };
  constructor() { }
 
  ngOnInit() {
  }
 
  getColor() {
    return this._colors[this.color];
  }
}
