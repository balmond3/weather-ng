import { Component,HostListener } from '@angular/core';
import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray, DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms'; // you'll need this too (see next error)
import { DropdownComponent } from './dropdown/dropdown.component';



import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule, DropdownComponent],
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-ng';
  // dropdownMenu = false;

  // toggleDropdown(event: MouseEvent) {
  //   event.stopPropagation(); // prevent global click from firing
  //   this.dropdownMenu = !this.dropdownMenu;
  // }

  // // Close dropdown when clicking anywhere else
  // @HostListener('document:click')
  // closeDropdown() {
  //   this.dropdownMenu = false;
  // }

}
  //   items = [
  //   {
  //     label: 'Temperature',
  //     value: 'Celsius',
  //     options: ['Celsius (°C)', 'Fahrenheit (°F)']
  //   },
  //   {
  //     label: 'Wind Speed',
  //     value: 'km/h',
  //     options: ['km/h', 'mph']
  //   },
  //   {
  //     label: 'Precipitation',
  //     value: 'Millimeters',
  //     options: ['Millimeters (mm)', 'Inches (in)']
  //   }
  // ];


  // drop(event: CdkDragDrop<any[]>) {
  //   moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  // }

