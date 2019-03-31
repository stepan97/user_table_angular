import { USERS } from '../mock-data';
import { Http } from '@angular/http';
import { ApiEndpoints } from './../../assets/ApiEndpoints';
import { Injectable } from '@angular/core';
@Injectable()
export class UserService {

    constructor(private http: Http){}

    getColumns(){
        return [
            "id",
            "balance",
            "age",
            "name",
            "gender",
            "company",
            "email"
        ];
    }
    
    getUsers(){
        return this.http.get(ApiEndpoints.getUsersUrl);
    }
}