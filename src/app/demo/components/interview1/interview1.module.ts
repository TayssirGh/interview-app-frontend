import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  
import { Interview1RoutingModule } from './interview1-routing.module';
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
import { CalendarModule } from 'primeng/calendar'; 
import { Interview1Component } from './interview1.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    Interview1Component
  ],
  imports: [
    CommonModule,
    Interview1RoutingModule,
    TableModule,
    FileUploadModule,
    FormsModule,  
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
    CalendarModule  
  ],
  providers: [MessageService]
})
export class Interview1Module { }