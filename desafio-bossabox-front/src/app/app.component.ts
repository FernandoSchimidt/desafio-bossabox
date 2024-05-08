import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolsComponent } from './components/tools/tools.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolsComponent,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'desafio-bossabox-front';
  submitForm: FormGroup;
  tag: string = 'teste';
  @ViewChild(ToolsComponent) toolsComponent: ToolsComponent | undefined;

  constructor(private fb: FormBuilder) {
    this.submitForm = this.fb.group({
      tag: [''],
    });
  }

  submit() {
    if (this.toolsComponent) {
      this.tag = this.submitForm.value.tag;
      this.toolsComponent.findByTag(this.tag);
    }
    // console.log(this.tag);
  }
}
