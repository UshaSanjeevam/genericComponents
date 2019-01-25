import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { HtmlViewModel } from 'src/app/ViewModels/htmlViewModel';
import { HtmlGenerationServiceService } from 'src/app/Services/html-generation-service.service';
import { customerViewModel } from 'src/app/ViewModels/customerViewModel';

@Component({
  selector: 'app-html-parent',
  templateUrl: './html-parent.component.html',
  styleUrls: ['./html-parent.component.scss']
  
})
export class HtmlParentComponent implements OnInit {
  public gridData: any[];
 // public gridData: any[]=sampleData ;
  model:customerViewModel;
  count:number=10;
  //Web API HTML Generation
  viewModel:any[]=['customerID','companyName','contactName','contactTitle','address','city',
'region','postalCode','country','phone','fax'];
//Static data HTML Generation
  // viewModel:any[]=[
  //   'Event','Type','EstDateTime','ActDateTime','Location','Country','EventNotes','Counts'];
  constructor( private service:HtmlGenerationServiceService) { }

  ngOnInit() {

    this.getGridData();
  }
  getGridData() {
    this.service.getWriterWithFavBooks().subscribe(
        data => { 
          this.gridData = data;
      }
        );
  } 
  

}
export const sampleData = [{
  'Event': 'Booked',
  'Type': 'Standard',
  'EstDateTime': '2 Nov 18 00:18	',
  'ActDateTime': '17 Oct 18 10:28	',
  'Location': 'Berlin',
  'Country': 'Southy Arabia',
  'EventNotes': 'pieces: 20 pack type: CART'

  }]
