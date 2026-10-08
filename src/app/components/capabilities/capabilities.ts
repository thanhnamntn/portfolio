import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CAPABILITIES } from '../../data/portfolio.data';

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './capabilities.html',
  styleUrl: './capabilities.scss',
})
export class CapabilitiesComponent {
  groups = CAPABILITIES;
}
