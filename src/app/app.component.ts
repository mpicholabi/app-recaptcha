import { Component } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-14';
  recaptchaToken: string = '';

  constructor(private recaptcha: ReCaptchaV3Service) {}

  copyClipboard(): void {
    const element = document.querySelector('#token') as HTMLElement;
    navigator.clipboard.writeText(element.textContent as string);
  }

  async generateRecaptcha(): Promise<void> {
    const tokenRecaptcha = this.recaptcha.execute('/');
    this.recaptchaToken = await lastValueFrom(tokenRecaptcha);
  }
}
