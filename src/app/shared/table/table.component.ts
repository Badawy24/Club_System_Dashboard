import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentChild, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: any[] = [];
  @Input() title: string = '';
  @ContentChild('actionTemplate') actionTemplate!: TemplateRef<any>;

  currentPage = signal(1);
  itemsPerPage = signal(7);

  @Input() set itemsPerPageInput(value: number) {
    this.itemsPerPage.set(value);
    this.currentPage.set(1);
  }

  get totalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage());
  }

  pagedData = computed(() =>
    this.data.slice(
      (this.currentPage() - 1) * this.itemsPerPage(),
      this.currentPage() * this.itemsPerPage()
    )
  );

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage.set(page);
    }
  }

  onItemsPerPageChange(value: number) {
    this.itemsPerPage.set(+value);
    this.currentPage.set(1);
  }

  getVisiblePages(): number[] {
    const total = this.totalPages;
    const current = this.currentPage();
    const pages: number[] = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (current > 4) pages.push(-1);

      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== total) pages.push(i);
      }

      if (current < total - 3) pages.push(-1);

      if (total > 1) pages.push(total);
    }

    return pages;
  }

  trackByPage(index: number, page: number): number {
    return page;
  }

  changeStatus(row: any, newStatus: string) {
  row.statusReq = newStatus;
  console.log(`Changed status to ${newStatus}`, row);
}

}
