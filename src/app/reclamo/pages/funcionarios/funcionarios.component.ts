import { Component } from '@angular/core';
import { Funcionario } from 'src/app/interfaces/funcionario';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent {
  loading = false;
  funcionarios!:Funcionario[]
  constructor( private apiService: ApiService) {

  }
  ngOnInit(): void {
    this.apiService.getFuncionarios().subscribe((funcionarios)=>{
        this.funcionarios = funcionarios;
    })
}
}
