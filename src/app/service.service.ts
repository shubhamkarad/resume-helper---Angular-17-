import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  TimeoutError,
  catchError,
  throwError,
  timeout,
} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedDataService {
  showSpinner: boolean = false;
  sharedDataSubject = new BehaviorSubject<any>(null);
  sharedData$ = this.sharedDataSubject.asObservable();
  responseSubject = new BehaviorSubject<any>(null);
  responseData$ = this.responseSubject.asObservable();
  private API_URL: any = "http://127.0.0.1:8080";

  constructor(private http: HttpClient) {}
  sendData(data: any) {
    console.log(data, "Data");
    this.sharedDataSubject.next(data);
  }
  sendResponse(res: any) {
    console.log(res, "resss");
    this.responseSubject.next(res);
  }
  sendResumeData(data: any, pdfViewer: any): Observable<any> {
    const timeoutValue = 20000;
    console.log("data", data);
    const formData = new FormData();
    formData.append("file", pdfViewer);
    formData.append("Job_description", data.description);
    console.log(formData, "Form");
    return this.http.post(`${this.API_URL}/upload`, formData).pipe(
      timeout(timeoutValue),
      catchError((err?) => {
        if (err instanceof TimeoutError) {
          return throwError("The Request time out please try again");
        } else {
          // Handle other errors
          return throwError("An error occurred while processing your request.");
        }
      })
    ) as Observable<any>;
  }
  sendQuery(data: any): Observable<any> {
    console.log("data", data);
    const headers = new HttpHeaders({ "content-type": "application/json" });
    return this.http.post(`${this.API_URL}/read_data`, data, {
      headers,
    });
  }
  showLoadingSpinner() {
    this.showSpinner = true;
  }

  hideLoadingSpinner() {
    this.showSpinner = false;
  }
}
