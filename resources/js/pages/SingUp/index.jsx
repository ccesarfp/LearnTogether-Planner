import { TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { yupResolver } from 'mantine-form-yup-resolver';
import * as yup from 'yup';
import { GoBack } from '../../components/form/GoBack/index.jsx';
import { Filled } from '../../components/layout/Filled';

export function SingUp() {
    const schema = yup.object().shape({
        name: yup.string()
                    .required('Nome é obrigatório'),
        email: yup.string()
                    .email('Não é um email')
                    .required('Email é obrigatório'),
        password: yup.string()
                        .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
                            'Senha precisa ter letras maisculas, minusculas, números e caracteres especiais')
                        .required('Senha é obrigatória'),
        confirmPassword: yup.string()
                        .oneOf([yup.ref('password'), null], 'Senhas precisam ser iguais')
                        .required('Senha é obrigatória'),
    });
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: yupResolver(schema)
    });

    return (
        <Filled>
            <GoBack />

            <TextInput
                label="Nome"
                placeholder="Nome"
                size="md"
                mb="xs"
                key={form.key('name')}
                {...form.getInputProps('name')}
            />
            <TextInput
                label="E-Mail"
                placeholder="E-mail"
                size="md"
                mb="xs"
                key={form.key('email')}
                {...form.getInputProps('email')}

            />
            <TextInput
                label="Senha"
                placeholder="Senha"
                size="md"
                mb="xs"
                key={form.key('password')}
                {...form.getInputProps('password')}

            />
            <TextInput
                label="Confirmar Senha"
                placeholder="Confirmar Senha"
                size="md"
                mb="xs"
                key={form.key('confirmPassword')}
                {...form.getInputProps('confirmPassword')}

            />

            <Group justify="center" mt="xl">
                <Button
                    onClick={() => {
                        form.validate();
                        console.log(form.getValues());
                    }}
                >
                    Cadastrar
                </Button>
            </Group>
        </ Filled>
    )
}
