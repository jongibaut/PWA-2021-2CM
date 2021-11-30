import { Injectable } from "@angular/core";
import { Router, CanLoad } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanLoad {
    constructor(private router: Router) { }
    canLoad(): boolean {
        let status = false;
        localStorage.getItem('JWT') ? status = true : this.router.navigate(['login']);
        return status;
    }
}