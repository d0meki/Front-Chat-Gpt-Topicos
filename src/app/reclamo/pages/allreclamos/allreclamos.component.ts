import { Component } from '@angular/core';
import { MyReclamo } from 'src/app/interfaces/reclamos';
import { ApiService } from 'src/app/services/api.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Utils } from 'src/app/utils/util';
@Component({
  selector: 'app-allreclamos',
  templateUrl: './allreclamos.component.html',
  styleUrls: ['./allreclamos.component.css']
})
export class AllreclamosComponent {
  loading = false;
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
  constructor(private firebaseService: FirebaseService, private apiService: ApiService) {

  }
  ngOnInit(): void {
    this.firebaseService.getAllReclamos().subscribe((reclamos)=>{
      this.reclamos = reclamos;
      console.log(this.reclamos);
    })
  /*   this.apiService.getReclamos().subscribe((reclamos)=>{
      this.reclamos = reclamos;
    }) */
    const util = new Utils();
    this.options = util.getOptions();
    this.estados = util.getEstados();
  }
  filtrar() {
    this.loading = true;
    switch (this.selected) {
      case "1":
        console.log("filtrar por fecha!!!!");
       /*  this.firebaseService.getReclamoByFecha(this.fechaIni, this.fechaFin).subscribe((data) => {
          this.reclamos = data;
          this.loading = false;
        }); */
        this.apiService.getReclamoPorFecha(this.fechaIni, this.fechaFin).subscribe((data) => {
          this.reclamos = data;
          this.loading = false;
        });
        break;
      case "2":
        console.log("filtrar por estado!!!!");
        /* this.firebaseService.getReclamoByEstado(this.estadSelected).subscribe((data) => {
          this.reclamos = data;
          this.showEstados = false;
          this.loading = false;
          const util = new Utils();
          this.options = util.getOptions();
        }); */
        this.apiService.getReclamoPorEstado(this.estadSelected).subscribe((data) => {
          this.reclamos = data;
          console.log(this.reclamos);
          this.showEstados = false;
          this.loading = false;
          const util = new Utils();
          this.options = util.getOptions();
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
        this.showEstados = false;
        break;
      case "2":
        this.showEstados = true;
        break;
      default:
        break;
    }
  }
}
