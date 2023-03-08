import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/service/article.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {
  
  public articles: Article[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      var search = params['search'];

      this._articleService.search(search).subscribe(
        response => {          
          if(response){
            this.articles = response.article;
          }
          console.log(this.articles);            
        },
        error => {
          console.log(error);
          this.articles = [];
        }
      )

    })
  }

}
