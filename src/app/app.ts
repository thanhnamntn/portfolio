import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { SelectedWorksComponent } from './components/selected-works/selected-works';
import { CaseStudyComponent } from './components/case-study/case-study';
import { CapabilitiesComponent } from './components/capabilities/capabilities';
import { ToolkitComponent } from './components/toolkit/toolkit';
import { ExperienceComponent } from './components/experience/experience';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    SelectedWorksComponent,
    CaseStudyComponent,
    CapabilitiesComponent,
    ToolkitComponent,
    ExperienceComponent,
    AboutComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
