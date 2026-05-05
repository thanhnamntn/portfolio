import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  data = PORTFOLIO;

  titles = ['Web Developer', 'Mobile Developer', 'Team Lead', 'UX/UI Enthusiast'];
  displayText = signal('Web Developer');
  cursorVisible = signal(true);

  private titleIdx = 0;
  private charIdx = 11; // 'Web Developer'.length
  private isDeleting = false;
  private typeTimer: ReturnType<typeof setTimeout> | null = null;
  private cursorTimer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.cursorTimer = setInterval(() => this.cursorVisible.update((v) => !v), 530);
    this.typeTimer = setTimeout(() => this.tick(), 2000);
  }

  ngOnDestroy() {
    if (this.typeTimer) clearTimeout(this.typeTimer);
    if (this.cursorTimer) clearInterval(this.cursorTimer);
  }

  private tick() {
    const current = this.titles[this.titleIdx];

    if (this.isDeleting) {
      this.charIdx--;
    } else {
      this.charIdx++;
    }

    this.displayText.set(current.substring(0, this.charIdx));

    let delay = this.isDeleting ? 45 : 95;

    if (!this.isDeleting && this.charIdx === current.length) {
      delay = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIdx === 0) {
      this.isDeleting = false;
      this.titleIdx = (this.titleIdx + 1) % this.titles.length;
      delay = 350;
    }

    this.typeTimer = setTimeout(() => this.tick(), delay);
  }
}
