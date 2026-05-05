import { Component, signal, computed } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PORTFOLIO } from '../../data/portfolio.data';

type Filter = 'all' | 'web' | 'mobile';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  allProjects = PORTFOLIO.projects;
  activeFilter = signal<Filter>('all');

  filters: { label: string; value: Filter; icon: string }[] = [
    { label: 'All', value: 'all', icon: '⚡' },
    { label: 'Web', value: 'web', icon: '🌐' },
    { label: 'Mobile', value: 'mobile', icon: '📱' },
  ];

  filtered = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.allProjects;
    return this.allProjects.filter((p) => p.platform === f);
  });

  setFilter(f: Filter) {
    this.activeFilter.set(f);
  }
}
