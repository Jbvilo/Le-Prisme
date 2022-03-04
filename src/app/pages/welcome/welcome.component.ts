import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      alert("Site en cours de développement, mais vous pouvez effectuer vos demandes")
      this.router.navigate(['home'])
    }, 4500);
  }

}
