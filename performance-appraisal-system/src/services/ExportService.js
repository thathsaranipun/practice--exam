// services/ExportService.js
import { jsPDF } from 'jspdf';
import Papa from 'papaparse';

export const exportToCSV = (data) => {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'report.csv';
  a.click();
};

export const exportToPDF = (data) => {
  const doc = new jsPDF();
  doc.text('Report', 20, 20);
  data.forEach((row, index) => {
    doc.text(`${row.name} - ${row.value}`, 20, 30 + (index * 10));
  });
  doc.save('report.pdf');
};
