<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Blade;

class TranslationsProvider extends ServiceProvider
{
    public function register(): void
    {
        
    }

    public function boot(): void
    {
        Blade::directive('translations', function () {
            $translations = [];

            // Get all of the language files for the given locale
            $locale = "ru"; // Instead of app()->getLocale() for a while when we yet just have only ru and en, that are able to be loaded simultaneously in one lang file ru (en as keys and ru as values)
            $files = array_merge(
                // glob(lang_path(app()->getLocale() . "/*.php")), // comment for a while cause strandart laravel translations by keys are usually used at server side
                glob(lang_path($locale . ".json"))
            );

            // Loop through each language file and merge the translations
            foreach ($files as $file) {
                $filename = pathinfo($file, PATHINFO_FILENAME);
                $extension = pathinfo($file, PATHINFO_EXTENSION);

                /*if ($extension === 'php') {
                    $translations = array_merge($translations, require $file);
                } else*/
                if ($extension === 'json')
                    $translations = array_merge($translations, json_decode(file_get_contents($file), true));
            }

            return "<script>
window.translations = " . json_encode($translations) . ";
function __(key, parameters = []) {
    let keys = key.split('.');
    let result = translations;
    for (let i = 0; i < keys.length; i++) {
        if (!result.hasOwnProperty(keys[i])) 
            return key;
        result = result[keys[i]];
    }
    let currentLanguage = window.cookie.get('lang') ?? 'en';
    if(currentLanguage == 'en')
        result = key;
    if (typeof result === 'string' && parameters.length) {
        parameters.forEach(function (param, index) {
            result = result.replace(':' + index, param);
        });
    }
    return result;
}
</script>";
        });
    }
}
