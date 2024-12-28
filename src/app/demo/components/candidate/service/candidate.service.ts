import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Candidate} from "../../../model/Candidate";

@Injectable({
    providedIn: 'root'
})
export class CandidateService {
    private baseUrl = 'http://localhost:8080/candidate';
    constructor(private http: HttpClient) { }
    addCandidate(candidate: Candidate): Observable<Candidate> {
        return this.http.post<Candidate>(`${this.baseUrl}/add-candidate`, candidate);
    }
    findCandidates(): Observable<Candidate[]> {
        return this.http.get<Candidate[]>(`${this.baseUrl}/find-candidates`);
    }
    removeCandidate(id: number): Observable<string> {
        return this.http.delete<string>(`${this.baseUrl}/delete/${id}`);
    }

}
