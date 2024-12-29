import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Assurez-vous que FormsModule est importé
import { IntervieweeRoutingModule } from './interviewee-routing.module';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';  // Importez le CalendarModule
import { IntervieweeComponent } from './interviewee.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    IntervieweeComponent
  ],
  imports: [
    CommonModule,
    IntervieweeRoutingModule,
    TableModule,
    FileUploadModule,
    FormsModule,  // Formulaire nécessaire pour ngModel
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    CalendarModule  // Ajoutez ici le CalendarModule
  ],
  providers: [MessageService]
})
export class IntervieweeModule { }
