import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { SharedDataService } from "../../service.service";
import { Router } from "@angular/router";
import { HeaderComponent } from "../../components/header/header.component";
import { AuthService } from "../../auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, HeaderComponent],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: SharedDataService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log("first");
    this.loginForm = this.fb.group({
      username: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    console.log("clicked");
    console.log(this.loginForm.value?.pdfFile, "clickd");
    // this.apiService.login(this.loginForm.value).subscribe(
    //   (res) => {
    //     console.log(res);
    //     if (res.success === true) {
    //       localStorage.setItem('jwtToken', res.token);
    //       this.authService.toogleLogin.update(() => 'Logout');
    //       this.router.navigate(['']);
    //       // localStorage.setItem('token', res.token);
    //     }
    //   },
    //   (err) => console.log(err)
    // );
  }
}
