import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable()

export class UtilityService {
  constructor(private _snackBar: MatSnackBar, private http: HttpClient) {}
  
  
  showAlert(message, type?) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['simple-snack-bar']
    });
  }

  fetchJSONData(url): Observable<any> {
    return this.http.get(url);
  }

}
