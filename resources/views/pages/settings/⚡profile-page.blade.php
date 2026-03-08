<?php

use Livewire\Component;

new class extends Component
{
    //
};
?>

<div>
    @livewire('_main.page-header', ['title' => 'Mon profil'])
    <div class="card p-2">
        <div>
            <div class="mb-3">
                <label for="server_url" class="form-label">Serveur</label>
                {{-- <input type="text" class="form-control" id="server_url" placeholder="https://dash3.yonkou.info" value="{{ auth()->user()->server_url }}"> --}}
            </div>
        </div>
    </div>

    {{-- I begin to speak only when I am certain what I will say is not better left unsaid. - Cato the Younger --}}
</div>
