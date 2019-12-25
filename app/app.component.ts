import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  emailFormArray: Array<any> = [];
  Cars = [ 
    {email:"email1", id: 1},
    {email:"email2", id: 2},
    {email:"email3", id: 3},
    {email:"email4", id: 4}
  ];

  onChange(email:string, isChecked: boolean) {
      if(isChecked) {
        this.emailFormArray.push(email);
      } else {
        let index = this.emailFormArray.indexOf(email);
        this.emailFormArray.splice(index,1);
      }
  }

  duplicate() {
    console.log(this.emailFormArray);
  }
}
