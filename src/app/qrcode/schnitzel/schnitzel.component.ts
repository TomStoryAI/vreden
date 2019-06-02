import { Component, OnInit, Input } from "@angular/core";
import { SchnitzelService } from "../schnitzel.service";

@Component({
  selector: "app-schnitzel",
  templateUrl: "./schnitzel.component.html",
  styleUrls: ["./schnitzel.component.scss"]
})
export class SchnitzelComponent implements OnInit {
  @Input() public imageSrcPath: string;
  @Input() public text: string;
  @Input() public qrKeyWord: string;
  constructor(public schnitzelService: SchnitzelService) {}

  ngOnInit() {}
}
