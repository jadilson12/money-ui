import { Component, Input } from "@angular/core";

@Component({
  selector: "app-message",
  template: `
    <p-message
      *ngIf="temErro()"
      severity="error"
      text="{{ message }}"
    ></p-message>
  `,
  styles: []
})
export class MessageComponent {
  @Input() error: string;
  @Input() control: FormControl;
  @Input() message: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
