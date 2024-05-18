import { Container, Box } from './styles.js';
import './styles.css';
import { TextInput, Select, Grid, Textarea, Button, Group } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { yupResolver } from 'mantine-form-yup-resolver';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { getCookie } from '../../../utils/Cookies.js';

export function Detail({ task }) {
    const navigate = useNavigate();
    const options = [
        {
            value: 'todo',
            label: 'Para Fazer'
        },
        {
            value: 'doing',
            label: 'Fazendo'
        },
        {
            value: 'done',
            label: 'Feito'
        },
    ]
    const schema = yup.object().shape({
        title: yup.string()
            .min(3, 'É necessário ter ao menos 3 letras')
            .required('Título é obrigatório'),
        description: yup.string(),
        status: yup.string().required('Status é obrigatório'),
    });
    const form = useForm({
        initialValues: {
            id: '',
            title: '',
            description: '',
            dueDate: '',
            status: ''
        },
        validate: yupResolver(schema)
    });
    const [titleError, setTitleError] = useState(null);
    const [statusError, setStatusError] = useState(null);

    useEffect(() => {
        form.setFieldValue('id', task.id)
        form.setFieldValue('title', task.title)
        form.setFieldValue('description', task.description)
        form.setFieldValue('status', task.status)
        form.setFieldValue('dueDate', task.due_date ? new Date(task.due_date) : null)
    }, []);

    const handleForm = () => {
        form.validate();
        let values = form.getValues();

        if(form.validate().hasErrors) {
            form.validate().errors.title ? setTitleError(form.validate().errors.title) : '';
            form.validate().errors.status ? setStatusError(form.validate().errors.status) : '';
            return false;
        }

        setTitleError(null);
        setStatusError(null);
        axios.post('/api/task/store', {
            id: values.id,
            title: values.title,
            description: values.description,
            status: values.status,
            dueDate: values.dueDate ? `${values.dueDate.getFullYear()}-${values.dueDate.getDay()}-${values.dueDate.getMonth()}` : null,
        }, {
            headers: {
                Authorization: `Bearer ${getCookie('token')}`,
                Accept: 'application/json',
            }
        }).then(r => {
            if(r.status === 200) {
                navigate(0);
            }
        });

    }

    return (
        <Container
            className={"detail"}
        >
            <Box>
                <TextInput
                    style={{contentVisibility: 'hidden'}}
                    disabled
                    key={form.key('id')}
                    value={form.values.id}
                />
                <Grid>
                    <Grid.Col span={8}>
                        <TextInput
                            label="Título"
                            placeholder="Título da Atividade"
                            error={titleError}
                            className={{label:'label'}}
                            size="sm"
                            mb="xs"
                            key={form.key('title')}
                            value={form.values.title}
                            onChange={(event) => form.setFieldValue('title', event.currentTarget.value)}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Select
                            label="Status"
                            placeholder="Status"
                            error={statusError}
                            className={{label:'label'}}
                            size="sm"
                            mb="xs"
                            data={options}
                            key={form.key('status')}
                            value={form.values.status ? form.values.status : null}
                            onChange={(_value, option) => form.setFieldValue('status', option.value)}
                        />
                    </Grid.Col>
                </Grid>

                <Grid>
                    <Grid.Col span={12}>
                        <Textarea
                            label="Descrição"
                            placeholder="Descrição da Atividade"
                            className={{label:'label'}}
                            size="sm"
                            autosize
                            minRows={2}
                            maxRows={6}
                            mb="xs"
                            key={form.key('description')}
                            value={form.values.description}
                            onChange={(event) => form.setFieldValue('description', event.currentTarget.value)}
                        />
                    </Grid.Col>
                </Grid>

                <Grid>
                    <Grid.Col span={6}>
                        <DateInput
                            label="Data de Conclusão"
                            placeholder="Data de Conclusão"
                            className={{label:'label'}}
                            size="sm"
                            mb="xs"
                            valueFormat="DD/MM/YYYY"
                            key={form.key('dueDate')}
                            value={form.values.dueDate}
                            onChange={(date) => form.setFieldValue('dueDate', date)}
                        />
                    </Grid.Col>
                </Grid>

                <Group justify="right" mt={'sm'}>
                    <Button
                        color="pink.6"
                        variant="outline"
                        size={'md'}
                        onClick={handleForm}
                    >
                        Criar Atividade
                    </Button>
                </Group>
            </Box>
        </Container>
    )
}

