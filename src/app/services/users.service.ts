import { Http } from '@angular/http';
import { ApiEndpoints } from './../../assets/ApiEndpoints';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';

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
        return this.http.get(ApiEndpoints.usersUrl).pipe(
            map(response => response.json())
        );
    }

    getUserById(id){
        return this.http.get(ApiEndpoints.usersUrl + id).pipe(
            map(respose => respose.json())
        );
    }

    postUser(user){
        return this.http.post(ApiEndpoints.usersUrl, user)
            .pipe(
                map(response => response.json())
            );
    }

    updateUser(id, data){
        return this.http.put(ApiEndpoints.usersUrl + id, data)
            .pipe(
                map(response => response.json())
            );
    }

    removeUser(id){
        return this.http.delete(ApiEndpoints.usersUrl + id)
            .pipe(
                map(response => response.json())
            );
    }
}