import { TextInput, PasswordInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { yupResolver } from 'mantine-form-yup-resolver';
import * as yup from 'yup';
import { GoBack } from '../../components/form/GoBack/index.jsx';
import { Filled } from '../../components/layout/Filled';
import axios from 'axios';
import { encrypt } from '../../utils/PasswordEncrypt.js';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../../utils/Cookies.js';

export function SingUp() {
    const navigate = useNavigate();
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
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: yupResolver(schema)
    });
    let password = '';
    let confirmPassword = '';
    const handleForm = async () => {
        form.validate();
        let values = form.getValues();

        await Promise.all([
            encrypt(values.password),
            encrypt(values.confirmPassword),
        ]).then((result) => {
            password = result[0];
            confirmPassword = result[1];
        });

        if(form.validate().hasErrors === false) {
            axios.post('/api/register',
                {
                    'name': values.name,
                    'email': values.email,
                    'password': password,
                    'password_confirmation': confirmPassword,
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
                label="Nome"
                placeholder="Nome"
                size="md"
                mb="xs"
                key={form.key('name')}
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
            />
            <TextInput
                label="E-Mail"
                placeholder="E-mail"
                size="md"
                mb="xs"
                value={form.values.email}
                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}

            />
            <PasswordInput
                label="Senha"
                placeholder="Senha"
                size="md"
                mb="xs"
                value={form.values.password}
                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}

            />
            <PasswordInput
                label="Confirmar Senha"
                placeholder="Confirmar Senha"
                size="md"
                mb="xs"
                value={form.values.confirmPassword}
                onChange={(event) => form.setFieldValue('confirmPassword', event.currentTarget.value)}

            />

            <Group justify="center" mt="xl">
                <Button
                    color="dark.7"
                    variant="outline"
                    onClick={handleForm}
                >
                    Cadastrar
                </Button>
            </Group>
        </ Filled>
    )
}
