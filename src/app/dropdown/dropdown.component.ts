import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
  @Input() open = false;

  toggle(event: MouseEvent) {
    event.stopPropagation();
    this.open = !this.open;
  }

  stop(event: MouseEvent) {
    event.stopPropagation();
  }

  @HostListener('document:click')
  close() {
    this.open = false;
  }
}