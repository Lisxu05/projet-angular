import { Component, OnInit } from '@angular/core';
import { AirtableService } from './services/airtable.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private airtableData: any;

  public constructor(
    private airtableService: AirtableService
  ) {}

  public ngOnInit(): void {
    this.airtableService.getData()
    .pipe(
      tap((data) => {
        console.log('Données récupérées:', data);
        this.airtableData = data;
      })
    )
    .subscribe();
  }
}


// import { Component } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `<h1>Bienvenue sur mon portfolio Angular !</h1>`,
// })
// export class AppComponent {}
