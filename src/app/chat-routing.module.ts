import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainChatComponent } from './ui/main-chat/main-chat.component';

const routes: Routes = [{ path: '', component: MainChatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
