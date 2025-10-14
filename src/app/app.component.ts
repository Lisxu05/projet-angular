import { Component, OnInit } from '@angular/core';
import { AirtableService } from './services/airtable.service';
import { tap } from 'rxjs';

type AirtableRecord = {
  nom: string,
  email: string,
  message: string,
  entreprise: string,
  prenom: string
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  public airtableData: AirtableRecord[] = [];

  public constructor(
    private airtableService: AirtableService
  ) { }

  public ngOnInit(): void {
    this.airtableService.getData()
      .pipe(
        tap((data) => {
          console.log('Données récupérées:', data.data);
          this.airtableData = data.data;
          console.log(this.airtableData);
          console.log(this.airtableData.at(0)?.nom);
        })
      )
      .subscribe();

      
  }
}

