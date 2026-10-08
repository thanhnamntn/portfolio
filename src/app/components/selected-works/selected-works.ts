import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PORTFOLIO, FEATURED_PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-selected-works',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './selected-works.html',
  styleUrl: './selected-works.scss',
})
export class SelectedWorksComponent {
  @ViewChild('row') row!: ElementRef<HTMLElement>;

  works = FEATURED_PROJECTS.map(
    (f) => PORTFOLIO.projects.find((p) => p.name === f.name && p.platform === f.platform)!,
  );

  scroll(direction: 'left' | 'right') {
    const amount = 340 * (direction === 'left' ? -1 : 1);
    this.row.nativeElement.scrollBy({ left: amount, behavior: 'smooth' });
  }
}
