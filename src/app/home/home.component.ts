import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }
  onClick(event : Event){
    console.log("HELLO");
    this.snackBar.open("HELLO");
  }

}
