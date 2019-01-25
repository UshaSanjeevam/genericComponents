import { Component, OnInit, AfterViewInit ,ViewChild} from '@angular/core';
import { HtmlViewModel } from 'src/app/ViewModels/htmlViewModel';
import { HtmlGenerationComponent } from 'src/app/htmlGeneration/html-generation/html-generation.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit,AfterViewInit {
griddata:any[]=[];
html=false;
  @ViewChild(HtmlGenerationComponent) child;
  count:number=10;
htmlviewModel:HtmlViewModel[];
htmlviewModelHeader:string[]=[
  'Event','Type','EstDateTime'];
  constructor() { }

  ngOnInit() {
    this.griddata = this.child.gridData;
  }
  onChange(oldValue) 
   {  
     this.griddata.push(this.count);
     this.htmlviewModel=this.griddata;
    }
   ngAfterViewInit() {
   // this.griddata = this.child.gridData;
  // let evilResponseProps = Object.keys(evilResponse); 
  }
}
