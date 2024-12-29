import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Interview2Component } from './interview2.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: Interview2Component }
	])],
	exports: [RouterModule]
})
export class Interview2RoutingModule { }
