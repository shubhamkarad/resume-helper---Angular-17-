import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet, Routes } from "@angular/router";
import { MatIconModule, MatIcon } from "@angular/material/icon";
import { AppComponent } from "./app.component";
import { PageComponent } from "./page/page.component";
import { MainChatComponent } from "./ui/main-chat/main-chat.component";
import { CommonModule } from "@angular/common";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { UploadFileComponent } from "./ui/upload-file/upload-file.component";
import { SharedDataService } from "./service.service";
import { PdfViewerComponent } from "./ui/pdf-viewer/pdf-viewer.component";
import { LoginComponent } from "./ui/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "chat", component: MainChatComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    MainChatComponent,
    UploadFileComponent,
    PdfViewerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatIcon,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-center",
      timeOut: 3000, // Adjust this as needed
      progressBar: true,
      progressAnimation: "increasing",
      tapToDismiss: true,
      // closeButton: true,
      enableHtml: true,
      toastClass: "custom-toast",
    }),
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
