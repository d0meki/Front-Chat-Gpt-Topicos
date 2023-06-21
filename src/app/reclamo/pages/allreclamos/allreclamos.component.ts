import { Component } from '@angular/core';
import { MyReclamo } from 'src/app/interfaces/reclamos';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Utils } from 'src/app/utils/util';
@Component({
  selector: 'app-allreclamos',
  templateUrl: './allreclamos.component.html',
  styleUrls: ['./allreclamos.component.css']
})
export class AllreclamosComponent {
  showCategorias: boolean = false;
  showEstados: boolean = false;
  categoriaSelected: string = "Basura";
  estadSelected: string = "pendiente";
  estadoSelected: string = "";
  reclamos: MyReclamo[] | undefined;
  fechaIni: Date = new Date();
  fechaFin: Date = new Date();
  selected: string = "1";
  options:any
  categorias:any;
  estados:any;
  constructor(private firebaseService: FirebaseService) {

  }
  ngOnInit(): void {
    const util = new Utils();
    this.options = util.getOptions();
    this.categorias = util.getCategorias();
    this.estados = util.getEstados();
  }
  filtrar() {
    switch (this.selected) {
      case "1":
        console.log("filtrar por fecha!!!!");
        this.firebaseService.getReclamoByFecha(this.fechaIni, this.fechaFin).subscribe((data) => {
          this.reclamos = data;
        });
        break;
      case "2":
        console.log("filtrar por categoria!!!!");
        console.log(this.categoriaSelected);
        this.firebaseService.getReclamoByCategoria(this.categoriaSelected).subscribe((data) => {
          this.reclamos = data;
          this.showCategorias = false;
          this.showEstados = false;
        });
        break;
      case "3":
        console.log("filtrar por estado!!!!");
        console.log(this.estadSelected);
        this.firebaseService.getReclamoByEstado(this.estadSelected).subscribe((data) => {
          this.reclamos = data;
          this.showCategorias = false;
          this.showEstados = false;
        });
        break;
      default:
        break;
    }

  }
  changeOption(e: any) {
    this.selected = e.target.value;
    switch (this.selected) {
      case "1":
        this.showCategorias = false;
        this.showEstados = false;
        break;
      case "2":
        this.showCategorias = true;
        this.showEstados = false;
        break;
      case "3":
        this.showCategorias = false;
        this.showEstados = true;
        break;
      default:
        break;
    }
  }
}
