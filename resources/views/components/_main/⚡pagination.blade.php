<?php

use Livewire\Component;

new class extends Component
{
    public $pagination;
    function mount($pagination = [])
    {
        $this->pagination = $pagination;
    }
};
?>

<div>
    <ul class="pagination">
        @if ($pagination->current_page > 1 )
            <li class="page-item">
                <a class="page-link page-text" href="#" wire:click="$parent.previousPage()" tabindex="-1" aria-disabled="true">
                    Précédent
                </a>
            </li>

        @endif
        <li class="page-item">
            <a class="page-link" href="{{ url()->current()." ?page=1" }}">{{ $pagination->current_page }}</a>
        </li>
        {{--
        <li class="page-item">
            <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item active">
            <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">4</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">5</a>
        </li> --}}
        @if ($pagination->last_page > $pagination->current_page )
            <li class="page-item ">
                <a class="page-link page-text" href="#" wire:click="$parent.nextPage()" tabindex="-1">
                    Suivant
                </a>
            </li>
        @endif
    </ul>
</div>
