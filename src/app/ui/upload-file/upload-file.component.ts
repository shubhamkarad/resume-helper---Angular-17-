import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SharedDataService } from '../../service.service';
@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css',
})
export class UploadFileComponent {
  binaryData: string | ArrayBuffer | null = '';
  file: any;
  selectedPdfName: string = '';
  showProgressBar: boolean = false; // Flag to show/hide progress bar
  selectedPdf: string = '';
  pdfViewer: any;
  constructor(
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  onPdfSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.selectedPdfName = file.name;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Set the selected PDF content
        this.selectedPdf = e.target.result;
      };
      console.log(file, 'file');

      reader.readAsDataURL(file);
      // this.sharedDataService.sharedData.update(newData);

      // Read the selected PDF file as a data URL
      this.sharedDataService.sendData(file);
      this.pdfViewer = file;
      this.router.navigate(['/chat']);
    }
  }
}
