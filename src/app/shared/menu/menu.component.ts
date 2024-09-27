import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { StyleManager } from '../../themes/style-manager.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/core/providers/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MaterialComponentsModule } from '../material/material-components.module';
import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { AccessDirective } from '../core/directives/access.directive';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [RouterOutlet, MaterialComponentsModule, NgFor, NgIf, RouterLink, AccessDirective, NgClass, JsonPipe],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

	@Input() routes: any;

	private firstName: string = "";
	private firstLastName: string = "";
	private secondLastName: string = "";

	public fullName: string = "";
	public initialsLetters: string = "";
	public rol: string = "";
	public primaryColor: string = "";
	public secondaryColor: string = "";
	public profileStatus: boolean = false;
	
	public image: string = "assets/img/plataforma.png";

	public menu: any[] = [
		{
			name: 'INICIO',
			icon: 'home',
			route: './welcome'
		},
	];

	expandedPanel: any = null;

	constructor(
		public styleManager: StyleManager,
		private router: Router,
		private authService: AuthService,
	) {
		this.setInfoUser();		
	}

	@ViewChild(MatSidenav) sidenav!: MatSidenav;
	@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

	ngOnInit(): void {
		this.styleManager.dark = localStorage.getItem('theme') == null || localStorage.getItem('theme') == 'dark';
		this.styleManager.toggleDarkTheme(this.styleManager.dark);
		this.getInitialsColor(this.fullName);
		this.getContrastColor(this.primaryColor);
		this.toggleImage();
		console.log(this.routes);
	}

	private setInfoUser(): void {
		this.firstName = this.authService.USUARIO.persona.nombres;
		this.firstLastName = this.authService.USUARIO.persona.apellido_paterno;
		this.secondLastName = this.authService.USUARIO.persona.apellido_materno;
		// this.rol = this.authService.USUARIO.tipo.nombre;

		this.fullName = this.firstName + ' ' + this.firstLastName + ' ' + this.secondLastName;
		this.initialsLetters = this.firstName.charAt(0) + this.firstLastName.charAt(0);

		this.primaryColor = '';
		this.secondaryColor = '';
		this.profileStatus = false;
	}

	public salir(): void {
		localStorage.clear();
		this.router.navigateByUrl('/auth');
	}

	public toggleDarkTheme(): void {
		this.styleManager.dark = !this.styleManager.dark;
		localStorage.setItem('theme', this.styleManager.dark ? 'dark' : 'light');
		this.styleManager.toggleDarkTheme(this.styleManager.dark);
		this.toggleImage();
	}

	private toggleImage(): void {
		console.log(this.styleManager.dark);
		this.image = this.styleManager.dark ? "assets/img/plataformaW.png" : "assets/img/plataformaD.png";
	}


	public changeStatusElement(): void {
		this.profileStatus = !this.profileStatus;
	}

	public signOut(): void {
		this.authService.signOut();
	}

	private getInitialsColor(fullName: string): void {
		const words = fullName.split(' ');
		const initials = words.map(word => word.charAt(0)).join('');

		let hash = 0;
		for (let i = 0; i < initials.length; i++) {
			hash = initials.charCodeAt(i) + ((hash << 4) - hash);
		}

		let color = '#';
		for (let j = 0; j < 3; j++) {
			const value = (hash >> (j * 8)) & 0xFF;
			color += ('00' + value.toString(16)).substr(-2);
		}

		this.primaryColor = color;
	}

	private getContrastColor(hexColor: string): void {
		const hex = hexColor.replace('#', '');
		const r = parseInt(hex.substr(0, 2), 16);
		const g = parseInt(hex.substr(2, 2), 16);
		const b = parseInt(hex.substr(4, 2), 16);

		const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

		this.secondaryColor = luminance > 0.5 ? '#000000' : '#FFFFFF';
	}

	public onClick(): void {
		this.profileStatus = false;
	}

	public settings(): void {
		console.log('settings');
		this.router.navigateByUrl('/testo/profile');
	}

	onAccordionChange(panel: any) {
		if (this.expandedPanel === panel) {
		  this.expandedPanel = null; // Cierra el panel si ya está abierto
		} else {
		  this.expandedPanel = panel; // Abre el panel y cierra los demás
		}
	  }

}
