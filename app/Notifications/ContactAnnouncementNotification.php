<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContactAnnouncementNotification extends Notification
{
    use Queueable;

    public $announcement;
    public $contactUser;
    public $content;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($announcement, $contactUser, $content)
    {
        $this->announcement = $announcement;
        $this->contactUser = $contactUser;
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
                    ->line('The user '.$this->contactUser->firstname.' '.$this->contactUser->lastname.'('.$this->contactUser->email.')'. ' contact you in relation to your advertisement '.$this->announcement->title)
                    ->line('Message: '.$this->content)
                    ->action('Login to manage', url('/login'))
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
