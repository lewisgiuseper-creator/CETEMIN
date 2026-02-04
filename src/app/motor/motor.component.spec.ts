import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxIconComponent, IGX_LIST_DIRECTIVES, IgxIconButtonDirective } from 'igniteui-angular';
import { MOTORComponent } from './motor.component';

describe('MOTORComponent', () => {
  let component: MOTORComponent;
  let fixture: ComponentFixture<MOTORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MOTORComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IgxIconComponent, IGX_LIST_DIRECTIVES, IgxIconButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MOTORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
