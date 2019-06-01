import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vredenOnline';
  constructor(private snackBar: MatSnackBar, private swUpdate: SwUpdate) {
  }
  ngOnInit() {

    this.swUpdate.available.subscribe(u => {
      // Update wurde entdeckt
 
      // Update herunterladen
      this.swUpdate.activateUpdate().then(e => {
        // Update wurde heruntergeladen
 
        const message = 'Application has been updated';
        const action = 'Ok, Reload!';
 
        // Benutzer auf Update hinweisen und Seite neu laden
        this.snackBar.open(message, action).onAction().subscribe(
          () => location.reload()
        );
      });
    });
 
    // Auf Updates prüfen
    this.swUpdate.checkForUpdate();      
}
}
