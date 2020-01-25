import { Injectable } from '@angular/core';
// import { NaoAlertsService } from './nao-alerts/nao-alerts.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    // private readonly appService: AppService,
    // public readonly naoAlertsService: NaoAlertsService
  ) { }

  /**
   * Show a modal with a detailed view of this API error
   * @param code
   *
   *    'cannot-connect-to-server'
   */
  // public showModalError(code: string) { // : Promise<any> {
  //   let err = {
  //     message: '', code: 'server:500'
  //   };
  //   switch (code) {
  //     case 'cannot-connect-to-server':
  //       err.message = 'cannot-connect-to-server';
  //       break;
  //     case 'invalid-parameter':
  //       err.message = 'invalid-parameter';
  //       break;
  //   }
  //   console.warn(`show a modal a default error from the code: `, err);
  // }

  // /**
  //  * Show a modal with a detailed view of this API error
  //  * @param apiError
  //  */
  // public showModalApiError(apiError: any) { // : Promise<any> {
  //   console.warn(`show a modal with this Api error`, apiError);
  //   if (apiError.error) {
  //     if (apiError.error.errorType === 'business') {
  //       // -->Show: dialog with the error set as language
  //       // apiError.error = 'salesOrders.not_enough_stock';
  //       // -->Show: the error text
  //       this.naoAlertsService.showMessage({
  //         title: 'errors.business.process_error',
  //         bodyTranslate: apiError.error.error,
  //         // confirmButtonText: `words.delete`
  //       }, 'sm')
  //         .then(ok => {
  //           if (ok && ok.ok) {
  //           }
  //         });
  //     }
  //   }
  // }
}
