import { TestBed } from '@angular/core/testing';

import { AlunoService } from './aluno.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlunoComponent } from '../componentes/aluno/aluno.component';

describe('AlunoComponente', () => {
  let service: AlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
