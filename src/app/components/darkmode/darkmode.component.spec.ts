import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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
  it('should light mode', fakeAsync(async () => {
    // const btnMode = fixture.nativeElement.querySelector('.btn-mode')
    // const icon = btnMode.querySelector('[aria-label="Icon Light Mode"]')

    // expect(btnMode).toBeTruthy();
    expect(modeButton()).toBe('LightMode');
    expect(buttonIcon('[aria-label="Icon Light Mode"]')).toBeTruthy();
  }));
  it('should dark mode', fakeAsync(async () => {
    fixture.detectChanges();
    tick();

    const btnMode = fixture.debugElement.query(By.css('.btn-mode')).nativeElement
    btnMode.dispatchEvent(new Event('click'));

    tick();

    expect(modeButton()).toBe('DarkMode');
    expect(buttonIcon('[aria-label="Icon Dark Mode"]')).toBeTruthy();
  //   tick(2000);
  //   fixture.detectChanges();
  //   expect(btnMode).toBeTruthy();
  //   expect(modeButton()).toEqual('DarkMode');
  }));

  function modeButton() {
    fixture.detectChanges();
    tick();

    let result = fixture.debugElement.query(
      By.css('.btn-mode')
    ).nativeElement.textContent.trim();

    tick();
    return result;
  }

  function buttonIcon(value: string) {
    fixture.detectChanges();
    tick();

    let result = fixture.debugElement.query(
      By.css(value)
    ).nativeElement;

    tick();
    return result;
  }
});
