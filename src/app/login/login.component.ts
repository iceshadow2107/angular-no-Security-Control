import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  /*
  formGroup: FormGroup;
  get usernameControl(): FormControl {
    return this.formGroup.get('username') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }
*/
  ngOnInit() {
  }
  login(): void {
   
  }
  
}