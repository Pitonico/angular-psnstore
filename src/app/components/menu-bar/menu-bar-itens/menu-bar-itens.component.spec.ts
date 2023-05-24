import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarItensComponent } from './menu-bar-itens.component';

describe('MenuBarItensComponent', () => {
  let component: MenuBarItensComponent;
  let fixture: ComponentFixture<MenuBarItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
