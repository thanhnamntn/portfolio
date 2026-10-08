import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  private platformId = inject(PLATFORM_ID);

  contact = PORTFOLIO.contact;
  name = PORTFOLIO.name;

  links = [
    { label: 'GitHub', href: PORTFOLIO.contact.github },
    { label: 'LinkedIn', href: PORTFOLIO.contact.linkedin },
  ];

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
