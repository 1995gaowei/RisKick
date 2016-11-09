import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

const RISK_TYPE = ['Management Risk', 'Quality Risk', 'Technical Risk', 'Legal Risk', 'Business Risk'];
const RISK_IMPACT = ['High', 'Medium', 'Low'];
const RISK_POSSIBILITY = ['High', 'Medium', 'Low'];

@Injectable()
export class RiskService {

    constructor(private http: Http) { }

    getRiskType() {
        return RISK_TYPE;
    }

    getRiskImapct() {
        return RISK_IMPACT;
    }

    getRiskPossibility() {
        return RISK_POSSIBILITY;
    }

}