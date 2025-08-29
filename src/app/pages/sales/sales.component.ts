
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Dept = 'TM1' | 'TM2';

interface Line {
  dept: Dept;
  qty: number;
  unit: number;
  total: number;
}

@Component({
  standalone: true,
  selector: 'app-sales',
  imports: [CommonModule],
  templateUrl: './sales.component.html'
})
export class SalesComponent {
  // current typed number (price by default, or unit price after X)
  current = '';
  // quantity after pressing X (null means no X mode)
  qty: number | null = null;

  lines: Line[] = [];
  get total(): number { return this.lines.reduce((s, l) => s + l.total, 0); }

  private toAmount(s: string): number {
    if (!s) return 0;
    const n = Number(s.replace(',', '.'));
    return isNaN(n) ? 0 : n;
  }

  digit(d: string) {
    if (d === '.' && this.current.includes('.')) return;
    this.current += d;
  }

  backspace() {
    if (this.current.length) this.current = this.current.slice(0, -1);
  }

  clearAll() {
    this.current = '';
    this.qty = null;
    this.lines = [];
  }

  // X pressed: current becomes quantity (int), then user types price
  multiplyMode() {
    const asInt = Math.max(1, Math.floor(this.toAmount(this.current) || 1));
    this.qty = asInt;
    this.current = ''; // now expect unit price
  }

  addDept(dept: Dept) {
    const unit = this.toAmount(this.current);
    const qty = this.qty ?? 1;

    if (unit <= 0) return; // nothing to add

    const total = +(qty * unit).toFixed(2);
    this.lines.push({ dept, qty, unit, total });

    // reset entry for next item
    this.current = '';
    this.qty = null;
  }

  format(n: number): string {
    return new Intl.NumberFormat('el-GR', { style: 'currency', currency: 'EUR' }).format(n || 0);
  }

  // What to show in the display line
  get display(): string {
    if (this.qty != null) {
      const unit = this.toAmount(this.current);
      if (unit > 0) {
        return `${this.qty} × ${this.format(unit)} = ${this.format(this.qty * unit)}`;
      }
      return `${this.qty} × …`;
    }
    // no qty mode → show current as price, or total if empty
    if (this.current) return this.format(this.toAmount(this.current));
    return this.format(this.total);
  }
}
