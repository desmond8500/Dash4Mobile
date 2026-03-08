<?php

use Livewire\Component;

new class extends Component
{
    public $client_id;
    public $projets;
    public $search = '';

    function mount($client_id)
    {
        $this->client_id = $client_id;
        $this->projets = Http::get(env('APP_SERVER_URL').'/api/v1/clients/projets/'.$this->client_id)->object() ?? [];
    }


};
?>

<div>
    <div class="">
        <div class="row g-2">
            @foreach ($projets->data as $projet)
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    @livewire('erp.projets.projet-card', ['projet' => $projet], key($projet->id))
                </div>
            @endforeach
        </div>
    </div>
</div>
