import { TestBed, inject } from '@angular/core/testing';

import { MydbService } from './mydb.service';

describe('MydbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MydbService]
    });
  });

  it('should be created', inject([MydbService], (service: MydbService) => {
    expect(service).toBeTruthy();
  }));
});
