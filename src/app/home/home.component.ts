import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  template: `
    <section>
    <div class="form-group">
        <p>You select a field to search for properties</p>
          <select #feature (change)="onSelected()">
            <option default>Pick a field</option>
            <option>City</option>	
            <option>Name</option>
            <option>State</option>
          </select>
        </div>
        
     <form>
    <div class="form-group">
      <input type="text" class= "form-control" placeholder="Search on {{selectedFeature}}" #filter>
      </div>

      <div class="form-group">
      <button class="primary" type="button" (click) = "filterResults(filter.value)">Search</button>
      </div>
      
    </form>
  </section>
    <section class="results">
    <app-housing-location *ngFor="let housingLocation of filteredLocationList"  [housingLocation]="housingLocation"> </app-housing-location>
    </section>
  
    `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';


  housingLocationList: HousingLocation[] = [];

  filteredLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  @ViewChild('feature') feature!: ElementRef;
	
  selectedFeature = '';

	onSelected():void {
		this.selectedFeature = this.feature.nativeElement.value;
	}

  constructor() {

    this.housingLocationList = this.housingService.getAllHousingLocations();

    this.filteredLocationList = this.housingLocationList;

    console.log(this.housingLocationList);

  }

  filterResults(text: string) {

    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    if(  this.selectedFeature != '' && this.selectedFeature=='Name') {

      this.filteredLocationList = this.housingLocationList.
      filter(hl => hl?.name.toLowerCase().
        includes(text.toLowerCase()));

    }else 
    if(this.selectedFeature !='' && this.selectedFeature=='State'){

      this.filteredLocationList = this.housingLocationList.
      filter(hl => hl?.state.toLowerCase().
        includes(text.toLowerCase()));

    }else
    if(this.selectedFeature != '' && this.selectedFeature=='city') {

      this.filteredLocationList = this.housingLocationList.
      filter(hl => hl?.city.toLowerCase().
        includes(text.toLowerCase()));

    }
    

  }

}
