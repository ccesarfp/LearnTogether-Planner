import { TextInput, Button, Group } from '@mantine/core';

export function InputField({size, label, placeholder, key, value}) {
    return (
        <TextInput
            size={size}
            label={label}
            placeholder={placeholder}
            key=
            {...form.getInputProps('name')}
        />
    )
}
