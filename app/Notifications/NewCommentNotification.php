<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewCommentNotification extends Notification
{
    use Queueable;

    public $post;
    public $commentUser;
    public $content;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($post, $commentUser, $content)
    {
        $this->post = $post;
        $this->commentUser = $commentUser;
        $this->content = $content;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('The user '.$this->commentUser->firstname.' '.$this->commentUser->lastname.'('.$this->commentUser->email.') add a new comment on your post '.$this->post->title)
                    ->line('Comment: '.$this->content)
                    ->action('Login to see', url('/post/'.$this->post->id))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
