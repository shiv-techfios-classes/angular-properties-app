import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  
  title = 'Homes App';

  
/**
 
  private apiURL = "https://api.github.com/";
 
  public message: string = "Uninitialized";
  public response:any;

  constructor(private httpClient: HttpClient) {}
 */
  /**
  async fetchData() {
    console.log('clicked');
    this.message = "Fetching..";
    this.response = "";
    this.response = await this.httpClient
      .get<any>(this.apiURL)
      .pipe(delay(1000))
      .toPromise();
    this.message = "Fetched";
  }


 */


}
