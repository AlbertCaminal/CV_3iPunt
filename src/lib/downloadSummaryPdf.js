import { contact } from '../data/contact.js';
import { stackItems } from '../data/stack.js';
import { timelineEvents } from '../data/timeline.js';

const PAGE = { width: 210, height: 297, margin: 16, bottom: 282 };
const CONTENT_W = PAGE.width - PAGE.margin * 2;

const C = {
  headerBg: [15, 23, 42],
  headerSub: [148, 163, 184],
  headerTitle: [248, 250, 252],
  ink: [24, 24, 27],
  muted: [82, 82, 91],
  accent: [37, 99, 235],
  line: [228, 228, 231],
  bullet: [59, 130, 246],
};

/** jsPDF Helvetica no soporta bien flechas, bullets ni guiones Unicode. */
function sanitizeForPdf(text) {
  return String(text)
    .replace(/\u2192/g, ' -> ')
    .replace(/\u2014/g, ' - ')
    .replace(/\u2013/g, '-')
    .replace(/\u2022/g, '')
    .replace(/\u00B7/g, ' | ')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function downloadSummaryPdf(t) {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
  let y = PAGE.margin;

  const ensureSpace = (needed = 8) => {
    if (y + needed > PAGE.bottom) {
      doc.addPage();
      y = PAGE.margin;
    }
  };

  const setInk = () => {
    doc.setCharSpace(0);
    doc.setTextColor(...C.ink);
  };

  const writeText = (text, x, yPos, { size = 10, bold = false, color = C.ink, maxWidth } = {}) => {
    doc.setCharSpace(0);
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const safe = sanitizeForPdf(text);
    const lines = doc.splitTextToSize(safe, maxWidth ?? CONTENT_W - (x - PAGE.margin));
    doc.text(lines, x, yPos);
    return lines.length * (size * 0.42);
  };

  const sectionTitle = (label) => {
    ensureSpace(14);
    y += 4;
    doc.setFillColor(...C.accent);
    doc.rect(PAGE.margin, y - 3.5, 2.5, 6, 'F');
    const h = writeText(label, PAGE.margin + 6, y, { size: 11, bold: true, color: C.accent });
    y += h + 3;
    doc.setDrawColor(...C.line);
    doc.setLineWidth(0.2);
    doc.line(PAGE.margin, y, PAGE.width - PAGE.margin, y);
    y += 4;
    setInk();
  };

  const bullet = (text, { size = 9.5 } = {}) => {
    ensureSpace(8);
    const safe = sanitizeForPdf(text);
    const lines = doc.splitTextToSize(safe, CONTENT_W - 8);
    const lineHeight = size * 0.45;
    const blockH = lines.length * lineHeight;

    doc.setFillColor(...C.bullet);
    doc.circle(PAGE.margin + 1.8, y + 1.2, 0.9, 'F');

    doc.setCharSpace(0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(size);
    doc.setTextColor(...C.ink);
    doc.text(lines, PAGE.margin + 6, y + 1.5);
    y += blockH + 2.5;
  };

  // —— Cabecera ——
  const headerH = 42;
  doc.setFillColor(...C.headerBg);
  doc.rect(0, 0, PAGE.width, headerH, 'F');

  writeText('Albert Caminal i Mallol', PAGE.margin, 14, {
    size: 20,
    bold: true,
    color: C.headerTitle,
    maxWidth: CONTENT_W,
  });
  writeText(t.hero.tagline, PAGE.margin, 24, {
    size: 10,
    color: C.headerSub,
    maxWidth: CONTENT_W,
  });
  writeText(`${t.hero.titleLine1} ${t.hero.titleHighlight}`, PAGE.margin, 31, {
    size: 9.5,
    color: C.headerSub,
    maxWidth: CONTENT_W,
  });

  y = headerH + 10;
  setInk();

  sectionTitle(t.pdf.sections.impact);
  t.pdf.metrics.forEach((line) => bullet(line));

  sectionTitle(t.pdf.sections.method);
  t.pdf.methodSteps.forEach((line) => bullet(line));

  sectionTitle(t.pdf.sections.projects);
  t.pdf.projects.forEach((line) => bullet(line));

  sectionTitle(t.pdf.sections.timeline);
  timelineEvents.forEach((event) => {
    const evt = t.timeline.events[event.translationKey];
    bullet(`${evt.month} - ${evt.title}`);
  });

  sectionTitle(t.pdf.sections.stack);
  const stackLine = stackItems.map((item) => item.name).join(' · ');
  ensureSpace(10);
  doc.setCharSpace(0);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...C.muted);
  const stackLines = doc.splitTextToSize(sanitizeForPdf(stackLine), CONTENT_W);
  doc.text(stackLines, PAGE.margin, y);
  y += stackLines.length * 4.2 + 2;

  sectionTitle(t.pdf.sections.contact);
  bullet(contact.email, { size: 9.5 });
  bullet(contact.linkedin.replace(/^https?:\/\//, ''), { size: 9 });
  bullet(contact.github.replace(/^https?:\/\//, ''), { size: 9 });
  bullet(`${t.pdf.portfolioLabel}: ${t.pdf.portfolioUrl}`, { size: 9 });

  const pages = doc.getNumberOfPages();
  for (let i = 1; i <= pages; i += 1) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...C.muted);
    doc.setCharSpace(0);
    doc.text(
      sanitizeForPdf(`${t.pdf.filename} · ${i}/${pages}`),
      PAGE.margin,
      PAGE.height - 8
    );
  }

  doc.save(`${t.pdf.filename}.pdf`);
}
