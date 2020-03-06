import { NgModule } from '@angular/core';
import { NgxWigModule } from 'ngx-wig';
import { NgxWigComponent, BUTTONS } from 'ngx-wig';
import { parse } from 'node-html-parser';

const MY_PLUGIN = {
  edithtml: {
    label: 'Remove HTML Tags',
    title: 'Remove HTML Tags',
    command: (ctx: NgxWigComponent) => {
      ctx.container.textContent = new NgxWigExModule().clearHtml(ctx.content);
      ctx.onContentChange(ctx.container.textContent);
    },
    styleClass: 'nw-button',
    icon: 'icon-custom'
  }
};


@NgModule({
  imports: [
    NgxWigModule
  ],
  exports: [
    NgxWigModule
  ],
  providers: [
    { provide: BUTTONS, multi: true, useValue: MY_PLUGIN },
  ]
})

export class NgxWigExModule extends NgxWigModule {
  clearHtml(text: string) {
    return parse('<html>' + text + '</html>').text;
  }
}