import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchnitzelService {
  qrResultStringSet: Set<string> = new Set<string>();

  constructor() { }

  add(string : string){
    this.qrResultStringSet.add(string);
  }

  
  get(){
    return this.qrResultStringSet;
  }
}
