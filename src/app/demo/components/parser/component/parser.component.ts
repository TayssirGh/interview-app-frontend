import {Component, OnInit} from '@angular/core';
import {Candidate} from "../model/Candidate";
import {ParserService} from "../service/parser.service";
import {ParserInput} from "../model/ParserInput";
import 'src/assets/demo/scripts/custom-syntax-mode.js'
@Component({
    templateUrl: './parser.component.html',
})
export class ParserComponent implements OnInit {

    candidates: Candidate[] = [];
    errorMessage: string = '';

    codeMirrorOptions: any = {
        mode: 'javacc-parser',
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        lineWrapping: false,
        extraKeys: { 'Ctrl-Space': 'autocomplete' },
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        autoCloseBrackets: true,
        matchBrackets: true,
        lint: true,
    };

    query: string ;

    constructor(private parserService: ParserService) { }

    ngOnInit() {}
    submit() {
        const input: ParserInput = { syntax: this.query };

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
    setEditorContent(event) {
    }

}
