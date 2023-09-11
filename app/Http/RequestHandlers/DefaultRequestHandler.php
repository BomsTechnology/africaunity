<?php
namespace App\Http\RequestHandlers;

use Illuminate\Http\Request;

class DefaultRequestHandler extends RequestHandler
{
    public function handleRequest(Request $request)
    {
        // Default logic for handling requests
        // You can modify this method as per your requirements
        $this->meta_title = $request->input('meta_title', 'AfricaUnity');
        $this->meta_description = $request->input('meta_description', 'AfricaUnity the professional and social network');
        $this->meta_image = $request->input('meta_image', asset('/img/logo_au.png'));
    }
}
