import { TestBed } from '@angular/core/testing';

import { MovimentacaoFEService } from './movimentacao-fe.service';

describe('MovimentacaoFEService', () => {
  let service: MovimentacaoFEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimentacaoFEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
