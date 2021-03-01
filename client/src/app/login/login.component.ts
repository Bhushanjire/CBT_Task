import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
  constructor(
    private __router: Router,
    private __toast: ToastService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.loginForm.value.username == 'bhushanjire@gmail.com' && this.loginForm.value.password == 'bhushan@123') {
        this.__router.navigateByUrl('/student');
        this.__toast.showSuccess('Login Successfull')
      } else {
        this.__toast.showError('Please enter valid credentials...')

      }
    }

  }

}
