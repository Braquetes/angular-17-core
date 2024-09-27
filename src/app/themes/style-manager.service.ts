import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StyleManager {
	
	dark: any;

	toggleDarkTheme(isDark: boolean) {
		if (isDark) {
			this.removeStyle('light-theme');
			document.body.classList.remove('light-theme');
		} else {
			const href = 'light-theme.css';
			getLinkElementForKey('light-theme').setAttribute('href', href);
			document.body.classList.add('light-theme');
		}
	}

	removeStyle(key: string) {
		const existingLinkElement = getExistingLinkElementByKey(key);
		if (existingLinkElement) {
			document.head.removeChild(existingLinkElement);
		}
	}
}

function getLinkElementForKey(key: string) {
	return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
	return document.head.querySelector(
		`link[rel="stylesheet"].${getClassNameForKey(key)}`
	);
}

function createLinkElementWithKey(key: string) {
	const linkEl = document.createElement('link');
	linkEl.setAttribute('rel', 'stylesheet');
	linkEl.classList.add(getClassNameForKey(key));
	document.head.appendChild(linkEl);
	return linkEl;
}

function getClassNameForKey(key: string) {
	return `style-manager-${key}`;
}