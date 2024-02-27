import { Component } from "@angular/core";
import { MessageListComponent } from "../message-list/message-list.component";
import { SharedDataService } from "../../service.service";

@Component({
  selector: "app-main-chat",
  standalone: true,
  imports: [MessageListComponent],
  templateUrl: "./main-chat.component.html",
  styleUrl: "./main-chat.component.css",
})
export class MainChatComponent {
  response: any;
  constructor(private sharedService: SharedDataService) {}

  ngOnInit() {
    this.sharedService.responseData$.subscribe((res) => {
      this.response = res;
      console.log(this.response, "hecker");
    });
  }
}
