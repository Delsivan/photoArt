import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'pa-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    filter: string = '';
    
    debounce: Subject<string> = new Subject<string>();
    
    ngOnInit(): void {
        
        this.debounce
        .pipe(debounceTime(300))
        
    }
    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

    onKeyUp(target : any) {
        if(target instanceof EventTarget) {
          var elemento = target as HTMLInputElement;
          this.filter = elemento.value;
        }
      }
    
}