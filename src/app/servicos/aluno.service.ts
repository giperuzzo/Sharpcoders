import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../modelos/Aluno';
@Injectable({
  providedIn: 'root'
})
export class AlunoService {
// :url 

private url:string='http://localhost:3000/alunos';

  // CONSTRUTOR
  constructor(private http:HttpClient) { }

  // métodos para selecionar alunos
// import   { Aluno } from '../modelos/Aluno';
  selecionar():Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.url);
  }
  // metodos para cadastrar alunos
  cadastrar(obj:Aluno):Observable<Aluno>{
    return this.http.post<Aluno>(this.url, obj);
  }
  // metodos para remover alunos 
  remover(id:number):Observable<any>{
    return this.http.delete<any>('${this.url}/${id}');
  }
}
