// import { Component, OnInit } from '@angular/core';
// import { AirtableService } from './services/airtable.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent implements OnInit {
//   airtableData: any;

//   constructor(private airtableService: AirtableService) {}

//   ngOnInit(): void {
//     this.airtableService.getData().subscribe({
//       next: (data) => this.airtableData = data,
//       error: (err) => console.error('Erreur API:', err)
//     });
//   }
// }


import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<h1>Bienvenue sur mon portfolio Angular !</h1>`,
})
export class AppComponent {}
