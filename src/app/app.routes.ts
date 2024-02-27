import { Routes } from "@angular/router";
import { MainChatComponent } from "./ui/main-chat/main-chat.component";
import { PageComponent } from "./page/page.component";
import { ChatPageComponent } from "./chat/chat-page/chat-page.component";
import { LoginComponent } from "./ui/login/login.component";
import { authGuard } from "./auth.guard";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ResumeTipsComponent } from "./components/resume-tips/resume-tips.component";

export const routes: Routes = [
  { path: "", component: PageComponent },
  { path: "resume-tips", component: ResumeTipsComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "chat", component: ChatPageComponent },
  { path: "**", redirectTo: "" },
];
