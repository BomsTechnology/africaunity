{{-- @component('mail::message')
# Introduction

The body of your message.

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent --}}

@component('mail::message')
# Email Verification

Thank you for signing up. 
Your six-digit code is {{$pin}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
