<?php

use Livewire\Component;

new class extends Component
{
    public $search = '';
};
?>

<div>
    <livewire:_main.page-header title="Articles en stock" :breadcrumbs="[
        ['label' => 'Articles', 'route' => '#'],
    ]">
    <div class="input-icon">
        <input type="text" class="form-control form-control-rounded" wire:model.live="search" placeholder="Chercher ">
        <span class="input-icon-addon">
            <i class="ti ti-search"></i>
        </span>
    </div>

    </livewire:_main.page-header>

    @livewire('stock.articles.⚡articles-list', [$search])
</div>
