import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  a:string='';
  b:string='';
  res:number=0;

  add()
  {
    this.res=parseInt(this.a)+parseInt(this.b);
    
  }
  sub()
  {
    this.res=parseInt(this.a)-parseInt(this.b)
   
  }
  div()
  {
    this.res=parseInt(this.a)/parseInt(this.b)
    
  }
  mul()
  {
    this.res=parseInt(this.a)*parseInt(this.b)
    
  }
  clr()
  {
    this.a='';
    this.b='';
    this.res=0;
  }

}