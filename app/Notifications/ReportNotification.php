<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ReportNotification extends Notification
{
    use Queueable;

    public $type;
    public $reported;
    public $url;
    public $reportUser;
    public $content;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($type, $reported, $url, $reportUser, $content)
    {
        $this->type = $type;
        $this->reported = $reported;
        $this->url = $url;
        $this->reportUser = $reportUser;
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
                    ->line("New $this->type Report")
                    ->line('Reported :'. $this->reported)
                    ->line('Reported URL :'. url("$this->url"))
                    ->line('The user report : '.$this->reportUser->firstname.' '.$this->reportUser->lastname.'('.$this->reportUser->email.')')
                    ->line('Message : '.$this->content)
                    ->action('Login to manage', url('/admin'))
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
