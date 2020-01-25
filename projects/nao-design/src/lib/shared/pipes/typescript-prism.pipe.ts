import { Pipe, PipeTransform } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

@Pipe({ name: 'typescriptPrismPipe' })
export class TypescriptPrismPipe implements PipeTransform {
    constructor() { }

    transform(code: string) {
        return Prism.highlight(code, Prism.languages.typescript, 'typescript');
    }
}
