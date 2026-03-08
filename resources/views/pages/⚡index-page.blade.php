<?php

use Livewire\Component;

new class extends Component
{
    public $server;

    function mount(){
        $this->server = env('APP_SERVER_URL');
    }

    // public $server = env('APP_SERVER_URL', 'https://dash3.yonkou.info');
};
?>

<div>
    @livewire('_main.menu')

    @if (!$server)
        <div class="card card-body mt-2">
            <div class="text-muted">Vueillez renseigner le serveur</div>
        </div>
    @endif



</div>
