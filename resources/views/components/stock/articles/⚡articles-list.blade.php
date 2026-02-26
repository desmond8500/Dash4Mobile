<?php
use Livewire\Component;
use Illuminate\Support\Facades\Http;

new class extends Component
{
    public function with(): array
    {
        return [
            'articles' => Http::get('https://dash3.yonkou.info/api/v1/items')->object() ?? [],
        ];
    }

};
?>

<div class="bg-white rounded p-2">
    <div class="">
        @foreach ($articles->data as $article)
            @livewire('stock.articles.article-card', ['article' => $article], key($article->id))
        @endforeach
    </div>
</div>
