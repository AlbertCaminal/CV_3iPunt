import { useState } from 'react';
import { FileDown } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext.jsx';
import { downloadSummaryPdf } from '../../lib/downloadSummaryPdf.js';

export default function DownloadPdfButton({ className = '' }) {
  const t = useT();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await downloadSummaryPdf(t);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={[
        'group inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/60 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:border-accent-500/40 hover:bg-zinc-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:cursor-wait disabled:opacity-60',
        className,
      ].join(' ')}
    >
      <FileDown className="size-4" aria-hidden="true" />
      <span>{loading ? t.pdf.generating : t.pdf.cta}</span>
    </button>
  );
}
