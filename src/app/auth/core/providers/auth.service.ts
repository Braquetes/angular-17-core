import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { GetUserStatus } from '../models/UserStatus';
import { environment } from '../../../../environments/environment';
import { UserInfo } from '../models/user';


@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public USUARIO: UserInfo = {
		email: "",
		usuario: "",
		persona: {
			nombres: "",
			apellido_paterno: "",
			apellido_materno: "",
		},
		modulos: [
			{
				name: "",
				tipo_usuario: "",
				permisos: []
			},
		],
	};

	constructor(
		private afs : AngularFireAuth,
		private http: HttpClient,
		private router: Router
	) { }

	public signOut() {
		localStorage.clear();
		this.afs.signOut();
		this.router.navigate(['/auth/login']);
	}

	public async signWithEmailAndPassword(email: string, password: string) : Promise<GetUserStatus>  {
		try {
			return await this.afs.signInWithEmailAndPassword(email, password).then((data : any) => {
				return {
					status: 200,
					token: data?.user?.multiFactor?.user?.accessToken,
				}
			}).catch((error) => {
				console.error(error.code)

				if(error.code === 'auth/invalid-login-credentials')
					return {
						status: 404,
						message: "Credenciales incorrectas. Asegure que los datos con correctos"
					};
				else 
					return {
						status: 500,
						message: "Ocurrio un error inesperado. Intente mas tarde."
					};
			})
		}
		catch (e) {
			return {
				status: 500,
				message: "Ocurrio un error inesperado. Intente mas tarde."
			};
		}
	}

	private createUser (email : string) {
		const password : string = 'm0r3n4'; 
		this.afs.createUserWithEmailAndPassword(email, password).then((response) => {
			const data = response;
		}).catch((error) => {
			console.error(error)
		})
	}

	public getEmail(login: {usuario: string}) : Promise<GetUserStatus> {		
		return firstValueFrom(this.http.get(environment.authenticate + '/usuarios/' + login.usuario)).then((data : any) => {
			if(data.data) return {
					email: data.data.email,
					status: data.status
				}
			else return {
					status: 404,
					message: "Credenciales incorrectas. Asegure que los datos con correctos"
				}
		}).catch((error) => {
			return {
				status: 500,
				message: error.error.message
			}
		});
	}

	public validateToken() {
		let headers = new HttpHeaders({
			'Authorization': `bearer ${this.getToken()}`
		});

		return firstValueFrom(this.http.get(environment.authenticate + '/permisos', { headers })).then((data : any) => {
			const userInfo : UserInfo = data.data;
			this.USUARIO = userInfo;
			return data;
		}).catch(() => {
			localStorage.clear();
			return this.router.navigate(['/auth/login']);
		});
	}

	private getToken(): any {
		const pretoken = localStorage.getItem(environment.LOCAL_STORAGE);
		if (pretoken) {
			return JSON.parse(pretoken);
		}
		return null;
	}
}
