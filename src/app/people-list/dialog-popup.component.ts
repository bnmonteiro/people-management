import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-popup',
    imports: [MatDialogModule],
    standalone: true,
    template: `
    <h2 mat-dialog-title>Resultado</h2>
    <mat-dialog-content>
      <p>{{ data.message }}</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Fechar</button>
    </mat-dialog-actions>
  `
})
export class DialogPopupComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<DialogPopupComponent>
    ) { }

    closeDialog(): void {
        this.dialogRef.close();
    }

}
