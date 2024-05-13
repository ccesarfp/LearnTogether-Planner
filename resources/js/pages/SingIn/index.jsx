import { TextInput, PasswordInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { yupResolver } from 'mantine-form-yup-resolver';
import * as yup from 'yup';
import { GoBack } from "../../components/form/GoBack"
import { Filled } from '../../components/layout/Filled/index.jsx';
import { encrypt } from '../../utils/PasswordEncrypt.js';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { setCookie } from '../../utils/Cookies.js';

export function SingIn() {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        email: yup.string()
                    .email('Não é um email')
                    .required('Email é obrigatório'),
        password: yup.string()
                        .required('Senha é obrigatória'),
    });
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validate: yupResolver(schema)
    });
    let password = '';
    const handleForm = async () => {
        form.validate();
        let values = form.getValues();

        await Promise.all([
            encrypt(values.password),
        ]).then((result) => {
            password = result[0];
        });

        if(form.validate().hasErrors === false) {
            axios.post('/api/login',
                {
                    'email': values.email,
                    'password': password,
                })
                .then(response => {
                    if (response.status === 200) {
                        setCookie("token", response.data.token);
                        navigate('/tasks');
                    }
                });
        }
    }

    return (
        <Filled>
            <GoBack />

            <TextInput
                label="E-Mail"
                placeholder="E-mail"
                size="md"
                mb="xs"
                key={form.key('email')}
                value={form.values.email}
                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            />

            <PasswordInput
                label="Senha"
                placeholder="Senha"
                size="md"
                mb="xs"
                key={form.key('password')}
                value={form.values.password}
                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            />

            <Group justify="center" mt="xl">
                <Button
                    color="pink"
                    variant="outline"
                    onClick={handleForm}
                >
                    Entrar
                </Button>
            </Group>
        </ Filled>
    )
}
