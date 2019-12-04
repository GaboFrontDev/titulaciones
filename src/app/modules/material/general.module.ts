import { NgModule } from "@angular/core";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTooltipModule } from "@angular/material/tooltip";
import "hammerjs";

import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatLineModule,
  MatIconModule,
  MatBottomSheetModule,
  MatRippleModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatSelectModule,
  MatExpansionModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatDialogModule } from "@angular/material/dialog";
import { OverlayModule } from "@angular/cdk/overlay";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatLineModule,
    MatIconModule,
    MatBottomSheetModule,
    MatRippleModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    OverlayModule,
    MatSelectModule,
    MatExpansionModule,
    MaterialFileInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatLineModule,
    MatIconModule,
    MatBottomSheetModule,
    MatRippleModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    OverlayModule,
    MatSelectModule,
    MatExpansionModule,
    MatDividerModule,
    MaterialFileInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MatGeneralModule { }