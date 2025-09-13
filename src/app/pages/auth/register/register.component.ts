import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);

  loading = false;
  serverMessage: string | null = null;
  hidePassword = true;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
  });

  submit() {
    if (this.form.invalid || this.loading) return;
    this.loading = true;
    this.serverMessage = null;
    this.auth.register(this.form.value as any).subscribe({
      next: (res) => {
        this.serverMessage = res?.message ?? 'Registration submitted successfully.';
        this.loading = false;
        this.form.reset();
      },
      error: (err) => {
        this.serverMessage = err?.error?.message ?? 'Registration failed.';
        this.loading = false;
      }
    });
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }
}


