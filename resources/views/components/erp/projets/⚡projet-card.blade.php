<?php

use Livewire\Component;

new class extends Component
{
    public $projet;

};
?>

<div class="bg-white rounded p-2">
    <div class="row g-2">
        <a  class="col-auto" href="{{ route('projet-page', ['projet_id'=>$projet->id]) }}">
            <img src="" alt="A" class="avatar avatar-md">
        </a>
        <a class="col" href="{{ route('projet-page', ['projet_id'=>$projet->id]) }}">
            <div class="fw-bold text-dark">{{ $projet->name }}</div>
            <div class="text-primary">{{ $projet->description }}</div>
        </a>
    </div>
</div>
