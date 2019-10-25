import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();

   passData(){
     this.notify.emit("this is coming from child component")
   }
 
}
