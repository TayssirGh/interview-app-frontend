import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ParserInput} from "../../../model/ParserInput";
import {Observable} from "rxjs";
import {Candidate} from "../../../model/Candidate";

@Injectable({
    providedIn: 'root'
})
export class ParserService {
    private baseUrl = 'http://localhost:8080/parser';
    constructor(private http: HttpClient) { }
    sendParsedEmail(input: ParserInput): Observable<Candidate[]> {
        const url = `${this.baseUrl}/send-parsed-email`;
        return this.http.post<Candidate[]>(url, input, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        });
    }

}
