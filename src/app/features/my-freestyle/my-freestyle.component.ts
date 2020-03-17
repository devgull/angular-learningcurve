import { OnInit, Component, ViewChild, Injector, AfterViewInit, ElementRef, TemplateRef } from "@angular/core";

@Component({
    selector: 'my-freestyle',
    templateUrl: 'my-freestyle.component.html',
    styleUrls: ['my-freestyle.component.scss']
})

export class MyFreestyleComponent{
  private qrValue: string;

  ngOnInit() {
        this.qrValue = "QR Code";
    }

}