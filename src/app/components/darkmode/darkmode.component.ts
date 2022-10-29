import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.scss']
})
export class DarkmodeComponent implements OnInit {

  constructor() { }

  modeLocal = localStorage.getItem('darkmode')
  mode = this.modeLocal == null ? false : JSON.parse(this.modeLocal)

  toggleMode = () => {
    this.mode = !this.mode
    this.setMode(this.mode)
  }
  setMode = (value: boolean) => {
    localStorage.setItem('darkmode', JSON.stringify(value))

    if(value) {
      document.body.classList.add('darkmode')
      document.body.classList.remove('lightmode')
    } else {
      document.body.classList.add('lightmode')
      document.body.classList.remove('darkmode')
    }
  }

  ngOnInit(): void {
    this.setMode(this.mode)
  }

}
