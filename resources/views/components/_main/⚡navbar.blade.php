<?php

use Livewire\Component;

new class extends Component
{

};
?>

<div class="bg-white rounded mt-5 mb-2">
    <div class="d-flex justify-content-between align-items-center py-2 border p-2 mt-1 rounded">
        <a class="btn btn-primary btn-icon" href="{{ route('index-page') }}" wire:navigate>
            <i class="ti ti-menu-2"></i>
        </a>
        <div>Dash Mobile</div>

        <div class="dropdown open">
            <button class="btn btn-icon btn-primary" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-user"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="triggerId">
                <a class="dropdown-item" href="{{ route('profile-page') }}"> <i class="ti ti-user-edit"></i> Profile</a>
            </div>
        </div>
    </div>
</div>
