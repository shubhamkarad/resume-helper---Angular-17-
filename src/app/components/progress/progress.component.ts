import { Component, Input } from "@angular/core";

@Component({
  selector: "app-progress",
  standalone: true,
  imports: [],
  templateUrl: "./progress.component.html",
  styleUrl: "./progress.component.css",
})
export class ProgressComponent {
  @Input() progressValue: any;
  @Input() showCloseButton: boolean = false;
  ngOnInit() {
    if (this.showCloseButton) {
      // Automatically hide after 3 seconds
      setTimeout(() => {
        this.hideProgress();
      }, 3000);
    }
  }
  hideProgress() {
    // Implement any logic to hide the progress (e.g., emit an event)
  }
}
