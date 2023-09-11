<?php
namespace App\Http\RequestHandlers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostRequestHandler extends RequestHandler
{
    public function handleRequest(Request $request)
    {
        // Your logic for handling the "post-shared" request goes here
        $url = $request->getRequestUri();
        $pattern = '/^\/post\/(\d+)\/([\w-]+)$/';
        $matches = [];

        if (preg_match($pattern, $url, $matches)) {
            $postId = $matches[1];
            $slug = $matches[2];

            $post = Post::find($postId);

            $this->meta_title = $post->title;
            $this->meta_description = $post->title;
            $this->meta_image = $post->image;
        }
    }
}
