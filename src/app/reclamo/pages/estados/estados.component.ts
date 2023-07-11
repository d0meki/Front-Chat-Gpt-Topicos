import { Component } from '@angular/core';
import { Estado } from 'src/app/interfaces/estados';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent {
  loading = false;
  estados!:Estado[]
  constructor( private apiService: ApiService) {

  }
  ngOnInit(): void {
    this.apiService.getEstados().subscribe((estados)=>{
        this.estados = estados;
    })
}

}
