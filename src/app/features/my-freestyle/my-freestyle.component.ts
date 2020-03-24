import { OnInit, Component, ViewChild, Injector, AfterViewInit, ElementRef, TemplateRef } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AccessLevel } from '@app/model/features/features.model';

@Component({
    selector: 'my-freestyle',
    templateUrl: 'my-freestyle.component.html',
    styleUrls: ['my-freestyle.component.scss']
})

export class MyFreestyleComponent{
  private qrValue: string;
  public currentAccessLevel: AccessLevel;

  @ViewChild('accessLevelModal',{ read: true, static:false })
  public accessLevelModal: TemplateRef<any>;

  accessLevelForm: FormGroup;

   get days(): FormArray {
        return this.accessLevelForm.get('days') as FormArray;
    };
   get stages(): FormArray {
        return this.accessLevelForm.get('stages') as FormArray;
    };

  ngOnInit() {
        this.qrValue = "WIFI:T:WPA;S:BENETON;P:xt0x0tex;;";
    }

    public createForm() {
        this.accessLevelForm = this.formBuilder.group(
            {
                id: 1,
                uid: this.registrationService.currentAccessLevel.uid,
                name: [this.registrationService.currentAccessLevel.name, Validators.required],
                days: this.formBuilder.array([]),
                stages: this.formBuilder.array([])
            }
        );

        const daysFGs = this.registrationService.days.map(n => {
            let obj = {}; obj[n.uid] = (this.currentAccessLevel.days.find(m => m.uid == n.uid) != null);
            return this.formBuilder.group(obj)
        });
        const dayFormArray = this.formBuilder.array(daysFGs);
        this.accessLevelForm.setControl('days', dayFormArray);

        const stageFGs = this.registrationService.stages.map(n => {
            let obj = {}; obj[n.uid] = (this.registrationService.currentAccessLevel.stages.find(m => m.uid == n.uid) != null);
            return this.formBuilder.group(obj)
        });
        const stageFormArray = this.formBuilder.array(stageFGs);
        this.accessLevelForm.setControl('stages', stageFormArray);
    }

    showAccessLevelModal(uid: string = null) {
        this.registrationService.setCurrentAccessLevel(uid);
        this.createForm();
        this.openModal(this.accessLevelModal);
    }

  openCustomModalView(){

  }

  //QR Code Start
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
  //QR Code End
}