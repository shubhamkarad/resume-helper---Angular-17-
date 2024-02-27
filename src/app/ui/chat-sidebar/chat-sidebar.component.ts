import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SharedDataService } from "../../service.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-chat-sidebar",
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: "./chat-sidebar.component.html",
  styleUrl: "./chat-sidebar.component.css",
})
export class ChatSidebarComponent {
  response: any;
  percentMatchValue: any;
  constructor(private sharedService: SharedDataService) {}
  ngOnInit() {
    this.sharedService.responseData$.subscribe((res) => {
      this.response = res;
      this.percentMatch(res?.result);
    });
  }
  percentMatch(result: any) {
    // Extract the percentage match using regular expression
    const percentageMatch = result?.match(/Percentage Match: (\d+)%/);

    // Check if a match is found
    if (percentageMatch && percentageMatch[1]) {
      const extractedPercentage = parseInt(percentageMatch[1], 10);
      console.log(`Extracted Percentage Match: ${extractedPercentage}%`);
      this.percentMatchValue = `${extractedPercentage}`;
    } else {
      console.log("Percentage match not found in the response.");
    }
  }
}
