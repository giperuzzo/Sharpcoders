import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlunoService } from '../../servicos/aluno.service';
import { Aluno } from '../../modelos/Aluno';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.scss'
})
export class AlunoComponent {

  // vetor de alunos

  alunos:Aluno[] = [];

  // formulario

  formulario = new FormGroup ({
    nome: new FormControl(''),
    nota1: new FormControl(''),
    nota2: new FormControl('')

  });
  // construtor 
  constructor(private servico:AlunoService){}
  
  // depois de renderizado o componente

  ngOnInit(){
    this.servico.selecionar() 
    .subscribe(dados => this.alunos = dados);
  }
  // metodo para cadastrar alunos

  cadastrar():void{
    this.servico.cadastrar(this.formulario.value as Aluno)
    .subscribe(aluno => {
      // cadastrar no vetor de aluno
      this.alunos.push(aluno)
      // limpar o formulario
      this.formulario.reset();
  });
  }
  // metodo para remover alunos
  remover(id:number):void{
    this.servico.remover(id)
    .subscribe(()=> {
      // encontrar a  posição do aluno no vetor
      let posicaoAluno = this.alunos.findIndex(obj => {return obj.id === id});
      // remover do vetor
      this.alunos.splice(posicaoAluno, 1);
    });
  }
}
