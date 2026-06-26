import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonLabel, IonAvatar, IonCard, LoadingController } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ArticleService } from 'src/app/services/stock/article-service';
import { ActivatedRoute } from '@angular/router';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonLabel,
    IonItem,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ArticleCardComponent,
    IonAvatar,
    MarkdownComponent,
  ],
})
export class ArticlePage implements OnInit {
  back: any;
  article_id: any;
  _article = inject(ArticleService);
  aroute = inject(ActivatedRoute);
  article: any = {};
  loadingCtrl = inject(LoadingController);

  ngOnInit() {
    this.article_id = this.aroute.snapshot.paramMap.get('article_id');
    this.getArticle();

    this.getImages();
    this.getLinks();
    this.getDocuments();

    this.back = '/articles';
  }
  // Récupérer les données de l'article
  async getArticle() {
    const loading = await this.loadingCtrl.create({
      message: 'Recherche en cours...',
      spinner: 'crescent',
    });

    await loading.present();

    this._article.getArticle(this.article_id).subscribe({
      next: (res: any) => {
        this.article = res.data;
        loading.dismiss()
      },
      error: (error: any) => console.log(error),
    });
  }

  // Récupérer les images de l'article
  images: any;
  getImages() {
    this._article.getImages(this.article_id).subscribe({
      next: (res: any) => {
        this.images = res.data;
      },
      error: (error: any) => console.log(error),
    });
  }

  // Récupérer les liens
  links: any = [];
  getLinks() {
    this._article.getLinks(this.article_id).subscribe({
      next: (res: any) => {
        this.links = res.data;
      },
      error: (error: any) => console.log(error),
    });
  }

  // Récupérer les Documents
  documents: any = [];
  getDocuments() {
    this._article.getDocuments(this.article_id).subscribe({
      next: (res: any) => {
        this.documents = res.data;
      },
      error: (error: any) => console.log(error),
    });
  }
}
