import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAddComponent } from './people-add.component';

describe('PeopleAddComponent', () => {
  let component: PeopleAddComponent;
  let fixture: ComponentFixture<PeopleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
