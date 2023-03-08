import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/service/article.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Global } from 'src/app/service/global';

import swal from 'sweetalert';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  public page_title: string;
  public is_edit: boolean;
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    uploadAPI:  {
      url:  Global.url + 'upload-image',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,  
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Selecciona una imagen...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.page_title = 'Crear Articulo';
    this.is_edit = false;
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(){    
    this._articleService.create(this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.article;   
          // Alerta 
          swal('Articulo Creado!', 'El articulo editado correctamente!','success');  
          // swal('Error al editar', 'Error al editar el articulo!','error');

          
          this._router.navigate(['/blog']);
        } else {
          this.status = 'error'
        }
      },
     error => {
        console.log(error)
        this.status = 'error';
        swal('Edicion fallida!', 'Error al editar el articulo!','error');
      }
    );
  }

  imageUpload(data: any){      
    let image_data = data.body.image;
    this.article.image = image_data; 
    }

  }




