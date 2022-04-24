<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ContinentResource;
use App\Models\Comment;
use App\Models\Continent;
use App\Models\Country;
use App\Models\Ministry;
use App\Models\User;
use App\Models\Zone;
use DOMDocument;

class PostResource extends JsonResource
{
    public function bbcode($text){
            $match = [
            '/\[B\](.*)\[\/B\]/isU',
            '/\[I\](.*)\[\/I\]/isU',
            '/\[S\](.*)\[\/S\]/isU',
            '/\[U\](.*)\[\/U\]/isU',

                '/\[IMG=(.*)\](.*)\[\/IMG\]/isU',
                '/\[URL=(.+)\]/isU',
                '/\[\/URL\]/isU',

                '/\[COLOR=(.*)\]/isU',
                '/\[\/COLOR\]/isU',
                '/\[SIZE=1\]/isU',
                '/\[SIZE=2\]/isU',
                '/\[SIZE=3\]/isU',
                '/\[SIZE=4\]/isU',
                '/\[SIZE=5\]/isU',
                '/\[SIZE=6\]/isU',
                '/\[SIZE=7\]/isU',
                '/\[\/SIZE\]/isU',

                '/\[LEFT\](.*)\[\/LEFT\]/isU',
                '/\[RIGHT\](.*)\[\/RIGHT\]/isU',
                '/\[CENTER\](.*)\[\/CENTER\]/isU',
                '/\[quote\](.*)\[\/quote\]/isU',

                '/\[video\](.*)\[\/video\]/isU',
                '/\[youtube\](.*)\[\/youtube\]/isU',

                '/\[list=1\](.*)\[\/list\]/isU',
                '/\[ul\](.*)\[\/ul\]/isU',
                '/\[ol\](.*)\[\/ol\]/isU',
                '/\[\*\](.*)\[\/\*\]/isU',
                '/\[li\](.*)\[\/li\]/isU'
        ];

        $replace = [
            '<b>$1</b>',
            '<i>$1</i>',
            '<strike>$1</strike>',
            '<u>$1</u>',

            '<img src="$2" />',
                '<a href="$1">',
                '</a>',

                '<span style="color:$1">',
                '</span>',
                '<span style="font-size:8px">',
                '<span style="font-size:12px">',
                '<span style="font-size:14px">',
                '<span style="font-size:16px">',
                '<span style="font-size:18px">',
                '<span style="font-size:20px">',
                '<span style="font-size:22px">',
                '</span>',

                '<p class="text-left">$1</p>',
                '<p class="text-right">$1</p>',
                '<p class="text-center">$1</p>',
                '<blockquote>$1</blockquote>',

                '<iframe src="https://www.youtube.com/embed/$1" width="560" height="420" frameborder="0"></iframe>',
                '<iframe src="https://www.youtube.com/embed/$1" width="560" height="420" frameborder="0"></iframe>',

                '<ul class="decimal">$1</ul>',
                '<ul class="circle">$1</ul>',
                '<ol class="decimal">$1</ol>',
                '<li>$1</li>',
                '<li>$1</li>',
        ];


            $regex = '/\[font=.*?\]|\[\/font\]/i';
            $text = preg_replace($regex, '', $text);

        return nl2br(preg_replace($match, $replace, $text));
    }
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $content2 = $this->bbcode($this->content);
        
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'content2' => $content2,
            'image' => $this->image,
            'status' => $this->status,
            'type' => $this->type,
            'language' => $this->language,
            'user' => User::find($this->user_id),
            'continent' => new ContinentResource(Continent::find($this->continent_id)),
            'zone' => new ZoneResource(Zone::find($this->zone_id)),
            'country' => new CountryResource(Country::find($this->country_id)),
            'ministry' => new MinistryResource(Ministry::find($this->ministry_id)),
            'comments' => (Comment::where('post_id', $this->id)->get())->count(),
            'date' => $this->created_at->format('Y-m-d'),
        ];
    }
}
