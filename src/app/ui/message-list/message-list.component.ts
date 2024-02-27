import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SharedDataService } from "../../service.service";
import { ProgressComponent } from "../../components/progress/progress.component";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { LoaderService } from "../../loader.service";
interface Message {
  text: string;
  type: "user" | "bot";
}
@Component({
  selector: "app-message-list",
  standalone: true,
  imports: [CommonModule, ProgressComponent, ReactiveFormsModule],
  templateUrl: "./message-list.component.html",
  styleUrl: "./message-list.component.css",
})
export class MessageListComponent {
  chatForm!: FormGroup;
  messages: Message[] = [];
  userInput: string = "";
  percentMatchValue: any;
  queryValue: any;
  // users = [
  //   { id: 1, name: "Kristiyan" },
  //   { id: 2, name: "Emiliyan" },
  //   { id: 3, name: "Kristiyan" },
  // ];
  isLoading: boolean = false;
  response: any;
  constructor(
    private sharedService: SharedDataService,
    private fb: FormBuilder,
    private sharedDataService: SharedDataService,
    public loader: LoaderService
  ) {}

  ngOnInit() {
    this.chatForm = this.fb.group({
      query: new FormControl("", []),
    });
    this.sharedService.responseData$.subscribe((res) => {
      this.response = res;
      this.percentMatch(res?.result);
      const userMessage: Message = {
        text: this.response?.result || "Something went wrong :(",
        type: "bot",
      };
      this.messages.push(userMessage);
      console.log(this.response, "hecker");
    });
  }
  percentMatch(result: any) {
    // Extract the percentage match using regular expression
    const percentageMatch = result?.match(/Percentage Match: (\d+)%/) || 0;

    // Check if a match is found
    if (percentageMatch && percentageMatch[1]) {
      const extractedPercentage = parseInt(percentageMatch[1], 10);
      console.log(`Extracted Percentage Match: ${extractedPercentage}%`);
      this.percentMatchValue = `${extractedPercentage}%`;
    } else {
      console.log("Percentage match not found in the response.");
    }
  }
  sendMessage(query: string) {
    const userMessage: Message = { text: query, type: "user" };
    this.messages.push(userMessage);
    // this.userInput = "";

    // Simulate API call (replace this with your actual API call)
    // this.getApiResponse(userMessage.text);
  }

  getApiResponse(userInput: string) {
    // Simulate API response (replace this with your actual API call)
    const botResponse: Message = {
      text: userInput,
      type: "bot",
    };
    this.messages.push(botResponse);
  }
  onSubmit() {
    console.log(this.chatForm.value, "clickd");
    this.sendMessage(this.chatForm.value?.query);
    this.isLoading = true;
    this.queryValue = this.chatForm.value;
    this.chatForm.reset();
    // console.log(this.resumeForm.value?.pdfFile, "clickd123");
    this.sharedDataService.sendQuery(this.queryValue).subscribe(
      (res: any) => {
        console.log(res);
        this.isLoading = false;
        this.getApiResponse(res.result);
        if (res.success === true) {
        }
      },
      (err: any) => {
        console.log(err);
        this.loader.hideLoader();
      }
    );
  }
}
