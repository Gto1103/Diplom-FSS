<?php

namespace App\Http\Controllers;

use App\Http\Requests\SessionRequest;
use App\Models\Session;
use DateTime;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Response;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): Response
    {
        return Session::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(SessionRequest $request): Session
    {
        return Session::create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Session $session
     * @return \Illuminate\Http\Response
     */
    public function show($datetime): Collection
    {
        $timeSeance = DateTime::createFromFormat('Y-m-d', $datetime)->format('Y-m-d');
        return Session::whereDate('datetime', $timeSeance)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Session $session
     * @return \Illuminate\Http\Response
     */
    public function update(SessionRequest $request, Session $session): bool
    {
        $session->fill($request->validated());
        return $session->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Session $session
     * @return \Illuminate\Http\Response
     */
    public function destroy(Session $session): ?Response
    {
        if ($session->delete()) {
            return response(null, Response::HTTP_NO_CONTENT);
        }
        return null;
    }
}
