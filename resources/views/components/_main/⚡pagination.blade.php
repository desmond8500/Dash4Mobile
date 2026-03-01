<?php

use Livewire\Component;

new class extends Component
{
    public $pagination;
};
?>

<div class=" ">
    <ul class="pagination pagination-outline">
        <li class="page-item">
            <a @class(['page-link page-text', 'disabled' => $pagination->current_page <= 1]) href="#" wire:click="$parent.previousPage()" tabindex="-1" aria-disabled="true">
                Précédent
            </a>
        </li>
        @if ($pagination->last_page > $pagination->current_page )
            <li class="page-item ">
                <a @class(['page-link page-text', 'disabled' => $pagination->current_page > $pagination->last_page]) href="#" wire:click="$parent.nextPage()" tabindex="-1">
                    Suivant
                </a>
            </li>
        @endif
    </ul>
</div>
