import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IComment} from "../../interfaces/comment.interface";
import {CommentsMock} from "../../entites/mock";

@Injectable({
  providedIn: 'root'
})
export class CommentApiService {

  constructor(private http: HttpClient) { }

  /*
  *  Сделал все на mock, не стал делать json
  *  get запрос простой, ничего сложного нет. Применил поток, чтобы не сидеть с преобразованием json
  *  Использовал интерфейсы и модели. Так легче работать при получение данных
  */

  public getComments(): Observable<IComment[]> {
    // return this.http.get<IComment[]>(URL);
    return of(CommentsMock);
  }
}
