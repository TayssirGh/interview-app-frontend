import {Status} from "./Status";

export interface Candidate {
    id: string;
    interviewId: string;
    name: string;
    email: string;
    appliedPosition: string;
    skills: string[];
    interviewScore: number;
    responseTime: number;
    feedback: string;
    rating: number;
    status: Status;
    createdAt: Date;
}
