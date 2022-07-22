import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfileRecordComponent } from './add-profile-record.component';

describe('AddProfileRecordComponent', () => {
  let component: AddProfileRecordComponent;
  let fixture: ComponentFixture<AddProfileRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfileRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProfileRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
