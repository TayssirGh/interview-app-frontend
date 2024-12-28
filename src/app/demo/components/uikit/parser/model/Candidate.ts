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
    status: string;
    createdAt: Date;
}
