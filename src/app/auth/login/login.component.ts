import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/providers/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { NgIf } from '@angular/common';
import { MaterialComponentsModule } from '../../shared/material/material-components.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialComponentsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public loginForm: FormGroup;
  public error: boolean;
  public message: string | undefined;

  public hide: boolean;

  private email: string;
  private token: Promise<string> | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.hide = true;
    this.error = false;
    this.message = "";

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

    this.email = "";
    this.token = new Promise((resolve, reject) => {
      return "";
    });
  }

  public changeHide(event: Event) {
    event.preventDefault();
    this.hide = !this.hide;
  }

  public redirecTo(): void {
    this.router.navigate(['prep']);
  }

  public async login(): Promise<void> {
    if (this.loginForm.invalid) { return; }

    await this.authService.getEmail({ usuario: this.loginForm.value.username }).then((response) => {
      if (response.status === 200) {
        this.email = response.email ? response.email : '';
        this.error = false;
      }
      else if (response.status === 404) {
        this.error = true;
        this.message = response.message
      }
      else {
        this.error = true;
        this.message = response.message
      }
    })

    if (!this.error) {
      await this.authService.signWithEmailAndPassword(this.email, this.loginForm.value.password).then((response) => {
        if (response.status === 200) {
          this.token = response.token
          localStorage?.setItem(environment.LOCAL_STORAGE, JSON.stringify(this.token))
          this.error = false
        }
        else if (response.status === 404) {
          this.error = true;
          this.message = response.message
        }
        else {
          this.error = true;
          this.message = response.message
        }
      })

      await this.authService.validateToken().then((response: any) => {
        if (response.status === 200) {
          this.error = false;
        }
        else if (response.status === 404) {
          this.error = true;
          this.message = response.message
        }
        else {
          this.error = true;
          this.message = response.message
        }
      });
      if (!this.error) {
        this.router.navigate(['/testo']);
      }
    }
  }

}