import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contact = new FormGroup({
    firstName: new FormControl("",[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    eMail: new FormControl("",Validators.required),
    textArea: new FormControl("", [Validators.required, Validators.minLength(2)]),
  })

  constructor() { }
  ngOnInit(): void {
  }

submitForm() {
  if (this.contact.valid) {
     var a = this.contact.value;
  console.log(a);
  }
}
}
