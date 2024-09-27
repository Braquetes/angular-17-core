import { Component, OnInit } from '@angular/core';
import { MaterialComponentsModule } from '../../shared/material/material-components.module';
import { AuthService } from '../../auth/core/providers/auth.service';

interface UserProfile {
  firstName: string;
  lastNamePaterno: string;
  lastNameMaterno: string;
  fullName: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MaterialComponentsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  user : UserProfile = {
    firstName: '',
    lastNamePaterno: '',
    lastNameMaterno: '',
    fullName: '',
    username: '',
    email: '',
  };

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.user.firstName = this.authService.USUARIO.persona.nombres;
    this.user.lastNamePaterno = this.authService.USUARIO.persona.apellido_paterno;
    this.user.lastNameMaterno = this.authService.USUARIO.persona.apellido_materno;
    this.user.email = this.authService.USUARIO.email;
    this.user.username = this.authService.USUARIO.usuario;
    // this.user.userType = this.authService.USUARIO.tipo.nombre;
  }


}
