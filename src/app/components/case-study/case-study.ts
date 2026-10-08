import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CASE_STUDY_SPOTLIGHT } from '../../data/portfolio.data';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss',
})
export class CaseStudyComponent {
  study = CASE_STUDY_SPOTLIGHT;
}
