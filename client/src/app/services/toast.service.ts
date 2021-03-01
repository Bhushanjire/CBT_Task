import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private __toastr: ToastrService
  ) { }

  showSuccess(message: string) {
    this.__toastr.success(message);
  }
  showError(message: string) {
    this.__toastr.error(message);
  }
}
