<?php

use Livewire\Component;

new class extends Component
{
    public $breadcrumbs = [];
    public $title = '';

    function mount($breadcrumbs = [], $title = '')
    {
        $this->breadcrumbs = $breadcrumbs;
        $this->title = $title;
    }
};
?>

<div class="bg-white border rounded p-2 mb-2 sticky-top">
    <div class="page-header">
        <div class="row align-items-center mw-100">
            <div class="col">
                <div class="mb-1">
                    <ol class="breadcrumb" aria-label="breadcrumbs">
                        <li class="breadcrumb-item">
                            <a href="/" wire:navigate>Accueil</a>
                        </li>
                        @foreach ($breadcrumbs as $breadcrumb)
                        <li class="breadcrumb-item">
                                @if ($breadcrumb->route)
                                    <a href="{{ route($breadcrumb->route) }}">{{ $breadcrumb->label }}</a>
                                @else
                                    <span>{{ $breadcrumb->label }}</span>
                                @endif
                            </li>
                        @endforeach
                    </ol>
                </div>
                <h2 class="page-title">
                    <span class="text-truncate"> {{ $title}}</span>
                </h2>
            </div>
            <div class="col-auto">
                <div class="btn-list">
                    {{ $slot }}
                </div>
            </div>
        </div>
    </div>
</div>
