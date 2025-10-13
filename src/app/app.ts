import { Component, OnInit } from '@angular/core';
import { AirtableService } from './services/airtable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  airtableData: any;

  constructor(private airtableService: AirtableService) {}

  ngOnInit(): void {
    this.airtableService.getData().subscribe({
      next: (data) => this.airtableData = data,
      error: (err) => console.error('Erreur API:', err)
    });
  }
}
