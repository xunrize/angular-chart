import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lg-page',
  templateUrl: './lg-page.component.html',
  styleUrls: ['./lg-page.component.css']
})
export class LgPageComponent implements OnInit {

  constructor(
  private route: ActivatedRoute,) { }

  ngOnInit() {
  }

}