import {
  TableTransaction,
  TdTransaction,
  ThTransaction,
  TrTransaction,
} from './transaction.styled';

export const TransactionHistory = ({ transactions }) => (
  <TableTransaction>
    <thead>
      <TrTransaction>
        <ThTransaction>Type</ThTransaction>
        <ThTransaction>Amount</ThTransaction>
        <ThTransaction>Currency</ThTransaction>
      </TrTransaction>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <TrTransaction key={transaction.id}>
          <TdTransaction>{transaction.type}</TdTransaction>
          <TdTransaction>{transaction.amount}</TdTransaction>
          <TdTransaction>{transaction.currency}</TdTransaction>
        </TrTransaction>
      ))}
    </tbody>
  </TableTransaction>
);
