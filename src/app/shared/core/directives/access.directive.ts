import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../../auth/core/providers/auth.service';

@Directive({
  selector: '[appAccess]',
  standalone: true
})
export class AccessDirective {
  @Input({ required: true }) set appAccess(route: any) {
    const modulos = this.authService.USUARIO.modulos;

    console.log('Modules:', modulos);
    console.log('Route Info:', route);

    const hasModule = modulos.some(modulo => modulo.name === route.modulo);

    if (hasModule) {
      const modulo = modulos.find(modulo => modulo.name === route.modulo);

      console.log('Module Access:', hasModule, modulo);

      if (hasModule) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService,
  ) {}
}
