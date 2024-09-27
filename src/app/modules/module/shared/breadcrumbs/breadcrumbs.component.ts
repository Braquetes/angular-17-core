import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent implements OnInit {
  @Input() navItems: any[] = [];
  options : any;

  ngOnInit(): void {
    this.options = this.formatMenuPaths(this.navItems);
    console.log(this.options);
  }

  formatMenuPaths(menu: Array<{ path: string, parameters: any }>): Array<{ path: string, parameters: any, originalPath: string }> {
    return menu.map(item => {
      const formattedPath = item.path.split('-').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
  
      return {
        ...item,
        path: formattedPath,
        originalPath: item.path
      };
    });
  }

}
