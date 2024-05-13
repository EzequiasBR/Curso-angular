import { AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit
,OnChanges,
OnDestroy,
AfterContentChecked,
AfterContentInit,
DoCheck,
AfterViewInit
,AfterViewChecked {

  @Input() valorInicial: number = 10;
  
  constructor() {
     this.log("constructor");
  }

  ngAfterViewChecked(): void{
    this.log('AfterViewChecked');
  }

  ngAfterViewInit(): void{
    this.log('AfterViewInit');
  }

  ngAfterContentChecked(): void{
    this.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void{
    this.log('ngAfterContentInit');
  }

  ngOnChanges(): void {
    this.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  private log(hook: string){
     console.log(hook);
  }

}
