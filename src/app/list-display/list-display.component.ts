import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {
  
  
  url5:string="http://localhost:8080/list";
  
  constructor(private http: HttpClient,private router: Router) { }
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  public list_values: Array<any>=[];//angular 陣列物件

  ngOnInit() {
   this.showlist()
  }
  goform(i){
    alert(i);
    this.router.navigate(['form', { patchid: i }]);

  }
  
  //模擬當使用者登入時，會顯示使用者填寫過的表單
  showlist(){
    
    this.http.get(this.url5, {observe: 'response', responseType: 'text'})
    .subscribe((res) => {
      
      const list_obj=JSON.parse(res.body)//轉換成json物件
      this.list_values=list_obj;//儲存進陣列物件，為了html給ngFor讀取用
      console.log( this.list_values);
     

     
    }); 

    
    
  }
  
  
}