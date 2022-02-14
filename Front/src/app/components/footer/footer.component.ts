import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(toWhere : string) {
      this.viewportScroller.scrollToAnchor(toWhere);
  }

  ngOnInit(): void {
  }

}
