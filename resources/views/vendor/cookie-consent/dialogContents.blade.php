<div class="js-cookie-consent cookie-consent fixed md:top-1/2 inset-x-0 pb-2 z-50">
    <div class="md:w-[80%] w-[95%] mx-auto px-6">
        <div class="p-6 rounded-lg bg-white shadow-md">
            <div class="flex items-center justify-center space-y-4 flex-col flex-wrap">
                <div class=" items-center ">
                    <p class=" text-black cookie-consent__message text-center">
                        {!! trans('cookie-consent::texts.message') !!}
                    </p>
                </div>
                <div class="mt-2 flex-shrink-0 w-full sm:mt-0 sm:w-auto">
                    <button class="js-cookie-consent-agree cookie-consent__agree cursor-pointer mx-auto flex items-center justify-center px-4 py-2 rounded-md text-sm text-white bg-primary-blue">
                        {{ trans('cookie-consent::texts.agree') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
