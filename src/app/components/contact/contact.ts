import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  contact = PORTFOLIO.contact;

  cards = [
    {
      label: 'Email',
      value: PORTFOLIO.contact.email,
      href: `mailto:${PORTFOLIO.contact.email}`,
      icon: 'email',
    },
    {
      label: 'Phone',
      value: PORTFOLIO.contact.phone,
      href: `tel:+84976579731`,
      icon: 'phone',
    },
    {
      label: 'LinkedIn',
      value: 'nam-nguyen-thanh',
      href: PORTFOLIO.contact.linkedin,
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      value: 'thanhnamntn',
      href: PORTFOLIO.contact.github,
      icon: 'github',
    },
  ];
}
