import { Pipe, PipeTransform } from '@angular/core';
import * as Prism from 'prismjs';

@Pipe({ name: 'htmlPrismPipe' })
export class HtmlPrismPipe  implements PipeTransform {
    constructor() { }

    transform(code: string) {
        return Prism.highlight(code, Prism.languages.html, 'html');
    }
}
