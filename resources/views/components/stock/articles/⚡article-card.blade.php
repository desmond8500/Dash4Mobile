<?php

use Livewire\Component;

new class extends Component
{
    public $article;
};
?>

<div class="row border p-2 rounded mb-2">
    <div class="col-auto">
        <img src="{{ asset($article->image) }}" alt="{{ $article->designation }}" class="avatar avatar-xl">
    </div>
    <div class="col">
        <div class="fw-bold">{{ $article->designation }}</div>
        <div class="text-primary">{{ $article->reference }}</div>
        <div class="text-end text-danger fw-bold"> {{ number_format($article->price, 0, ',', ' ') }} CFA</div>
    </div>
</div>
