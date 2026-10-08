import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PORTFOLIO, EXTRA_TOOLS } from '../../data/portfolio.data';

@Component({
  selector: 'app-toolkit',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './toolkit.html',
  styleUrl: './toolkit.scss',
})
export class ToolkitComponent {
  tools = [
    ...PORTFOLIO.skills.filter((s) => s.category === 'Language' || s.category === 'Framework'),
    ...EXTRA_TOOLS,
  ];
}
