import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  @Input() showMenu: boolean = false;
  public user: string = localStorage.getItem('currentUser');
  ngOnInit() {
    if (this.user !== null) {
      this.showMenu = true;
    }
  }
}
