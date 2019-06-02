import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "vredenOnline";
  constructor(private snackBar: MatSnackBar, private swUpdate: SwUpdate) {}
  ngOnInit() {
    this.swUpdate.available.subscribe(u => {
      // Update wurde entdeckt
      if (confirm("New version available. Load New Version?")) {
        // Update herunterladen
        this.swUpdate.activateUpdate().then(e => {
          window.location.reload();
        });
      }
    });

    // Auf Updates prüfen
    this.swUpdate.checkForUpdate();
  }
}
