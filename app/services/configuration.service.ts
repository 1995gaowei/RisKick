import { Injectable } from '@angular/core';

const BACKEND_URL = 'localhost:8080/SRM-api/';

@Injectable()
export class ConfigurationService {

    getBackendURL() {
        return BACKEND_URL;
    }

}