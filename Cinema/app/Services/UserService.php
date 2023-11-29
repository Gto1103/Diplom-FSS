<?php

namespace App\Services;

use App\Models\Seat;
use App\Models\Ticket;
use PhpParser\Error;

class UserService
{
    public function createSeat(array $params): Seat
    {

        if (!$params['seats']) {
            throw new Error("Error! Cannot create tickets for seats");
        }

        foreach ($params['seats'] as $seatId) {
            $seat = Seat::findOrFail($seatId);
            $ticket = Ticket::create($params)->seats()->save($seat);
        }
        return $ticket;
    }

    public function createTicket(array $params): Ticket
    {
        $ticket = Ticket::create($params);

        $this->createSeat($params);
        return $ticket->whereId($ticket->id)->with('session')->with('seats')->first();
    }
}


