<?php

namespace App\Http\Controllers;

use App\Http\Requests\HallRequest;
use App\Models\Hall;
use Illuminate\Http\Response;

class HallController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): string
    {
        return Hall::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(HallRequest $request): Hall
    {
        return Hall::create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Hall $hall
     * @return \Illuminate\Http\Response
     */
    public function show($id): Response
    {
        return Hall::findOfFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Hall $hall
     * @return \Illuminate\Http\Response
     */
    public function update(HallRequest $request, Hall $hall): bool
    {
        $hall->fill($request->validated());
        return $hall->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Hall $hall
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hall $hall): ?Response
    {
        if ($hall->delete()) {
            return response(null, Response::HTTP_NO_CONTENT);
        }
        return null;
    }
}
