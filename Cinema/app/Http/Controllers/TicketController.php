<?php

namespace App\Http\Controllers;

use App\Http\Requests\TicketRequest;
use App\Services\UserService;
use Illuminate\Http\Response;

class TicketController extends Controller
{
    private UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */

    public function store(TicketRequest $request): Response
    {
        $params = $request->validated();
        $ticket = $this->userService->createTicket($params);
        return response($ticket, 201);
    }

}
