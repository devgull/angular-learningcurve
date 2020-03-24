import { OnInit, TemplateRef, Injector } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Guid } from "guid-typescript";

export class BaseComponent {

    modalRefs: any[] = [];
    modalService: MatDialog;

    modalConfig = {
        width: '80vh',
        panelClass: 'my-centered-dialog'
    };

    constructor(protected injector: Injector) {
        this.modalService = this.injector.get(MatDialog);
    }

    openModal(template: TemplateRef<any>, config?: any, afterClosed?: (value: any)=> void) {
        let open = this.modalService.open(template, config || this.modalConfig);        
        open.afterClosed().subscribe(afterClosed);        
        this.modalRefs.push(open);
    }

    closeModal(value?: any) {
        const modal = this.modalRefs.pop();
        if (modal !== undefined) {
            modal.close(value);
        }
    }

    closeAllModals() {
        while (this.modalRefs.length > 0) {
            const modal = this.modalRefs.pop();
            modal.close();
        }
    }

    public cleanGuid(uid: Guid){
        return uid.toString().split("-").join("");
    }
}
