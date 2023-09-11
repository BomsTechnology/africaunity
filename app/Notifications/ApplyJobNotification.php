<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\HtmlString;

class ApplyJobNotification extends Notification
{
    use Queueable;

    public $job;
    public $data;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($job, $data)
    {
        $this->job = $job;
        $this->data = $data;
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
                    ->line(new HtmlString('<strong>New Apply from your job: </strong>'.$this->job->title))
                    ->line(new HtmlString('<strong>Name : </strong>'.$this->data['name']))
                    ->line(new HtmlString('<strong>Email : </strong>'.$this->data['email']))
                    ->line(new HtmlString('<strong>CV </strong>: (en piece jointe)'))
                    ->attach( substr($this->data['cv'], 1))
                    ->line(new HtmlString('<strong>Message : </strong>'.$this->data['message']))
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
