import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/service/global';
import swal from 'sweetalert';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;



  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if(response.article){
            this.article = response.article;
            // console.log(this.article);            
          }else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          // console.log(error);
          this._router.navigate(['/home']);          
        }
      );
    })    
  }

  delete(id: string){

    swal({
      title: "¿Desea eliminar el articulo?",
      text: "Una vez borrado no se puede recuperar!",
      icon: "warning",
      buttons: [true, true]
      })
    .then((willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          response => {
            swal("Articulo eliminado correctamente!", {
              icon: "success",
            });
           this._router.navigate(['/blog']);        
          },
          error => {
            console.log(error);
            this._router.navigate(['/blog']);                   
          }
        )       
      } else {
        swal("Cancelado!", {
          icon: 'error'
        });
      }
    });
    
  }

}
