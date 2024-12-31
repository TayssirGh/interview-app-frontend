// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import {Observable} from "rxjs";
// import {Candidate} from "../../../model/Candidate";

// @Injectable({
//     providedIn: 'root'
// })
// export class CandidateService {
//     private baseUrl = 'http://localhost:8080/candidate';
//     constructor(private http: HttpClient) { }
//     addCandidate(candidate: Candidate): Observable<Candidate> {
//         return this.http.post<Candidate>(`${this.baseUrl}/add-candidate`, candidate);
//     }
//     findCandidates(): Observable<Candidate[]> {
//         return this.http.get<Candidate[]>(`${this.baseUrl}/find-candidates`);
//     }
//     updateCandidate(candidate: Candidate): Observable<Candidate> {
//         return this.http.put<Candidate>(`${this.baseUrl}/update-candidate`, candidate);
//     }
//     removeCandidate(id: string): Observable<string> {
//         return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
//     }

// }
