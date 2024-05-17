import { Container, Box } from './styles.js';
import { TextInput, Select, Grid, Textarea, Button, Group } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { yupResolver } from 'mantine-form-yup-resolver';
import * as yup from 'yup';

export function Detail() {
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
        title: yup.string().required('Título é obrigatório'),
        description: yup.string(),
        dueDate: yup.date(),
        status: yup.string().required('Status é obrigatória'),
    });
    const form = useForm({
        initialValues: {
            title: '',
            description: '',
            dueDate: '',
            status: ''
        },
        validate: yupResolver(schema)
    });

    return (
        <Container>
            <Box>
                <Grid>
                    <Grid.Col span={7}>
                        <TextInput
                            label="Título"
                            placeholder="Título da Atividade"
                            size="md"
                            mb="xs"
                            key={form.key('title')}
                            value={form.values.title}
                            onChange={(event) => form.setFieldValue('title', event.currentTarget.value)}
                        />
                    </Grid.Col>
                    <Grid.Col span={5}>
                        <Select
                            label="Status"
                            placeholder="Status"
                            size="md"
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
                            size="md"
                            autosize
                            minRows={2}
                            maxRows={6}
                            mb="xs"
                            key={form.key('description')}
                            value={form.values.description}
                            onChange={(event) => form.setFieldValue('description', event.currentTarget.description)}
                        />
                    </Grid.Col>
                </Grid>

                <Grid>
                    <Grid.Col span={6}>
                        <DateInput
                            label="Data de Conclusão"
                            placeholder="Data de Conclusão"
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
                    >
                        Cadastrar
                    </Button>
                </Group>
            </Box>
        </Container>
    )
}

