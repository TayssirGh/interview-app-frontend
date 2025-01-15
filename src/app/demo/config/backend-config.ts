import {Injectable} from '@angular/core';

@Injectable()
export class BackendServiceConfig {
    public endPointUrl: string = "http://localhost:8080";
    public token: string = undefined;

}
