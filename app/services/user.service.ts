import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { User } from '../vo/user';

@Injectable()
export class UserService {
    private currentUser = new User('wei', '123', '', '');

    constructor(private http: Http) { }

    signIn(user: User): Observable<User> {
        const url = 'app/signIn';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getCurrentUser(): User {
        return this.currentUser;
    }

    setCurrentUser(user: User): void {
        this.currentUser = user;
    }
}