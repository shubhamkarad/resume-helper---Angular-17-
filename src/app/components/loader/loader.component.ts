import { Component, Input } from "@angular/core";
import { LoaderService } from "../../loader.service";
import { trigger, transition, animate, style } from "@angular/animations";

@Component({
  selector: "app-loader",
  standalone: true,
  imports: [],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1000ms", style({ opacity: 1 })),
      ]),
      transition(":leave", [animate("500ms", style({ opacity: 0 }))]),
    ]),
  ],
  templateUrl: "./loader.component.html",
  styleUrl: "./loader.component.css",
})
export class LoaderComponent {
  @Input() showLoader: any = "";
  isLoader: any = true;
  // loadingMessage: any;
  loadingMessages: string[] = [
    "Our team is working hard to bring you the best results.",
    "Response is ready! Have a cup of coffee while we generate the results.",
    "Thanks for your patience! Your results are on the way.",
  ];
  currentMessageIndex: number = 0;
  loadingMessage: string = this.loadingMessages[0];
  constructor(public loader: LoaderService) {}
  ngOnInit() {
    this.loader.isLoading$.subscribe((res) => {
      console.log(res, "asas");
      this.isLoader = res;
    });
    setInterval(() => {
      this.currentMessageIndex =
        (this.currentMessageIndex + 1) % this.loadingMessages.length;
      this.loadingMessage = this.loadingMessages[this.currentMessageIndex];
    }, 3000);
  }
  // showNextMessage() {
  //   if (this.currentMessageIndex < this.loadingMessages.length) {
  //     // Show the current message
  //     this.loadingMessage = this.loadingMessages[this.currentMessageIndex];

  //     // Trigger change detection to update the view
  //     this.cdr.detectChanges();

  //     // Increment the index for the next message
  //     this.currentMessageIndex++;

  //     // Set a timeout for the next message with a delay of 3 seconds
  //     setTimeout(() => {
  //       this.showNextMessage();
  //     }, 1000);
  //   }
  // }
}
