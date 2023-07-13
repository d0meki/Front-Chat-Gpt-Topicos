import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatGPTResponse } from '../interfaces/chatgpt';
import { Profile } from '../interfaces/profile';
import { MyReclamo } from '../interfaces/reclamos';
import { Funcionario } from '../interfaces/funcionario';
import { User } from '../interfaces/user';
import { Categoria } from '../interfaces/categorias';
import { Estado } from '../interfaces/estados';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseReclamoUrl: string = 'http://localhost:8080/api/reclamos';
  baseCategoriaUrl: string = 'http://localhost:8080/api/categorias';
  baseEstadoUrl: string = 'http://localhost:8080/api/estados';
  baseUserUrl:string = 'http://localhost:8080/api/users';
  baseFuncionarioUrl:string = 'http://localhost:8080/api/funcionarios';
  constructor(private http: HttpClient, private router: Router) {

  }
  geProfile(): Observable<Profile> {
    return this.http.get<Profile>('http://127.0.0.1:8080/api/chatgpt/get-algo');
  }
  geMsgChatGpt(request: any): Observable<ChatGPTResponse> {
    return this.http.post<ChatGPTResponse>('http://127.0.0.1:8080/api/chatgpt/', request);
  }
  geUser(documentoId:string): Observable<User> {
    return this.http.get<User>(`${this.baseUserUrl}/usuario/${documentoId}`);
  }
  getReclamos(): Observable<MyReclamo[]> {
    const funcionario:Funcionario = JSON.parse(localStorage.getItem("funcionario")!);
    return this.http.get<MyReclamo[]>(`${this.baseReclamoUrl}/${funcionario.area}`);
  }
  getReclamoPorEstado(estado:string):Observable<MyReclamo[]>{
    const funcionario:Funcionario = JSON.parse(localStorage.getItem("funcionario")!);
    const body = {
      area: funcionario.area,
      estado: estado
    }
    return this.http.post<MyReclamo[]>(`${this.baseReclamoUrl}/reclamos-estado`,body) ;
  }
  getReclamoPorFecha(fechaIni: Date, fechaFin: Date):Observable<MyReclamo[]>{
    const funcionario:Funcionario = JSON.parse(localStorage.getItem("funcionario")!);
    const ini = new Date(fechaIni);
    const fin = new Date(fechaFin);
    const body = {
      area: funcionario.area,
      fechaIni: ini,
      fechaFin: fin
    }
    return this.http.post<MyReclamo[]>(`${this.baseReclamoUrl}/reclamos-fecha`,body) ;
  }

  getReclamo(id:string):Observable<MyReclamo>{
    return this.http.get<MyReclamo>(`${this.baseReclamoUrl}/reclamo-id/${id}`);
  }

  changeEstado(nuevoEstado: string,phoneToken:string,documentId:string){
    const body = {
      nuevoEstado: nuevoEstado,
      documentId: documentId,
      phoneToken: phoneToken
    }
      this.http.post(`${this.baseReclamoUrl}/reclamos-update-estado-id`,body).subscribe((resp)=>{
        this.router.navigate(['/dashboard/allreclamos']);
      });
  }
  changeComentario(comentario: string,phoneToken:string,documentId:string){
    const body = {
      comentario: comentario,
      documentId: documentId,
      phoneToken: phoneToken
    }
      this.http.post(`${this.baseReclamoUrl}/reclamo-change-comentario`,body).subscribe((resp)=>{
        this.router.navigate(['/dashboard/allreclamos']);
      });
  }


  //CATEGORIAS

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseCategoriaUrl}/allcategorias`);
  }


  //ESTADOS

  getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${this.baseEstadoUrl}/allestados`);
  }
  editarEstados(documentId:string, nuevoNombre:string, nuevaDescripcion:string): void{
    const data={
      documentId:documentId,
      nuevoNombre:nuevoNombre, 
      nuevaDescripcion: nuevaDescripcion
    }
    this.http.post<any>(`${this.baseEstadoUrl}/editar_estado`,data).subscribe((res)=>{
      console.log(res);
      
      this.router.navigate(['/dashboard/allestados'])
     });
  }

  eliminarEstado(documentId:string):void{
    const data={
      documentId:documentId
    }
    this.http.post<any>(`${this.baseEstadoUrl}/eliminar_estado`,data).subscribe((res)=>{
      console.log(res);
      
      this.router.navigate(['/dashboard/allestados'])
     });
  }

  //FUNCIONARIOS

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.baseFuncionarioUrl}/getallfuncionario`);
  }


}
