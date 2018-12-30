import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../data/user';
import {environment} from '../../../environments/environment';
import {first, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _usersSource$ = new BehaviorSubject<User[]>([]);
  private readonly _users$ = this._usersSource$.asObservable();

  public setUsers(users: User[]) {
    this._usersSource$.next(users);
  }

  get users$(): Observable<User[]> {
    return this._users$;
  }

  constructor(private http: HttpClient) {
  }

  public load(): void {
    this.http.get<User[]>(environment.url + 'user').subscribe(value => {
      this._usersSource$.next(value);
    });
  }

  public add(user: User): Observable<User> {
    return this.http.post<User>(environment.url + 'user', user);
  }

  public upadte(user: User): Observable<User> {
    return this.http.put<User>(environment.url + 'user', user);
  }

  public delete(id: String): Observable<any> {
    return this.http.delete<any>(environment.url + 'user/' + id);
  }

  findOne(id): Observable<User[]> {
    return this.http.get<User[]>(environment.url + 'user/' + id);
  }
}
