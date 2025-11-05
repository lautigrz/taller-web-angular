import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks',
  imports: [],
  templateUrl: './thanks.html',
  styleUrl: './thanks.css'
})
export class Thanks {

  constructor(private router: Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);

  }
}
