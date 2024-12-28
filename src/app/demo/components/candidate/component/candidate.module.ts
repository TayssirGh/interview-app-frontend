import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CandidateComponent} from './candidate.component';
import {CandidateRoutingModule} from './candidate-routing.module';
import {TableModule} from "primeng/table";
import {BadgeModule} from "primeng/badge";
import {ButtonModule} from "primeng/button";

@NgModule({
    imports: [

        CandidateRoutingModule,
        TableModule, CommonModule, BadgeModule, ButtonModule
    ],
	declarations: [CandidateComponent]
})
export class CandidateModule { }
