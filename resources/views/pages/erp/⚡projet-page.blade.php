<?php

use Livewire\Component;

new class extends Component
{
    public $projet_id;
    public $projet;

    public function mount($projet_id)
    {
        $this->projet_id = $projet_id;
        $this->projet = Http::get(env('APP_SERVER_URL').'/api/v1/projets/'.$this->projet_id)->object() ?? null;
    }
};
?>

<div>
    @dump($projet_id)
    {{-- @livewire('erp.projets.projet-card', ['projet' => $this->projet], key($this->projet_id)) --}}

</div>
