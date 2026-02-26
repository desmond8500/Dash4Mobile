<?php

use Livewire\Component;

new class extends Component
{

};
?>

<div class="bg-white rounded mt-5 mb-2">
    <div class="d-flex justify-content-between align-items-center py-2 border p-2 mt-1 rounded">
        <a class="btn btn-primary btn-icon" href="{{ route('index-page') }}">
            <i class="ti ti-menu-2"></i>
        </a>
        <div>Dash Mobile</div>
        <button class="btn btn-primary btn-icon" >
            <i class="ti ti-user"></i>
        </button>
    </div>
</div>
