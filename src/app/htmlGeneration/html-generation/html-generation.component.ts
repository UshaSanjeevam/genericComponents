import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-html-generation',
  templateUrl: './html-generation.component.html',
  styleUrls: ['./html-generation.component.scss']
})
export class HtmlGenerationComponent implements OnInit {
@Input() parentValue: number;
public gridData: any[] = sampleData;
value : any[];
  constructor() { }

  ngOnInit() {
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
}, {
  'Event': 'Booked',
  'Type': 'Standard',
  'EstDateTime': '2 Nov 18 00:18	',
  'ActDateTime': '17 Oct 18 10:28	',
  'Location': 'Manchester-Ringway Airport',
  'Country': 'U.K',
  'EventNotes': 'pieces: 20 pack type: CART'
}, {
  'Event': 'Received',
  'Type': 'Standard',
  'EstDateTime': '2 Nov 18 00:18	',
  'ActDateTime': '17 Oct 18 10:28	',
  'Location': 'Berlin',
  'Country': 'Spain',
  'EventNotes': 'pieces: 20 pack type: CART'
}, {
  'Event': 'Physical Receipt Of Goods-Breakdown',
  'Type': 'Breakdown',
  'EstDateTime': '2 Nov 18 00:18	',
  'ActDateTime': '17 Oct 18 10:28	',
  'Location': 'Berlin',
  'Country': 'Tokyo',
  'EventNotes': 'pieces: 20 pack type: CART'
}];
