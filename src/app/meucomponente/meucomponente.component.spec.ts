import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeucomponenteComponent } from './meucomponente.component';

describe('MeucomponenteComponent', () => {
  let component: MeucomponenteComponent;
  let fixture: ComponentFixture<MeucomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeucomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeucomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
