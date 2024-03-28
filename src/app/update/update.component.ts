import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrmServiceService } from '../crm-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, MatInputModule, MatButtonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string ='';
  phone: string = '';
  city: string = '';
  iuhiu: any;

  errorMessage = '';

  constructor(private crmService: CrmServiceService, public dialog: MatDialog) {

  }


  async updateUser() {
    const userDetails = {
      "id": this.id,
      "firstName": this.first_name,
      "lastName": this.last_name,
      "email": this.email,
      "city": this.city,
      "phone": this.phone
    };
debugger;
    await this.crmService.patch(userDetails);
   // this.crmService.updateRecord("123456789", this.iuhiu);
    debugger;
    this.openDialog();
    // .subscribe(
    //   response => {
    //     // Handle success response
    //     console.log('Record updated successfully:', response);
    //   },
    //   error => {
    //     // Handle error response
    //     console.error('Error updating record:', error);
    //   }
    // );
  } 

  openDialog() {
    debugger;
    this.dialog.open(DialogDataExampleDialog);
  }

 
}
@Component({
  selector: 'dialog-data-example-dialog',
  template: `
    <p mat-dialog-title class="title">פרטי משתמש עודכנו בהצלחה</p>
    <mat-icon class="close-button" (click)="closeDialog()" aria-label="Close">close</mat-icon>
  `,
  styles: [`
    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .title{
      padding-top: 35px;
      padding-bottom: 35px;
    }
  `],
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatIconModule, MatDialogActions],
})
export class DialogDataExampleDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogDataExampleDialog>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}