import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sideNavStatus: boolean = false;
  list = [
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house',
      path: ''
    },
    {
      number: '2',
      name: 'Reclamos',
      icon: 'fa-solid fa-triangle-exclamation',
      path: ''
    },
    {
      number: '3',
      name: 'Map',
      icon: 'fa-solid fa-map-location-dot',
      path: ''
    },
    {
      number: '4',
      name: 'Chat Gpt',
      icon: 'fa-brands fa-rocketchat',
      path: ''
    },
    {
      number: '5',
      name: 'Contacto',
      icon: 'fa-solid fa-phone',
      path: ''
    }

  ]
}
