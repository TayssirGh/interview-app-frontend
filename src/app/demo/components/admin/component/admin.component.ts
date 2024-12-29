import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Table} from 'primeng/table';
import {Candidate} from "../../../model/Candidate";
import {CandidateService} from "../service/candidate.service";
import {Status} from "../../../model/Status";


@Component({
    templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  candidateDialog: boolean = false;

  deleteCandidateDialog: boolean = false;

  deleteCandidatesDialog: boolean = false;
  candidates: Candidate[] = [];
  candidate: Candidate ;
  positions: string[] = ["Software Engineering", "Software Engineering internship", "QA engineering", "Devops internship", "Machine Learning internship"];
  selectedCandidates: Candidate[] = [];

  submitted: boolean = false;
  editMode: boolean = false;
  statuses : Status[];

  constructor(private candidateService: CandidateService, private messageService: MessageService) {
  }

  ngOnInit() {
      this.initializeCandidate();
      this.initializeOptions();
      this.fetchCandidates();
  }
  fetchCandidates(): void {
    this.candidateService.findCandidates().subscribe({
        next: (data: Candidate[]) => {
            this.candidates = data;
        },
        error: (err) => {
            console.error('Error fetching candidates:', err);
        }
    });
  }
  initializeOptions(){
      this.statuses = [
          Status.PENDING ,
          Status.ACCEPTED ,
          Status.REJECTED ,
      ];
  }
  initializeCandidate() {
      this.candidate =  {
          id: null,
          interviewId: null,
          name: "",
          email: "",
          appliedPosition: "",
          skills: [],
          interviewScore: 0,
          responseTime: 0,
          feedback: "",
          rating: 0,
          status: Status.PENDING,
          createdAt: new Date(),
      };
  }
  openNew() {
        this.initializeCandidate();
        this.submitted = false;
        this.candidateDialog = true;
    }
  hideDialog() {
    this.candidateDialog = false;
    this.submitted = false;
    this.editMode = false;
  }
  submitCandidate(candidate: Candidate) {
        this.submitted = true;
        console.log(candidate);
        if (!candidate.name || !candidate.email || !candidate.appliedPosition || !candidate.status) {
            this.messageService.add({
                severity: 'error',
                summary: 'Validation Error',
                detail: 'Please fill in all required fields.',
            });
            return;
        }
        if (this.editMode){
            this.candidateService.updateCandidate(candidate).subscribe({
                next: (data: Candidate) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Candidate updated successfully.',
                    });
                    this.fetchCandidates();
                    this.hideDialog();
                },
                error: (err) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Failed to update candidate. Please try again.',
                    });
                    console.error(err);
                }
            })
        }
        else {
            this.candidateService.addCandidate(candidate).subscribe({
                next: (data) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Candidate added successfully.',
                    });
                    this.fetchCandidates();
                    this.hideDialog();
                },
                error: (err) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Failed to add candidate. Please try again.',
                    });
                    console.error(err);
                },
            });
        }
    }
  editCandidate(candidate: Candidate) {
    this.candidate = { ...candidate };
    this.editMode = true;
    this.candidateDialog = true;
  }

  deleteCandidate(candidate: Candidate) {
      this.deleteCandidateDialog = true;
      this.candidate = { ...candidate };
  }
  confirmDelete() {
    this.deleteCandidateDialog = false;
    this.candidateService.removeCandidate(this.candidate.id).subscribe({
        next: (data) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Candidate Deleted',
                life: 3000
            });
            this.fetchCandidates();
        },
        error: (err) => {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Failed to delete candidate. Please try again.',
            });
            console.error(err);
        }
    });

  // this.candidates = this.candidates.filter(c => c.id !== this.candidate.id);
  this.initializeCandidate();
}
  deleteSelectedProducts() {
        this.deleteCandidatesDialog = true;
  }
  confirmDeleteSelected() {
      this.deleteCandidatesDialog = false;
      for(let c of this.selectedCandidates) {
          this.candidateService.removeCandidate(c.id).subscribe({
              next: (data) => {
                  this.messageService.add({
                      severity: 'success',
                      summary: 'Successful',
                      detail: 'Candidates Deleted',
                      life: 3000
                  });
              },
              error: (err) => {
                  this.messageService.add({
                      severity: 'error',
                      summary: 'Error',
                      detail: 'Failed to delete candidates. Please try again.',
                  });
                  console.error(err);
              }
          });
      }
      this.candidates = this.candidates.filter(val => !this.selectedCandidates.includes(val));
      this.selectedCandidates = [];
  }

    getSeverity(status: Status) {
        switch (status) {
            case 'ACCEPTED':
                return 'success';
            case 'PENDING':
                return 'info';
            case 'REJECTED':
                return 'danger';
            default:
                return "warning";
        }
    }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
