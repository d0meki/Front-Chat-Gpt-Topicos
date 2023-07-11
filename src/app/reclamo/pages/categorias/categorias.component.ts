import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Categoria } from '../../../interfaces/categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  loading = false;
  categorias!:Categoria[]
  constructor(private firebaseService: FirebaseService, private apiService: ApiService) {

  }
  ngOnInit(): void {
    this.apiService.getCategorias().subscribe((categorias)=>{
        this.categorias = categorias;
    })
}

}
