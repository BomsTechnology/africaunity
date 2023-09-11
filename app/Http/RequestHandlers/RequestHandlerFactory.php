<?php
namespace App\Http\RequestHandlers;

use Illuminate\Http\Request;

class RequestHandlerFactory
{
    public static function createHandler($resource)
    {
        switch ($resource) {
            case 'post':
                return new PostRequestHandler();
            default:
                return new DefaultRequestHandler();
        }
    }
}
