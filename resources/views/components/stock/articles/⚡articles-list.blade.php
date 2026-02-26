<?php
use Livewire\Component;
use Illuminate\Support\Facades\Http;

new class extends Component
{
    public $search = '';
    public function with(): array
    {
        return [
            'articles' => Http::get('https://dash3.yonkou.info/api/v1/items')->object() ?? [],
        ];
    }

};
?>

<div class="bg-white rounded p-2">
    <div class="row g-2">
        @foreach ($articles->data as $article)
            <div class="col-sm-6 col-md-4 col-lg-3">
                @livewire('stock.articles.article-card', ['article' => $article], key($article->id))
            </div>
        @endforeach
    </div>
</div>
