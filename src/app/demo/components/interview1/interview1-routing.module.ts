import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Interview1Component } from './interview1.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: Interview1Component }
	])],
	exports: [RouterModule]
})
export class Interview1RoutingModule { }
