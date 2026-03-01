<?php
use Livewire\Component;

new class extends Component
{
    public $title = 'Articles en stock';
    public $breadcrumbs = [
        ['label' => 'Articles', 'route' => '#'],
    ];
};
?>

<div>
    <livewire:_main.page-header :title="$title" :breadcrumbs="$breadcrumbs" />

    @livewire('stock.articles.⚡articles-list')
</div>
