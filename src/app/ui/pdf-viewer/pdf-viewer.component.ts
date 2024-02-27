import { Component } from '@angular/core';
import { SharedDataService } from '../../service.service';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css',
})
export class PdfViewerComponent {
  pdf: any = '';
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    console.log('first');
    const intialData = this.sharedDataService.sharedDataSubject.getValue();
    if (intialData) {
      this.pdf = intialData;
    } else {
      this.sharedDataService.sharedData$.subscribe((data: any) => {
        console.log('Received data:', data); // Example usage
        this.pdf = data;
      });
    }

    // console.log('Current data:', this.sharedDataService.sharedData());
  }
}
