import { contact } from '../data/contact.js';
import { stackItems } from '../data/stack.js';
import { timelineEvents } from '../data/timeline.js';

const PAGE_BOTTOM = 280;
const MARGIN = 18;

export async function downloadSummaryPdf(t) {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - MARGIN * 2;
  let y = MARGIN;

  const ensureSpace = (needed = 10) => {
    if (y + needed > PAGE_BOTTOM) {
      doc.addPage();
      y = MARGIN;
    }
  };

  const writeLines = (text, { bold = false, size = 10, indent = 0, color } = {}) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    if (color) doc.setTextColor(...color);
    else doc.setTextColor(0, 0, 0);

    const lines = doc.splitTextToSize(text, maxWidth - indent);
    lines.forEach((line) => {
      ensureSpace(6);
      doc.text(line, MARGIN + indent, y);
      y += 5;
    });
  };

  const sectionTitle = (text) => {
    ensureSpace(12);
    y += 2;
    writeLines(text, { bold: true, size: 11, color: [29, 78, 216] });
    y += 1;
  };

  const bullet = (text) => writeLines(`• ${text}`, { indent: 2 });

  writeLines('Albert Caminal i Mallol', { bold: true, size: 18 });
  y += 2;
  writeLines(t.hero.tagline, { size: 11 });
  writeLines(`${t.hero.titleLine1} ${t.hero.titleHighlight}`, { size: 10 });

  sectionTitle(t.pdf.sections.impact);
  t.pdf.metrics.forEach(bullet);

  sectionTitle(t.pdf.sections.method);
  t.pdf.methodSteps.forEach(bullet);

  sectionTitle(t.pdf.sections.projects);
  t.pdf.projects.forEach(bullet);

  sectionTitle(t.pdf.sections.timeline);
  timelineEvents.forEach((event) => {
    const evt = t.timeline.events[event.translationKey];
    bullet(`${evt.month} — ${evt.title}`);
  });

  sectionTitle(t.pdf.sections.stack);
  writeLines(stackItems.map((item) => item.name).join(' · '));

  sectionTitle(t.pdf.sections.contact);
  writeLines(contact.email);
  writeLines(contact.linkedin);
  writeLines(contact.github);
  writeLines(`${t.pdf.portfolioLabel}: ${t.pdf.portfolioUrl}`);

  doc.save(`${t.pdf.filename}.pdf`);
}
