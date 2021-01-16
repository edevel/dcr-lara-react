<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\Langs;
use App\Http\Resources\Langs as LangsResource;

class LangsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $langs = Langs::paginate(0);
        return LangsResource::collection($langs);
    }

    
}
