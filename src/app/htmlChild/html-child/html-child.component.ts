import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-html-child',
  templateUrl: './html-child.component.html',
  styleUrls: ['./html-child.component.scss']
})
export class HtmlChildComponent implements OnInit {
@Input() data:any[]=[];
@Input() viewModel:any[]=[];

  constructor() { }

  ngOnInit() {
  }

}
