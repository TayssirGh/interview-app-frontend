import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntervieweeComponent } from './interviewee.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: IntervieweeComponent }
	])],
	exports: [RouterModule]
})
export class IntervieweeRoutingModule { }
