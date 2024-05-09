import { TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { yupResolver } from 'mantine-form-yup-resolver';
import * as yup from 'yup';
import { GoBack } from "../../components/form/GoBack"
import { Filled } from '../../components/layout/Filled/index.jsx';

export function SingIn() {
    const schema = yup.object().shape({
        email: yup.string()
                    .email('Não é um email')
                    .required('Email é obrigatório'),
        password: yup.string()
                        .required('Senha é obrigatória'),
    });
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: '',
        },
        validate: yupResolver(schema)
    });

    return (
        <Filled>
            <GoBack />

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

            <Group justify="center" mt="xl">
                <Button
                    color="pink"
                    variant="outline"
                    onClick={() => {
                        form.validate();
                        console.log(form.getValues());
                    }}
                >
                    Entrar
                </Button>
            </Group>
        </ Filled>
    )
}
