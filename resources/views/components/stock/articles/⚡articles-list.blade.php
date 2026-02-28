<?php
use Livewire\Component;
use Illuminate\Support\Facades\Http;

new class extends Component
{
    public $search = '';
    public $page=1;
    public $articles = [];



    function mount($search = '', $page = 1)
    {
        $this->search = $search;
        $this->page = $page;
        $this->articles = Http::get(env('APP_SERVER_URL').'/api/v1/items?page='.$this->page.'&search='.$this->search)->object() ?? [];
    }

    function with(): array
    {
        if ($this->search) {
            $articles = Http::get(env('APP_SERVER_URL').'/api/v1/items?page='.$this->page.'&search='.$this->search)->object() ?? [];
        } else {
            $articles = Http::get(env('APP_SERVER_URL').'/api/v1/items?page='.$this->page)->object() ?? [];
        }
        return [
            'articles' => $articles,
        ];
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
        @foreach ($articles->data as $article)
            <a class="col-sm-6 col-md-4 col-lg-3" href="{{ route('article-page', ['article_id' => $article->id]) }}">
                @livewire('stock.articles.article-card', ['article' => $article], key($article->id))
            </a>
        @endforeach
        <div class="col-md-12">
            @livewire('_main.pagination', ['pagination' => $articles->meta])
        </div>
    </div>
</div>
