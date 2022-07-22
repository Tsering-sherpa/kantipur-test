import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfileRecordComponent } from './detail-profile-record.component';

describe('DetailProfileRecordComponent', () => {
  let component: DetailProfileRecordComponent;
  let fixture: ComponentFixture<DetailProfileRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProfileRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProfileRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
