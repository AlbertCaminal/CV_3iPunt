import { LanguageProvider } from './i18n/LanguageContext.jsx';
import LanguageAnnouncer from './i18n/LanguageAnnouncer.jsx';
import StickyNav from './components/ui/StickyNav.jsx';
import ScrollProgressBar from './components/ui/ScrollProgressBar.jsx';
import ErrorBoundary from './components/ui/ErrorBoundary.jsx';
import Analytics from './lib/Analytics.jsx';
import { useLenis } from './lib/useLenis.js';
import Hero from './components/sections/Hero.jsx';
import ImpactDashboard from './components/sections/ImpactDashboard.jsx';
import Methodology from './components/sections/Methodology.jsx';
import ProjectShowcase from './components/sections/ProjectShowcase.jsx';
import Timeline from './components/sections/Timeline.jsx';
import Stack from './components/sections/Stack.jsx';
import ValueProposition from './components/sections/ValueProposition.jsx';

function ScrollEngine() {
  useLenis();
  return null;
}

const sections = [
  { id: 'hero', Component: Hero, label: 'Hero' },
  { id: 'impact', Component: ImpactDashboard, label: 'Impact Dashboard' },
  { id: 'methodology', Component: Methodology, label: 'Methodology' },
  { id: 'projects', Component: ProjectShowcase, label: 'Projects' },
  { id: 'timeline', Component: Timeline, label: 'Timeline' },
  { id: 'stack', Component: Stack, label: 'Stack' },
  { id: 'value', Component: ValueProposition, label: 'Value Proposition' },
];

export default function App() {
  return (
    <LanguageProvider>
      <ScrollEngine />
      <Analytics />
      <ScrollProgressBar />
      <StickyNav />
      <LanguageAnnouncer />
      <main className="relative min-h-screen w-full overflow-x-hidden">
        <ErrorBoundary label="Hero">
          <Hero />
        </ErrorBoundary>
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          {sections
            .filter(({ id }) => id !== 'hero')
            .map(({ id, Component, label }) => (
              <ErrorBoundary key={id} label={label}>
                <Component />
              </ErrorBoundary>
            ))}
        </div>
      </main>
    </LanguageProvider>
  );
}
