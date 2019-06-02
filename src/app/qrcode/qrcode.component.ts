import { Component, VERSION, OnInit, ViewChild, ViewEncapsulation, NgZone } from "@angular/core";

import { ZXingScannerComponent } from "@zxing/ngx-scanner";

import { Result } from "@zxing/library";
import { MatSelectChange } from "@angular/material/select";

import { ModalDirective } from "angular-bootstrap-md";
import { SchnitzelService } from './schnitzel.service';

@Component({
  selector: "app-qrcode",
  templateUrl: "./qrcode.component.html",
  styleUrls: ["./qrcode.component.scss"],
})
export class QrcodeComponent implements OnInit {
  @ViewChild("scanner")
  scanner: ZXingScannerComponent;

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string = "Placeholder for QR CODE";
  qrResult: Result;
  

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;
  ngVersion = VERSION.full;
  @ViewChild("basicModal") basicModal: ModalDirective;
  @ViewChild("confirmationModal") confirmationModal: ModalDirective;
  constructor(private schnitzelService : SchnitzelService) {}

  onClose(event: any) {
    this.closeScanner();
  }

  closeScanner() {
    this.scanner.ngOnDestroy();
  }

  onOpen(event: any) {
    this.scanner.startScan(this.currentDevice);
  }

  ngOnInit(): void {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;

      //selects the devices's back camera by default
      for (const device of devices) {
        if (/back|rear|integrated|environment/gi.test(device.label)) {
          this.currentDevice = device;
          break;
        }
      }
    });

    this.scanner.hasDevices.subscribe((x: boolean) => (this.hasDevices = x));
    this.scanner.scanComplete.subscribe((x: Result) => (this.qrResult = x));
    this.scanner.permissionResponse.subscribe(
      (x: boolean) => (this.hasPermission = x)
    );
  }

  handleQrCodeResult(resultString: string) {
    this.schnitzelService.add(resultString);
    this.qrResultString = resultString;
    this.closeScanner();
    this.basicModal.toggle();
    this.confirmationModal.toggle();
  }

  onDeviceSelectChange(selected: MatSelectChange) {
    const device = this.availableDevices.find(
      x => x.deviceId === selected.value
    );
    if (device === undefined || device == null) {
      this.scanner.ngOnDestroy();
    } else {
      this.currentDevice = device;
    }
  }
}
