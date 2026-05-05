import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  skills = PORTFOLIO.skills;

  categories = ['Language', 'Framework', 'Design', 'Management'];

  byCategory(cat: string) {
    return this.skills.filter((s) => s.category === cat);
  }
}
