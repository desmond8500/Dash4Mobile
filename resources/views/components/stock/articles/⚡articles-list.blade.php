<?php
use Livewire\Component;
use Illuminate\Support\Facades\Http;

new class extends Component
{
    public $search = '';
    public $page=1;
    public $articles = [];

    function mount()
    {
        $this->articles = Http::get(env('APP_SERVER_URL').'/api/v1/items?page='.$this->page.'&search='.$this->search)->object() ?? [];
    }

    function with(): array
    {
        return [
            'articles' => Http::get(env('APP_SERVER_URL').'/api/v1/items?page='.$this->page.'&search='.$this->search)->object() ?? [],
            'page' => $this->page,
        ];
    }

    function searchArticles()
    {
        $this->page = 1;
        $this->articles = Http::get(env('APP_SERVER_URL').'/api/v1/items?page='.$this->page.'&search='.$this->search)->object();
    }

    function nextPage()
    {
        if ($this->page < $this->articles->meta->last_page) {
            $this->page++;
        }
    }

    function previousPage()
    {
        if ($this->page > 1) {
            $this->page--;
        }
    }
};
?>

<div class="bg-white rounded p-2">
    <div class="row g-2">
        <div class="col-12">
            <div class="d-flex gap-2 justify-content-end">
                <div class="input-icon">
                    <input type="text" class="form-control form-control-rounded" wire:model="search" placeholder="Chercher">
                    <span class="input-icon-addon">
                        <i class="ti ti-search"></i>
                    </span>
                </div>
                <button class="btn btn-icon btn-secondary btn-pill" wire:click="$set('search', '')">
                    <i class="ti ti-x"></i>
                </button>
                <button class="btn btn-primary btn-pill" wire:click="searchArticles()" wire:keydown.enter="searchArticles()">Rechercher</button>
            </div>
        </div>
        @foreach ($articles->data as $article)
            <a class="col-sm-6 col-md-4 col-lg-3" style="text-decoration: none" wire:navigate href="{{ route('article-page', ['article_id' => $article->id]) }}">
                @livewire('stock.articles.article-card', ['article' => $article], key($article->id))
            </a>
        @endforeach
        <div class="col-md-12">
            <div class="d-flex justify-content-between">
                <div>
                    <div class="text-muted">{{ $articles->meta->total }} Articles</div>
                    <div>Page {{ $articles->meta->current_page }} / {{ $articles->meta->last_page }}</div>
                </div>
                @livewire('_main.pagination', ['pagination' => $articles->meta, 'page' => $this->page])
            </div>
        </div>
    </div>
</div>
