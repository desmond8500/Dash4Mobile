<?php

use Livewire\Component;

new class extends Component
{
    public $client;
};
?>

<div>
    <div class="border p-2 rounded">
        <div class="row ">
            <div class="col-auto">
                <img src="{{ asset($client->avatar) }}" alt="A" class="avatar avatar-md">
            </div>
            <div class="col">
                <div class="fw-bold">{{ $client->name }}</div>
                <div class="text-primary">{{ $client->description }}</div>
            </div>
        </div>
    </div>
</div>
