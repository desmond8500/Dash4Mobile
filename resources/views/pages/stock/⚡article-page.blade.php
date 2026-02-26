<?php

use Livewire\Component;

new class extends Component
{
    public $article_id;

    function mount($article_id)
    {
        $this->article_id = $article_id;
    }

    public function with(): array
    {
        return [
            'article' => Http::get("https://dash3.yonkou.info/api/v1/items/{$this->article_id}")->object() ?? null,
            'breadcrumbs' => [
            ['label' => 'Accueil', 'route' => '/'],
            ['label' => 'Stock', 'route' => '#'],
            ['label' => 'Articles', 'route' => 'stock-articles'],
            ],
        ];
    }

};
?>

<div>
    <livewire:_main.page-header :breadcrumbs="$breadcrumbs" title="Article #{{ $article->data->id }}">
        {{-- <x-slot name="header">
            <a href="{{ route('index-page') }}" class="btn btn-light">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
        </x-slot> --}}
        dsf

    </livewire:_main.>
</div>
