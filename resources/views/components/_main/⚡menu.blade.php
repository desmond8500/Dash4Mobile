<?php

use Livewire\Component;

new class extends Component
{
    function with(){
            return [
                'menus' => [
                    ['icon' => 'users', 'label' => 'Clients', 'route' => 'clients-page'],
                    ['icon' => 'box', 'label' => 'Articles', 'route' => 'articles-page'],
                    ['icon' => 'list', 'label' => 'Taches', 'route' => 'taches-page'],
                    ['icon' => 'file', 'label' => 'Devis', 'route' => 'devis-page'],
                    ['icon' => 'search', 'label' => 'Trouver', 'route' => 'search-page'],
                ]
            ];
    }
};
?>

<div>
    <div class="d-flex justify-content-around align-items-center py-2 border p-2 mt-1 rounded bg-light">
        @foreach ($menus as $menu)
            <a href="{{ route($menu['route']) }}" class=" flex-3 btn  w-100 m-1 btn-icon d-flex flex-column align-items-center">
                <i class="ti ti-{{ $menu['icon'] }}"></i>
                <span style="font-size: 0.75rem;">{{ $menu['label'] }}</span>
            </a>
        @endforeach

</div>
