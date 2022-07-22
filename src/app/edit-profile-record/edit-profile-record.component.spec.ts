import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileRecordComponent } from './edit-profile-record.component';

describe('EditProfileRecordComponent', () => {
  let component: EditProfileRecordComponent;
  let fixture: ComponentFixture<EditProfileRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
