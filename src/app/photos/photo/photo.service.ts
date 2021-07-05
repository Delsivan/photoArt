import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPhoto } from "src/app/models/IPhoto";


const API = 'http://localhost:3000';

@Injectable({
    providedIn: 'root',
  })

export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {

        return this.http
            .get<IPhoto[]>(API + '/' + userName + '/photos');
        
    }
}