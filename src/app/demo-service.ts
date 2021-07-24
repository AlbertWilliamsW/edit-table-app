import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DemoService {

  datas: any = [];
  constructor(private http: HttpClient) {  }
  
  getDatas(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts')
               .pipe(tap(resp=>{
                  this.datas = resp;
               }));
   }

  receiveData() {
    return this.datas;
  }
}
