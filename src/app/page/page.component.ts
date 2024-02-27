import { Component } from "@angular/core";
import { ChatPageComponent } from "../chat/chat-page/chat-page.component";
import { Router, RouterLink } from "@angular/router";
import { UploadFileComponent } from "../ui/upload-file/upload-file.component";
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { SharedDataService } from "../service.service";
import { LoaderComponent } from "../components/loader/loader.component";
import { LoaderService } from "../loader.service";
import { ToastrService } from "ngx-toastr";
import { fileSizeValidator } from "../custom-validators";

@Component({
  selector: "app-page",
  standalone: true,
  imports: [
    UploadFileComponent,
    ChatPageComponent,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  templateUrl: "./page.component.html",
  styleUrl: "./page.component.css",
})
export class PageComponent {
  resumeForm!: FormGroup;
  pdfFileName: string = "";
  pdfViewer!: File;
  isLoading: boolean = false;
  fileLimit = false;
  isDragAndDrop: boolean = false;
  // handleFiles: any;
  data = [
    {
      title: "What Sets Us Apart?",
      description:
        "Are you uncertain about whether your resume aligns perfectly with the job description? Fret not! Our innovative Resume Checker is designed to seamlessly bridge the gap between your skills and the employer's expectations.",
    },
    {
      title: "How It Works?",
      description:
        "Simply send us the job description and your resume in PDF format, and our cutting-edge technology will analyze them to ensure that your resume is not just valid but stands out as an ideal match for the position you're eyeing.",
    },
    {
      title: "Why Choose Us?",
      description:
        "Our AI-driven system ensures an in-depth analysis of your resume against the given job requirements. Receive quick and detailed feedback, helping you make necessary adjustments promptly.",
    },
    // {
    //   title: "Benefits",
    //   description:
    //     "Identify gaps in your resume and tailor it for specific job opportunities. Increase your chances of landing interviews by presenting a resume that ticks all the right boxes. Save time and effort by letting our technology do the heavy lifting.",
    // },
  ];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sharedDataService: SharedDataService,
    public loader: LoaderService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    console.log("first");
    this.resumeForm = this.fb.group({
      pdfFile: new FormControl([
        "",
        [fileSizeValidator(3000 * 3000), Validators.required],
      ]),
      description: new FormControl("", Validators.required),
    });
  }
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    // Add styles or visual feedback to indicate the drag target
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    // Remove styles or visual feedback when leaving the drag target
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.onDragLeave(event); // Remove drag styles

    const files = event?.dataTransfer?.files;
    this.isDragAndDrop = true;
    this.onFileSelected(files);
  }
  // handleFiles(files: any): void {
  //   console.log(files, "adasd");
  //   if (files.length > 0) {
  //     const selectedFile = files[0];
  //     this.pdfFileName = selectedFile.name;

  //     // You can perform further actions with the selected file if needed
  //   }
  // }
  onFileSelected(event: any) {
    const file = this.isDragAndDrop ? event[0] : event.target.files[0];
    // this.handleFiles = file;
    this.pdfFileName = file?.name || "";
    console.log("Hello", file.name);
    if (file) {
      // this.selectedPdfName = file.name;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Set the selected PDF content
        // this.selectedPdf = e.target.result;
      };
      console.log(file, "file");
      const fileSize = file.size;
      console.log(fileSize, "filesize");
      if (fileSize > 2621440) {
        this.fileLimit = true;
        this.toastr.error(`File Size limit exceeded`, "Error");
      }
      reader.readAsDataURL(file);
      // this.sharedDataService.sharedData.update(newData);

      // Read the selected PDF file as a data URL
      this.sharedDataService.sendData(file);
      this.pdfViewer = file;
      // this.router.navigate(["/chat"]);
    }
  }

  removeSelectedFile() {
    this.pdfFileName = "";
    this.resumeForm.get("pdfFile")?.setValue("");
  }
  get pdfFile() {
    return this.resumeForm.controls;
  }
  get validate(): { [key: string]: AbstractControl } {
    return this.resumeForm.controls;
  }
  onSubmit() {
    console.log(this.resumeForm.value, "clickd");
    this.isLoading = true;
    this.loader.showLoader();
    // console.log(this.resumeForm.value?.pdfFile, "clickd123");
    console.log(this.pdfViewer, "AAA");
    this.sharedDataService
      .sendResumeData(this.resumeForm.value, this.pdfViewer)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.toastr.success("Success", res.message);
          this.sharedDataService.sendResponse(res);
          this.loader.hideLoader();
          this.router.navigate(["/chat"]);
          if (res.success === true) {
            this.router.navigate([""]);
          }
        },
        (err: any) => {
          console.log(err);
          this.toastr.error(err, "Error");
          this.loader.hideLoader();
        }
      );
  }
}
