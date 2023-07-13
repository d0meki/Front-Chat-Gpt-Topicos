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
  id:string="";
  nombre:string="";
  descripcion:string="";
  formulario:boolean=false;
  constructor( private apiService: ApiService) {

  }
  ngOnInit(): void {
    this.apiService.getEstados().subscribe((estados)=>{
        this.estados = estados;
    })
  }
  abrirFormularioParaEditar(documentId:string){
    this.id=documentId;
    this.formulario=true;
  }
  guardarCambios(){
    console.log(this.id,this.nombre,this.descripcion);
    this.apiService.editarEstados(this.id,this.nombre,this.descripcion);/*.subscribe((res)=>{
      console.log(res);
    })*/
    
  }

  eliminarEstado(id:string){
    this.apiService.eliminarEstado(id);
  }




}
