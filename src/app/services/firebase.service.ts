import { Injectable } from '@angular/core';
import { Auth, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import {
  Firestore,
  collectionData,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
  getFirestore,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  QueryConstraint,
  Timestamp
} from '@angular/fire/firestore';
import { MyReclamo } from '../interfaces/reclamos';
import { Funcionario } from '../interfaces/funcionario';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private reclamoRef = collection(this.firestore, 'reclamos');
  funcionario:Funcionario = JSON.parse(localStorage.getItem("funcionario")!);
  constructor(private auth: Auth, private firestore: Firestore) { }

  getAllReclamos(): Observable<MyReclamo[]> {
    return collectionData(this.reclamoRef, { idField: 'id' }) as Observable<MyReclamo[]>;
  }
  getReclamoByEstado(estado: string): Observable<MyReclamo[]> {
    const wa: QueryConstraint[] = [where('estado', '==', estado), where('area', '==', this.funcionario.area)]
    const refQuery = query(this.reclamoRef, ...wa)
    return collectionData(refQuery, { idField: 'id' }) as Observable<MyReclamo[]>;
  }
  getReclamoByCategoria(categoria: string): Observable<MyReclamo[]> {
    const wa: QueryConstraint[] = [where('categoria', '==', categoria), where('area', '==', this.funcionario.area)]
    const refQuery = query(this.reclamoRef, ...wa)
    return collectionData(refQuery, { idField: 'id' }) as Observable<MyReclamo[]>;
  }
  getReclamoByFecha(fechaIni: Date, fechaFin: Date):Observable<MyReclamo[]>{
    const ini = new Date(fechaIni);
    const fin = new Date(fechaFin);
    const wa:QueryConstraint[] = [where('fecha','>=',Timestamp.fromDate(ini)),
                                  where('fecha','<=',Timestamp.fromDate(fin)),
                                  where('area', '==', this.funcionario.area)]
    const refQuery = query(this.reclamoRef,...wa)
    return collectionData(refQuery, { idField: 'id' }) as Observable<MyReclamo[]>;
  }
  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }



  losCurrentUsers() {
    return this.auth.currentUser;
  }
  enviarVerificacionDeCorreo() {
    return sendEmailVerification(this.auth.currentUser!);
    // return this.auth.currentUser?.emailVerified
  }

}
