import { Component } from 'react';
import { AlertTriangle } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (typeof console !== 'undefined' && console.error) {
      console.error('[ErrorBoundary]', error, info?.componentStack);
    }
  }

  reset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    if (this.props.fallback) return this.props.fallback;

    return (
      <section
        role="alert"
        className="my-8 flex flex-col items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-6 text-amber-100"
      >
        <div className="flex items-center gap-2">
          <AlertTriangle className="size-5 text-amber-400" aria-hidden="true" />
          <h3 className="text-base font-semibold">
            {this.props.label
              ? `Esta sección (${this.props.label}) no se ha podido cargar.`
              : 'Esta sección no se ha podido cargar.'}
          </h3>
        </div>
        <p className="text-sm text-amber-200/80">
          El resto del informe sigue disponible más abajo.
        </p>
        <button
          type="button"
          onClick={this.reset}
          className="rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-100 transition-colors hover:bg-amber-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          Reintentar
        </button>
      </section>
    );
  }
}
