import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { api } from '../../services/api';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type TransactionType = 'deposit' | 'withdraw';

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [transactionTitle, setTransactionTitle] = useState('');
  const [transactionValue, setTransactionValue] = useState(0);
  const [transactionCategory, setTransactionCategory] = useState('');

  const [transactionType, setTransactionType] =
    useState<TransactionType>('deposit');

  function handleCreateNewTransaction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = {
      title: transactionTitle,
      value: transactionValue,
      category: transactionCategory,
      type: transactionType,
    };

    api.post('transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="FEchar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={transactionTitle}
          onChange={(event) => setTransactionTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={transactionValue}
          onChange={(event) => setTransactionValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={transactionType === 'deposit'}
            onClick={() => setTransactionType('deposit')}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />

            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={transactionType === 'withdraw'}
            onClick={() => setTransactionType('withdraw')}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />

            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={transactionCategory}
          onChange={(event) => setTransactionCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
