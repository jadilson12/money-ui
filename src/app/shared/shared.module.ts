import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MessageComponent } from "./message/message.component";

@NgModule({
  declarations: [MessageComponent],
  imports: [MessageModule, MessagesModule, CommonModule],
  exports: [MessageComponent]
})
export class SharedModule {}
