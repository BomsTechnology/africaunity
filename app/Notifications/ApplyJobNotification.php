<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

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
                    ->line('New Apply from your job: '.$this->job->title)
                    ->line('Name : '.$this->data['name'])
                    ->line('Email : '.$this->data['email'])
                    ->line('cv : ')
                    ->attach( public_path($this->data['cv']))
                    ->line('Message : '.$this->data['message'])
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
