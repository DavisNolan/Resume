import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() name: string;
  @Input() date: string;
  @Input() place: string;
  @Input() email: string;
  @Input() linkedin: string;

  ngOnInit() {}
}
