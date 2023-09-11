<?php
namespace App\Http\RequestHandlers;

use Illuminate\Http\Request;

abstract class RequestHandler
{
    protected $meta_title;
    protected $meta_description;
    protected $meta_image;

    protected abstract function handleRequest(Request $request);

    public function processRequest(Request $request)
    {
        $this->handleRequest($request);
    }

    public function getMetaTitle()
    {
        return $this->meta_title;
    }

    public function getMetaDescription()
    {
        return $this->meta_description;
    }

    public function getMetaImage()
    {
        return $this->meta_image;
    }
}
