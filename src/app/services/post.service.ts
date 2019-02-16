import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL: any = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http:HttpClient) {
   }

   getPosts() {
    return this.http.get(this.apiURL);
  }

  createPost(post) {
    return this.http.post(this.apiURL, JSON.stringify(post))
  }

  updatePost(post) {
    return this.http.patch(this.apiURL + '/' + post.id, JSON.stringify({ isRead: true }))
  }

  deletePost(id) {
    return this.http.delete(this.apiURL + '/' + id)
  }

}
