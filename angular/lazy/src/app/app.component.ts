import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy';
  showHeader: boolean = true;
  showFooter: boolean = true;
  subscriptions: Subscription;
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.subscriptions = router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let showHeader = true;
        let showFooter = true;
        // const { showHeader, showFooter } = activatedRoute.firstChild.snapshot.data;
        this.showFooter = showFooter;
        this.showHeader = showHeader;
      }
    })
  }
}
