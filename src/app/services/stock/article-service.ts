import { inject, Injectable } from '@angular/core';
import { MainService } from '../main-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  _main = inject(MainService);
  _http = inject(HttpClient);

  // Articles

  getArticles(search:string = '' ,page: number = 1) {
    return this._http.get(
      `${this._main.getServer()}/v1/items?page=${page}&per_page=8`,
    );
  }
  getArticle(article_id:any) {
    return this._http.get(
      `${this._main.getServer()}/v1/items/${article_id}`,
    );
  }
  // addArticles(postForm:any):Observable<any>{
  //   return this._http.post(this.server+'/v1/articles/', postForm)
  // }
  // updateArticles(postForm :any):Observable<any>{
  //   return this._http.patch(this.server+'/v1/articles/'+postForm.id, postForm)
  // }
  // deleteArticles(postForm :any):Observable<any>{
  //   return this._http.delete(this.server+'/v1/articles/'+postForm.id)
  // }
}
