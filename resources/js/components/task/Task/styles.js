import styled from 'styled-components';

export const TaskBefore = styled.div`
    &:before {
        content: '\\2B24';
        margin-right: 10px;
        font-size: 1.1em;
    }

    & {
        color: #141414;
        padding: 5px;
        border-radius: 5px;
        transition: transform .2s;
    }

    &:hover {
        background: rgba(240, 101, 149, 0.6);
        transform: scale(1.03);
        font-weight: bold;
    }
`;

export const DateText = styled.span`
    margin-left: 5px;
    font-size: 0.75em;
`;
