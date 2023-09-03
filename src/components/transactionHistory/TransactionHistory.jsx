import { TableTransaction } from "./table-style";
import { TdTransaction } from "./tdTransaction-style";
import { ThTransaction } from "./thTransaction-style";
import { TrTransaction } from "./trTrabsactions-style";

export const TransactionHistory = ({transactions}) => (
    <TableTransaction className="transaction-history">
        <thead>
            <TrTransaction>
            <ThTransaction>Type</ThTransaction>
            <ThTransaction>Amount</ThTransaction>
            <ThTransaction>Currency</ThTransaction>
            </TrTransaction>
        </thead>
        <tbody>
            {transactions.map(transaction => (
                <TrTransaction className="line-table" key={transaction.id}>
                    <TdTransaction className="type-value">{transaction.type}</TdTransaction>
                    <TdTransaction className="amount-value">{transaction.amount}</TdTransaction>
                    <TdTransaction className="currency-value">{transaction.currency}</TdTransaction>
                </TrTransaction>
            ))}
        </tbody>
  </TableTransaction>
)