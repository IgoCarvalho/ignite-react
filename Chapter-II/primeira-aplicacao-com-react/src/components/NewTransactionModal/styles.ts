import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: var(--input-background);
    border: 1px solid var(--input-border);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

    &:hover {
      border-color: var(--input-border-hover);
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: filter 200ms;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'red' | 'green';
}

const colors = {
  red: '--radio-box-red',
  green: '--radio-box-green',
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid var(--input-border);
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive ? `var(${colors[props.activeColor]})` : 'transparent'};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &:hover {
    border-color: var(--input-border-hover);
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 1rem;
    color: var(--text-title);
  }
`;
