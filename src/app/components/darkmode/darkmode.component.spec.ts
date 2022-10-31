import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

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

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
  it('should light mode', async () => {
    fixture = TestBed.createComponent(DarkmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const btnMode = fixture.nativeElement.querySelector('.btn-mode')
    const icon = btnMode.querySelector('[aria-label="Icon Light Mode"]')
    expect(btnMode).toBeTruthy();
    expect(icon).toBeTruthy();
    expect(btnMode.textContent.trim()).toBe('LightMode');
  });
  it('should dark mode', fakeAsync(async () => {
    fixture = TestBed.createComponent(DarkmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const btnMode = fixture.nativeElement.querySelector('.btn-mode')
    btnMode.click();
    tick(2000);
    fixture.detectChanges();

    const icon = btnMode.querySelector('[aria-label="Icon Dark Mode"]')
    expect(btnMode).toBeTruthy();
    expect(icon).toBeTruthy();
    expect(btnMode.textContent.trim()).toBe('DarkMode');
  }));
});
