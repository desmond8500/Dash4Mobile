<?php

use Livewire\Component;

new class extends Component
{
    public $search = '';
    public $page=1;
    public $clients = [];
    public $breadcrumbs;

    function mount()
    {
        $this->clients = Http::get(env('APP_SERVER_URL').'/api/v1/clients?page='.$this->page.'&search='.$this->search)->object() ?? [];
    }

    function with(): array
    {
        return [
            'clients' => Http::get(env('APP_SERVER_URL').'/api/v1/clients?page='.$this->page.'&search='.$this->search)->object() ??
            [],
            'page' => $this->page,
            'breadcrumbs' => (object) array(
                (object) array('label' => 'Clients', 'route' => ''),
            ),
        ];
    }
    function searchclients()
    {
    $this->page = 1;
    $this->clients = Http::get(env('APP_SERVER_URL').'/api/v1/items?page='.$this->page.'&search='.$this->search)->object();
    }

    function nextPage()
    {
    if ($this->page < $this->clients->meta->last_page) {
        $this->page++;
        }
    }

    function previousPage()
    {
        if ($this->page > 1) {
        $this->page--;
        }
    }
};
?>

<div>
    <div class="bg-white rounded p-2">
        <div class="row g-2">
            <div class="col-12">
                <div class="d-flex gap-2 justify-content-end">
                    <div class="input-icon">
                        <input type="text" class="form-control form-control-rounded" wire:model="search"
                            placeholder="Chercher">
                        <span class="input-icon-addon">
                            <i class="ti ti-search"></i>
                        </span>
                    </div>
                    <button class="btn btn-icon btn-secondary btn-pill" wire:click="$set('search', '')">
                        <i class="ti ti-x"></i>
                    </button>
                    <button class="btn btn-primary btn-pill" wire:click="searchclients()"
                        wire:keydown.enter="searchclients()">Rechercher</button>
                </div>
            </div>
            @foreach ($clients->data->data as $client)
                <a class="col-sm-6 col-md-4 col-lg-3" style="text-decoration: none" wire:navigate
                    href="{{ route('projets-page', ['client_id' => $client->id]) }}">
                    @livewire('erp.clients.client-card', ['client' => $client], key($client->id))
                </a>
            @endforeach
            <div class="col-md-12">
                <div class="d-flex justify-content-between">
                    <div>
                        <div class="text-muted">{{ $clients->meta->total }} clients</div>
                        <div>Page {{ $clients->meta->current_page }} / {{ $clients->meta->last_page }}</div>
                    </div>
                    @livewire('_main.pagination', ['pagination' => $clients->meta, 'page' => $this->page])
                </div>
            </div>
        </div>
    </div>
</div>
