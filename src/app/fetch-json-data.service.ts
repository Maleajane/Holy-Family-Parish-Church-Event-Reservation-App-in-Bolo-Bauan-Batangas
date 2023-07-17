import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchJsonDataService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  
  httpOptions = {
    headers: this.headers
  }

  infant: string = "http://localhost:3000/infantBaptismRecord";
  adult: string = "http://localhost:3000/adultBaptismRecord";
  marriage: string = "http://localhost:3000/marriageRecord";
  eucharist: string = "http://localhost:3000/eucharistRecord";
  reconciliation: string = "http://localhost:3000/reconciliationRecord";
  funeral: string = "http://localhost:3000/funeralRecord";
  mfts: string = "http://localhost:3000/mftsRecord";
  petition: string = "http://localhost:3000/petitionBaptismRecord";
  thanks: string = "http://localhost:3000/thanksgivingRecord";
  confirmation: string = "http://localhost:3000/confirmationRecord";


  constructor(
    private _http:HttpClient
  ) { }


  deleteInfant(id: number): Observable<any> {
    const url = `${this.infant}/${id}`;
    return this._http.delete<any>(url, this.httpOptions)
  }

  deleteAdult(id: number): Observable<any> {
    const url = `${this.adult}/${id}`;
    return this._http.delete<any>(url, this.httpOptions)
  }

  deleteMarriage(id: number): Observable<any> {
    const url = `${this.marriage}/${id}`;
    return this._http.delete<any>(url, this.httpOptions)
  }

  deleteEucharist(id: number): Observable<any> {
    const url = `${this.eucharist}/${id}`;
    return this._http.delete<any>(url, this.httpOptions)
  }

  deleteReconciliation(id: number): Observable<any> {
    const url = `${this.reconciliation}/${id}`;
    return this._http.delete<any>(url, this.httpOptions)
  }

  deleteFuneral(id: number): Observable<any> {
    const url = `${this.funeral}/${id}`;
    return this._http.delete<any>(url, this.httpOptions)
  }

  deleteMfts(id: number): Observable<any> {
    const url = `${this.mfts}/${id}`;
    return this._http.delete<any>(url, this.httpOptions)
  }

  deleteThanks(id: number): Observable<any> {
    const url = `${this.thanks}/${id}`;
    return this._http.delete<any>(url, this.httpOptions)
  }

  deletePetition(id: number): Observable<any> {
    const url = `${this.petition}/${id}`;
    return this._http.delete<any>(url, this.httpOptions)
  }

  deleteConfirmation(id: number): Observable<any> {
    const url = `${this.confirmation}/${id}`;
    return this._http.delete<any>(url, this.httpOptions)
  }



  getInfant() : Observable<any>{
    return this._http.get("http://localhost:3000/infantBaptismRecord");
  }

  getAdult() : Observable<any>{
    return this._http.get("http://localhost:3000/adultBaptismRecord");
  }

  getMarriage() : Observable<any>{
    return this._http.get("http://localhost:3000/marriageRecord");
  }

  getEucharist() : Observable<any>{
    return this._http.get("http://localhost:3000/eucharistRecord");
  }

  getReconciliation() : Observable<any>{
    return this._http.get("http://localhost:3000/reconciliationRecord");
  }

  getFuneral() : Observable<any>{
    return this._http.get("http://localhost:3000/funeralRecord");
  }

  getMfts() : Observable<any>{
    return this._http.get("http://localhost:3000/mftsRecord");
  }

  getPetition() : Observable<any>{
    return this._http.get("http://localhost:3000/petitionRecord");
  }

  getThanks() : Observable<any>{
    return this._http.get("http://localhost:3000/thanksgivingRecord");
  }

  getConfirmation() : Observable<any>{
    return this._http.get("http://localhost:3000/confirmationRecord");
  }

}
