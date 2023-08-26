import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleUserObamaPage } from './single-user-obama.page';

describe('SingleUserObamaPage', () => {
  let component: SingleUserObamaPage;
  let fixture: ComponentFixture<SingleUserObamaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleUserObamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
