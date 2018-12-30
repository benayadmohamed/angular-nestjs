import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Posts} from '../data/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly _postsSource$ = new BehaviorSubject<Posts[]>([]);
  private readonly _posts$ = this._postsSource$.asObservable();

  public setPosts(posts: Posts[]) {
    this._postsSource$.next(posts);
  }

  get posts$(): Observable<Posts[]> {
    return this._posts$;
  }

  constructor(private http: HttpClient) {
  }

  public load(): void {
    this.http.get<Posts[]>(environment.url + 'post').subscribe(value => {
      this._postsSource$.next(value);
    });
  }

  public add(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(environment.url + 'post', post);
  }

  public upadte(post: Posts): Observable<Posts> {
    return this.http.put<Posts>(environment.url + 'post', post);
  }

  public delete(id: String): Observable<any> {
    return this.http.delete<any>(environment.url + 'post/' + id);
  }
}
