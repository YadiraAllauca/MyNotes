import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Output() onDark: EventEmitter<boolean> = new EventEmitter<boolean>();
  pressed = false;
  darkPressed() {
    this.pressed = !this.pressed;
    this.onDark.emit(this.pressed);
  }
  ngOnInit(): void {}
}
