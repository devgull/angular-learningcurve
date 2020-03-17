import { OnInit, Component, ViewChild, Injector, AfterViewInit, ElementRef, TemplateRef } from "@angular/core";

@Component({
    selector: 'my-freestyle',
    templateUrl: 'my-freestyle.component.html',
    styleUrls: ['my-freestyle.component.scss']
})

export class MyFreestyleComponent{
  private qrValue: string;

  ngOnInit() {
        this.qrValue = "WIFI:T:WPA2;S:BENETON;P:xt0x0tex;;";
    }

  private downloadQRCode() {

        let base64String: string = document.getElementsByTagName("qr-code")[0].getElementsByTagName('img')[0].src.split(',')[1];
        const blobData = this.convertBase64ToBlobData(base64String);
        const filename: string = "qrcode.png";
        if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
            window.navigator.msSaveOrOpenBlob(blobData, filename);
        } else { // chrome
            const blob = new Blob([blobData], { type: 'image/png' });
            const url = window.URL.createObjectURL(blob);
            // window.open(url);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.click();
        }
    }

    convertBase64ToBlobData(base64Data: string, contentType: string = 'image/png', sliceSize = 512) {
        const byteCharacters = atob(base64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

}