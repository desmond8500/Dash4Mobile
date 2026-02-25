<?php

use Livewire\Component;

new class extends Component
{
    //
};
?>

<div>
    Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi <br>
    <button class="btn btn-primary btn-icon">
        <i class="ti ti-home"></i>
    </button>

     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <line x1="12" y1="5" x2="12" y2="19"></line> <line x1="5" y1="12" x2="19" y2="12"></line> </svg>
            Contrat
        </button>

        <div class="modal modal-blur fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true" wire:ignore.self>
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <form wire:submit.prevent=''>
                        <div class="modal-header">
                            <h5 class="modal-title">Add a new team</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="row mb-3 align-items-end">
                                <div class="col-auto">
                                    <a href="#" class="avatar avatar-upload rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <line x1="12" y1="5" x2="12" y2="19" /> <line x1="5" y1="12" x2="19" y2="12" /> </svg>
                                        <span class="avatar-upload-text">Ajouter</span>
                                    </a>
                                </div>
                                <div class="col">
                                    <label class="form-label">Name</label>
                                    <input type="text" class="form-control" wire:model.defer="name"/>
                                    @error('name') <span class="text-danger">{{ $message }}</span> @enderror
                                </div>
                            </div>

                            <div class="mb-3 col-md-6">
                                <label class="form-label">Appartement</label>
                                <select class="form-select"wire:model.defer="select">
                                    <option value="0">Sélectionnez un Appartement</option>

                                </select>
                                @error('select') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>

                            <div>
                                <label class="form-label">Description</label>
                                <textarea class="form-control" wire:model.defer="description"></textarea>
                                @error('description') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary me-auto" data-bs-dismiss="modal">Fermer</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <script> window.addEventListener('close-modal', event => { $("#exampleModal").modal('hide'); }) </script>
</div>
