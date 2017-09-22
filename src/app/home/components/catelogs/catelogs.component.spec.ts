import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatelogsComponent } from './catelogs.component';

describe('CatelogsComponent', () => {
  let component: CatelogsComponent;
  let fixture: ComponentFixture<CatelogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatelogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatelogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
