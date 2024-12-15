import { Type } from '@angular/compiler';
import { inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { addDoc, collection, collectionData, doc, Firestore, getDoc, query, updateDoc, where } from '@angular/fire/firestore';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthStateService } from '../../shared/data-access/auth-state.service';



export interface Task{
  id: string;
  title: string;
  completed: boolean;
}

export type TaskCreate = Omit < Task, 'id'>;

const  PATH = 'tasks';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _firestore = inject(Firestore);
  private _authState = inject(AuthStateService);


  private _collection = collection(this._firestore, PATH);
  private _querry = query(
    this._collection,
    where('userId', '==', this._authState.currentUser?.uid));
  
  loading = signal<boolean>(true);
  
  getTasks = toSignal((collectionData(this._querry, {idField: 'id'}) as Observable<Task[]>).pipe(
    tap(()=> {
      this.loading.set(false)
    }),
    catchError(error =>{
      this.loading.set(false)
      return throwError(()=> error);
    })
  ), {initialValue: [],}
  );

  getTask(id: string){
    const docRef = doc(this._collection, id);
    return getDoc(docRef);
  }
  
  create(task: TaskCreate){
    return addDoc(this._collection, {...task, userId: this._authState.currentUser?.uid });
  }

  update(task: TaskCreate, id:string ){
    const docRef = doc(this._collection, id);
    return updateDoc(docRef,{...task, userId: this._authState.currentUser?.uid });
  
  }


  constructor() {
    console.log(this._authState.currentUser);
   }
}
