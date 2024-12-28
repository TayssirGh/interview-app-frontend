import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ParserComponent} from './parser.component';
import {ParserRoutingModule} from './parser-routing.module';
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {ButtonModule} from "primeng/button";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ParserRoutingModule,
        CodemirrorModule,
        ButtonModule,
    ],
	declarations: [ParserComponent]
})
export class ParserModule { }
