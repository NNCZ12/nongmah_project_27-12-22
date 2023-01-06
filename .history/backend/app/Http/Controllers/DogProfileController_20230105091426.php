<?php

namespace App\Http\Controllers;

use App\Models\DogProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Filesystem\FilesystemAdapter;

class DogProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DogProfile  $dogProfile
     * @return \Illuminate\Http\Response
     */
    public function show(DogProfile $dogProfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DogProfile  $dogProfile
     * @return \Illuminate\Http\Response
     */
    public function edit(DogProfile $dogProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DogProfile  $dogProfile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DogProfile $dogProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DogProfile  $dogProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(DogProfile $dogProfile)
    {
        //
    }
}
