import { Component } from '@angular/core';

import pkg from '../../package.json';
import { ExampleComponent } from './app.example';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appVersion;
  public angularVersion;
  public configNucleus: {
    name: string;
    github: string;
    npm: string;
    appVersion: string;
    angularVersion: string;
    stepsInstall: Array<{ name: string; language: string; content: string }>;
  };

  constructor() {
    this.appVersion = pkg.version;
    this.angularVersion = pkg.dependencies?.['@angular/core'].replace('^', '');
    this.configNucleus = {
      name: 'darkmode-angular',
      github: 'https://github.com/livresaber/darkmode-angular',
      npm: 'https://www.npmjs.com/package/darkmode-angular',
      appVersion: this.appVersion,
      angularVersion: this.angularVersion,
      stepsInstall: [
        {
          name: 'Install',
          language: 'bash',
          content: 'npm install darkmode-angular',
        },
        {
          name: 'Usage',
          language: 'tsx',
          content: ExampleComponent,
        },
      ],
    };
  }
}
