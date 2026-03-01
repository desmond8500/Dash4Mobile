<?php

use Livewire\Component;

new class extends Component
{
    public $article_id;
    public $article;

    function mount($article_id)
    {
        $this->article_id = $article_id;
        $this->article = Http::get("https://dash3.yonkou.info/api/v1/items/{$this->article_id}")->object() ?? null;
    }

    public function with(): array
    {
        return [
            'article' => Http::get("https://dash3.yonkou.info/api/v1/items/{$this->article_id}")->object() ?? null,
            'breadcrumbs' => (object) array(
                (object) array('label' => 'Articles', 'route' => 'articles-page'),
                (object) array('label' => 'Article', 'route' => '',),
            ),
        ];
    }
};
?>

<div>
    <livewire:_main.page-header :breadcrumbs="$breadcrumbs" title="Article #{{ $article->data->id }}">

    </livewire:_main.page-header>

    <div class="card">
        @livewire('stock.articles.article-card', ['article' => $article->data], key($article->data->id))
    </div>

</div>
