import { Injectable, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class AppService {
    public isRTL = false;

    constructor(@Inject(DOCUMENT) private document: Document) { }

    /**
     * Chnage direction RTL | LTR
     */
    changeDirTo(dir: 'ltr' | 'rtl') {
        // -->Get: Body
        const body = this.document.getElementsByTagName('body')[0];
        // -->Set: dir attribute
        body.dir = dir;
        // -->Set: direction style
        body.style.direction = dir;

        this.isRTL = dir === 'rtl';
    }

    /**
     * Copy to clipboard
     * @param text to be copied
     */
    public copyToClipboard(text: string): void {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = text;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
}