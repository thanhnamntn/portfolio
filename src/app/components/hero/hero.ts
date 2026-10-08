import { Component } from '@angular/core';
import { PORTFOLIO, HOME_SECTION_COUNT } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
})
export class HeroComponent {
  data = PORTFOLIO;
  sectionCount = HOME_SECTION_COUNT;

  badgeTools: { name: string; icon?: string }[] = [
    { name: 'Vue.js', icon: 'assets/images/vuejs.webp' },
    { name: 'TypeScript' },
    { name: 'Flutter' },
    { name: 'Angular' },
    { name: 'GraphQL' },
    { name: 'Dart' },
  ];

  private titleWords = PORTFOLIO.title.split(' ');
  titleLine1 = this.titleWords.slice(0, -1).join(' ');
  titleLine2 = this.titleWords.slice(-1).join(' ');
}
