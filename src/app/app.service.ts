import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class AppService {
    public isRTL = false;

    constructor() {}

    public changeRTL(value) {
        this.isRTL = value;
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