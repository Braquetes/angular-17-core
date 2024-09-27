import { Injectable } from '@angular/core';
import { HttpService } from '../../../../providers/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService extends HttpService {

  constructor(http: HttpClient) { 
    super(http, 'products');
  }
  
}
