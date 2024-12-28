import {Component, OnInit} from '@angular/core';
import 'src/assets/demo/scripts/custom-syntax-mode.js'
import {Candidate} from "../../../model/Candidate";
import {CandidateService} from "../service/candidate.service";

@Component({
    templateUrl: './candidate.component.html',
})
export class CandidateComponent implements OnInit {
    candidates: Candidate[] = [];
    loading: boolean = true;

    constructor(private candidateService: CandidateService) {}

    ngOnInit(): void {
        this.fetchCandidates();
    }

    fetchCandidates(): void {
        this.candidateService.findCandidates().subscribe({
            next: (data: Candidate[]) => {
                this.candidates = data;
                this.loading = false;
            },
            error: (err) => {
                console.error('Error fetching candidates:', err);
                this.loading = false;
            }
        });
    }


}

