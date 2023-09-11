<?php

namespace App\Http\Controllers;

use App\Http\RequestHandlers\PostRequestHandler;
use Illuminate\Http\Request;
use App\Http\RequestHandlers\RequestHandlerFactory;
use App\Http\Utils\ResourceTypeResolver;

class HomeController extends Controller
{
    //
    public function index(Request $request)
    {

       // Resolve the resource type using the ResourceTypeResolver
       $resource = ResourceTypeResolver::resolve($request);

       // Create a request handler based on the resource type using the RequestHandlerFactory
       $handler = RequestHandlerFactory::createHandler($resource);

       // Execute the request handler's logic
        $handler->handleRequest($request);


       // Retrieve the meta data from the request handler
       $metaTitle = $handler->getMetaTitle();
       $metaDescription = $handler->getMetaDescription();
       $metaImage = $handler->getMetaImage();

       // Pass the meta data to the view
       return view('welcome', [
           'meta_title' => $metaTitle,
           'meta_description' => $metaDescription,
           'meta_image' => $metaImage,

       ]);
    }
}
