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
      path: '/dashboard/bienvenido'
    },
    {
      number: '2',
      name: 'Reclamos',
      icon: 'fa-solid fa-triangle-exclamation',
      path: '/dashboard/allreclamos'
    },
    {
      number: '3',
      name: 'Map',
      icon: 'fa-solid fa-map-location-dot',
      path: '/dashboard/allreclamosmap'
    },
    {
      number: '4',
      name: 'Chat Gpt',
      icon: 'fa-brands fa-rocketchat',
      path: '/dashboard/allreclamosmap'
    },
    {
      number: '5',
      name: 'Categorias',
      icon: 'fa-solid fa-list-check',
      path: '/dashboard/categorias'
    },
    {
      number: '6',
      name: 'Estados',
      icon: 'fa-solid fa-arrows-rotate',
      path: '/dashboard/estados'
    },
    {
      number: '7',
      name: 'Funcionarios',
      icon: 'fa-solid fa-users',
      path: '/dashboard/funcionarios'
    },
    {
      number: '8',
      name: 'Areas',
      icon: 'fa-solid fa-check',
      path: '/dashboard/areas'
    },
    {
      number: '9',
      name: 'Contacto',
      icon: 'fa-solid fa-phone',
      path: '/dashboard/allreclamosmap'
    },

  ]
}
