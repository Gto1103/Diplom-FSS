<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatRequest;
use App\Models\Seat;
use App\Models\Hall;
use App\Models\Session;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Response;

class SeatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): Response
    {
        return Seat::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(SeatRequest $request): Response
    {
        $req = $request->validated();
        $hallId = $req['seats'][0]['hall_id'];
        $hall = hall::findOrFail($hallId);
        Seat::wherehallId($hall->id)->delete();
        Session::wherehallId($hall->id)->delete();

        foreach ($req['seats'] as $seat) {
            Seat::create($seat);
        }
        return response(true, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Seat $seat
     * @return \Illuminate\Http\Response
     */
    public function show($id): Collection
    {
        return Seat::where('hall_id', $id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Seat $seat
     * @return \Illuminate\Http\Response
     */
    public function updateMany(SeatRequest $req): Response
    {
        foreach ($req['seats'] as $seat) {
            $heat = Seat::findOfFail($seat['id']);
            $heat->fill($seat);
            $heat->save();
        }
        return response(true, 201);
    }
}
