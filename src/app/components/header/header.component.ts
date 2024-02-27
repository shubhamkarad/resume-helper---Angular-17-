import { Component } from "@angular/core";
import { AuthService } from "../../auth.service";
import { Router, RouterLink } from "@angular/router";
import { SharedDataService } from "../../service.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  authValue: any = "";
  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: SharedDataService
  ) {}
  ngOnInit() {
    console.log("first", this.authService.toogleLogin());
    this.authValue = this.authService.toogleLogin();
    this.authValue = this.authService.isUserloggedIn();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  login() {
    this.router.navigate(["/login"]);
  }
}
