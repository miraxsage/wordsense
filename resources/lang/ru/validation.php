<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'Поле ":attribute" должно быть выбрано.',
    'accepted_if' => 'Поле ":attribute" должно быть выбрано когда ":other" равно ":value".',
    'active_url' => 'Поле ":attribute" должно быть валидной ссылкой.',
    'after' => 'Поле ":attribute" должно быть более поздней датой, чем ":date".',
    'after_or_equal' => 'Поле ":attribute" должно быть датой, не более ранней чем ":date".',
    'alpha' => 'Поле ":attribute" должно содержать только буквы.',
    'alpha_dash' => 'Поле ":attribute" должно содержать только буквы, цифры, тире, либо знаки подчеркивания.',
    'alpha_num' => 'Поле ":attribute" должно содержать только буквы и/или цифры.',
    'array' => 'Поле ":attribute" должно быть массивом.',
    'ascii' => 'Поле ":attribute" должно содержать только символы из кодировки ASCII (используйте простые символы, которые можно ввести с клавиатуры).',
    'before' => 'Поле ":attribute" должно быть датой, более ранней чем ":date".',
    'before_or_equal' => 'Поле ":attribute" должно быть датой до, либо равной ":date".',
    'between' => [
        'array' => 'Поле ":attribute" field must have between :min and :max items.',
        'file' => 'Поле ":attribute" field must be between :min and :max kilobytes.',
        'numeric' => 'Поле ":attribute" field must be between :min and :max.',
        'string' => 'Поле ":attribute" field must be between :min and :max characters.',
    ],
    'boolean' => 'Поле ":attribute" field must be true or false.',
    'can' => 'Поле ":attribute" field contains an unauthorized value.',
    'confirmed' => 'Поле ":attribute" field confirmation does not match.',
    'current_password' => 'The password is incorrect.',
    'date' => 'Поле ":attribute" field must be a valid date.',
    'date_equals' => 'Поле ":attribute" field must be a date equal to :date.',
    'date_format' => 'Поле ":attribute" field must match the format :format.',
    'decimal' => 'Поле ":attribute" field must have :decimal decimal places.',
    'declined' => 'Поле ":attribute" field must be declined.',
    'declined_if' => 'Поле ":attribute" field must be declined when :other is :value.',
    'different' => 'Поле ":attribute" field and :other must be different.',
    'digits' => 'Поле ":attribute" field must be :digits digits.',
    'digits_between' => 'Поле ":attribute" field must be between :min and :max digits.',
    'dimensions' => 'Поле ":attribute" field has invalid image dimensions.',
    'distinct' => 'Поле ":attribute" field has a duplicate value.',
    'doesnt_end_with' => 'Поле ":attribute" field must not end with one of the following: :values.',
    'doesnt_start_with' => 'Поле ":attribute" field must not start with one of the following: :values.',
    'email' => 'Поле ":attribute" field must be a valid email address.',
    'ends_with' => 'Поле ":attribute" field must end with one of the following: :values.',
    'enum' => 'The selected :attribute is invalid.',
    'exists' => 'The selected :attribute is invalid.',
    'extensions' => 'Поле ":attribute" field must have one of the following extensions: :values.',
    'file' => 'Поле ":attribute" field must be a file.',
    'filled' => 'Поле ":attribute" field must have a value.',
    'gt' => [
        'array' => 'Поле ":attribute" field must have more than :value items.',
        'file' => 'Поле ":attribute" field must be greater than :value kilobytes.',
        'numeric' => 'Поле ":attribute" field must be greater than :value.',
        'string' => 'Поле ":attribute" field must be greater than :value characters.',
    ],
    'gte' => [
        'array' => 'Поле ":attribute" field must have :value items or more.',
        'file' => 'Поле ":attribute" field must be greater than or equal to :value kilobytes.',
        'numeric' => 'Поле ":attribute" field must be greater than or equal to :value.',
        'string' => 'Поле ":attribute" field must be greater than or equal to :value characters.',
    ],
    'hex_color' => 'Поле ":attribute" field must be a valid hexadecimal color.',
    'image' => 'Поле ":attribute" field must be an image.',
    'in' => 'The selected :attribute is invalid.',
    'in_array' => 'Поле ":attribute" field must exist in :other.',
    'integer' => 'Поле ":attribute" field must be an integer.',
    'ip' => 'Поле ":attribute" field must be a valid IP address.',
    'ipv4' => 'Поле ":attribute" field must be a valid IPv4 address.',
    'ipv6' => 'Поле ":attribute" field must be a valid IPv6 address.',
    'json' => 'Поле ":attribute" field must be a valid JSON string.',
    'lowercase' => 'Поле ":attribute" field must be lowercase.',
    'lt' => [
        'array' => 'Поле ":attribute" field must have less than :value items.',
        'file' => 'Поле ":attribute" field must be less than :value kilobytes.',
        'numeric' => 'Поле ":attribute" field must be less than :value.',
        'string' => 'Поле ":attribute" field must be less than :value characters.',
    ],
    'lte' => [
        'array' => 'Поле ":attribute" field must not have more than :value items.',
        'file' => 'Поле ":attribute" field must be less than or equal to :value kilobytes.',
        'numeric' => 'Поле ":attribute" field must be less than or equal to :value.',
        'string' => 'Поле ":attribute" field must be less than or equal to :value characters.',
    ],
    'mac_address' => 'Поле ":attribute" field must be a valid MAC address.',
    'max' => [
        'array' => 'Поле ":attribute" field must not have more than :max items.',
        'file' => 'Поле ":attribute" field must not be greater than :max kilobytes.',
        'numeric' => 'Поле ":attribute" field must not be greater than :max.',
        'string' => 'Поле ":attribute" field must not be greater than :max characters.',
    ],
    'max_digits' => 'Поле ":attribute" field must not have more than :max digits.',
    'mimes' => 'Поле ":attribute" field must be a file of type: :values.',
    'mimetypes' => 'Поле ":attribute" field must be a file of type: :values.',
    'min' => [
        'array' => 'Поле ":attribute" field must have at least :min items.',
        'file' => 'Поле ":attribute" field must be at least :min kilobytes.',
        'numeric' => 'Поле ":attribute" field must be at least :min.',
        'string' => 'Поле ":attribute" field must be at least :min characters.',
    ],
    'min_digits' => 'Поле ":attribute" field must have at least :min digits.',
    'missing' => 'Поле ":attribute" field must be missing.',
    'missing_if' => 'Поле ":attribute" field must be missing when :other is :value.',
    'missing_unless' => 'Поле ":attribute" field must be missing unless :other is :value.',
    'missing_with' => 'Поле ":attribute" field must be missing when :values is present.',
    'missing_with_all' => 'Поле ":attribute" field must be missing when :values are present.',
    'multiple_of' => 'Поле ":attribute" field must be a multiple of :value.',
    'not_in' => 'The selected :attribute is invalid.',
    'not_regex' => 'Поле ":attribute" field format is invalid.',
    'numeric' => 'Поле ":attribute" field must be a number.',
    'password' => [
        'letters' => 'Поле ":attribute" field must contain at least one letter.',
        'mixed' => 'Поле ":attribute" field must contain at least one uppercase and one lowercase letter.',
        'numbers' => 'Поле ":attribute" field must contain at least one number.',
        'symbols' => 'Поле ":attribute" field must contain at least one symbol.',
        'uncompromised' => 'The given :attribute has appeared in a data leak. Please choose a different :attribute.',
    ],
    'present' => 'Поле ":attribute" field must be present.',
    'present_if' => 'Поле ":attribute" field must be present when :other is :value.',
    'present_unless' => 'Поле ":attribute" field must be present unless :other is :value.',
    'present_with' => 'Поле ":attribute" field must be present when :values is present.',
    'present_with_all' => 'Поле ":attribute" field must be present when :values are present.',
    'prohibited' => 'Поле ":attribute" field is prohibited.',
    'prohibited_if' => 'Поле ":attribute" field is prohibited when :other is :value.',
    'prohibited_unless' => 'Поле ":attribute" field is prohibited unless :other is in :values.',
    'prohibits' => 'Поле ":attribute" field prohibits :other from being present.',
    'regex' => 'Поле ":attribute" field format is invalid.',
    'required' => 'Поле ":attribute" обязательно для заполнения.',
    'required_array_keys' => 'Поле ":attribute" field must contain entries for: :values.',
    'required_if' => 'Поле ":attribute" field is required when :other is :value.',
    'required_if_accepted' => 'Поле ":attribute" field is required when :other is accepted.',
    'required_unless' => 'Поле ":attribute" field is required unless :other is in :values.',
    'required_with' => 'Поле ":attribute" field is required when :values is present.',
    'required_with_all' => 'Поле ":attribute" field is required when :values are present.',
    'required_without' => 'Поле ":attribute" field is required when :values is not present.',
    'required_without_all' => 'Поле ":attribute" field is required when none of :values are present.',
    'same' => 'Поле ":attribute" field must match :other.',
    'size' => [
        'array' => 'Поле ":attribute" field must contain :size items.',
        'file' => 'Поле ":attribute" field must be :size kilobytes.',
        'numeric' => 'Поле ":attribute" field must be :size.',
        'string' => 'Поле ":attribute" field must be :size characters.',
    ],
    'starts_with' => 'Поле ":attribute" field must start with one of the following: :values.',
    'string' => 'Поле ":attribute" field must be a string.',
    'timezone' => 'Поле ":attribute" field must be a valid timezone.',
    'unique' => 'Поле ":attribute" has already been taken.',
    'uploaded' => 'Поле ":attribute" failed to upload.',
    'uppercase' => 'Поле ":attribute" field must be uppercase.',
    'url' => 'Поле ":attribute" field must be a valid URL.',
    'ulid' => 'Поле ":attribute" field must be a valid ULID.',
    'uuid' => 'Поле ":attribute" field must be a valid UUID.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        'password' => 'Пароль',
        'name' => 'Имя',
        'email' => 'E-mail',
        'password-confirmation' => 'Повторите пароль',
    ],

];
