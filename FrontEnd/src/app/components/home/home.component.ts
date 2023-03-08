import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public homeText = 'MasterFrameworksJS';
  public articles: Article[];

  constructor(
    private _articleService: ArticleService
  ) {
    this.title = 'Últimos articulos';
   }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
      response => {
        if(response.articles){
          this.articles = response.articles;
        }
      },
      error => {
        console.log(error);
        
      }
    )
  }

}
