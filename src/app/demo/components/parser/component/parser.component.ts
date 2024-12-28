import {Component, OnInit} from '@angular/core';
import {Candidate} from "../model/Candidate";
import {ParserService} from "../service/parser.service";
import {ParserInput} from "../model/ParserInput";

@Component({
    templateUrl: './parser.component.html'
})
export class ParserComponent implements OnInit {

    value!: string;
    candidates: Candidate[] = [];
    errorMessage: string = '';
    constructor(private parserService: ParserService) { }

    ngOnInit() {}
    submit() {
        const input: ParserInput = { syntax: this.value };

        this.parserService.sendParsedEmail(input).subscribe({
            next: (data) => {
                this.candidates = data;
                this.errorMessage = '';
                console.log('Candidates:', data);
            },
            error: (err) => {
                this.errorMessage = `Failed to process the syntax: ${err.message}`;
                console.error('Error:', err);
            },
        });
    }

}
