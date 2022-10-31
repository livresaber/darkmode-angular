import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkmodeComponent } from './darkmode.component';

describe('DarkmodeComponent', () => {
  let component: DarkmodeComponent;
  let fixture: ComponentFixture<DarkmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkmodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should light mode', () => {
    const btnMode = fixture.nativeElement.querySelector('.btn-mode')
    const icon = btnMode.querySelector('[aria-label="Icon Light Mode"]')
    expect(btnMode).toBeTruthy();
    expect(icon).toBeTruthy();
    expect(btnMode.textContent.trim()).toBe('LightMode');
  });
  it('should dark mode', () => {
    const btnMode = fixture.nativeElement.querySelector('.btn-mode')
    btnMode.dispatchEvent(new Event('click'))

    const icon = btnMode.querySelector('[aria-label="Icon Dark Mode"]')
    expect(btnMode).toBeTruthy();
    expect(icon).toBeTruthy();
    expect(btnMode.textContent.trim()).toBe('DarkMode');
  });
});
