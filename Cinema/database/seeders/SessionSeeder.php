<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date = new DateTime('2023-02-26T23:59:00.000+05:30');
        $date2 = new DateTime('2023-02-27T11:30:00.000+05:30');
        $date3 = new DateTime('2023-02-27T12:20:00.000+05:30');
        $date4 = new DateTime('2023-02-27T14:40:00.000+05:30');
        $date5 = new DateTime('2023-02-27T18:30:00.000+05:30');
        $date6 = new DateTime('2023-02-27T23:00:00.000+05:30');

        DB::table('sessions')->insert([
            'datetime' => $date->format('Y-m-d H:i'),
            'hall_id' => 1,
            'film_id' => 1,
        ]);

        DB::table('sessions')->insert([
            'datetime' => $date2->format('Y-m-d H:i'),
            'hall_id' => 3,
            'film_id' => 2,
        ]);

        DB::table('sessions')->insert([
            'datetime' => $date3->format('Y-m-d H:i'),
            'hall_id' => 5,
            'film_id' => 3,
        ]);

        DB::table('sessions')->insert([
            'datetime' => $date4->format('Y-m-d H:i'),
            'hall_id' => 2,
            'film_id' => 1,
        ]);

        DB::table('sessions')->insert([
            'datetime' => $date5->format('Y-m-d H:i'),
            'hall_id' => 4,
            'film_id' => 2,
        ]);

        DB::table('sessions')->insert([
            'datetime' => $date6->format('Y-m-d H:i'),
            'hall_id' => 6,
            'film_id' => 3,
        ]);
    }
}
