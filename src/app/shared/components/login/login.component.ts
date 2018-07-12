import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConfiguration } from './../../../shared/services/app-config.service';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginData: any = [];
  constructor(private _fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appConfiguration: AppConfiguration,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      Username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    if(this.appConfiguration.login['username'] === this.loginData.username && this.appConfiguration.login['password'] === this.loginData.password){
      this.router.navigate(['/dashboard']);
    } else{
      this.toastr.error('Login Failed');
    }
  }
}
