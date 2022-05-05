<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StripeController extends Controller
{
    public function getSession()
    {
        $stripe = new \Stripe\StripeClient(
            env('STRIPE_SECRET')
          );

        $sub = $stripe->checkout->sessions->create([
            'success_url' => url('/pack'),
            'cancel_url' => url('/register/business2'),
            'line_items' => [
                [
                    'price' => 'price_1KtqrBFJTg08EEU2pd78nLkj',
                    'quantity' => 1,
                ],
            ],
            'mode' => 'subscription',
        ]);

        return  $sub;
          
    }
}
