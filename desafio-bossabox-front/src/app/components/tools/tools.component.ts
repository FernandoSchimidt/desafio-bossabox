import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToolService } from '../../services/tool.service';
import { Tools } from './Tools';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
})
export class ToolsComponent {
  @Input() tag = '';

  toolsForm: FormGroup;
  tools: Tools[] = [];
  tags: string[] = [];
  constructor(
    private fb: FormBuilder,
    private service: ToolService,
    public dialog: MatDialog
  ) {
    this.toolsForm = this.fb.group({
      title: ['', [Validators.required]],
      link: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: ['', [Validators.required]],
    });
    this.findAll();
  }

  create() {
    this.service.create(this.toolsForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.findAll();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  findAll() {
    this.service.findAll().subscribe(
      (res) => {
        this.tools = res;
        // console.log(this.tools);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createTags() {
    if (this.toolsForm.value.tags != null && this.toolsForm.value.tags != '') {
      this.tags.push(this.toolsForm.value.tags);
      console.log(this.tags);
      this.toolsForm.value.tags = this.tags;
    }
    // this.toolsForm.get('tags')?.setValue('');
  }
  removeTag(tagIndex: any) {
    this.tags.splice(tagIndex, 1);
    this.toolsForm.value.tags = this.tags;
  }
  deleteTool(id: any) {
    this.service.delete(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.findAll();
  }

  findByTag(tag: any) {
    console.log(tag);
    if (tag == null || tag == '' || tag == undefined) {
      this.findAll();
    }
    this.service.findByTag(tag).subscribe(
      (res) => {
        this.tools = res;
        this.tag = '';
      },
      (err) => {
        console.log(err);
      }
    );
  }
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
