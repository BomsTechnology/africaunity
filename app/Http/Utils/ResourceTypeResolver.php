<?php
namespace App\Http\Utils;
use Illuminate\Http\Request;

class ResourceTypeResolver
{
    public static function resolve(Request $request): string
    {
        $url = $request->getRequestUri();

        if (strpos($url, 'post') !== false) {
            return 'post';
        } elseif (strpos($url, 'propau') !== false) {
            return 'propau';
        }

        return 'default';
    }
}
