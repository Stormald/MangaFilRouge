import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-to-my-list',
  templateUrl: './modal-add-to-my-list.component.html',
  styleUrls: ['./modal-add-to-my-list.component.css']
})
export class ModalAddToMyListComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content);
  }

}
