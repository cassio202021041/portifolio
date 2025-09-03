import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/dashboard']); // Redireciona ao dashboard
        } else {
          this.errorMessage = 'Usuário ou senha inválidos';
        }
      }
    );
  }
}
