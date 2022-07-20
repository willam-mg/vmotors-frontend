import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  user: User;
  form: FormGroup;
  submitted: boolean;
  constructor(private http: HttpService) {
    this.user = new User();
    this.submitted = false;

    this.form = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.maxLength(50)
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
      ]),
      password_confirmation: new FormControl(this.user.password_confirmation, [
        Validators.required
      ]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.invalid) {
      throw new Error('Entrada de datos invalido');
    }
    this.submitted = true;
    this.http.postLibros(this.form.value).subscribe((data) => {
      console.log(data);
      this.form.reset();
      this.submitted = false;
    });
  }

}
