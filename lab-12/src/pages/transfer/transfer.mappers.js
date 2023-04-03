export const mapTransferFromVmToApi = (transfer) => {
  return {
    originAccount: transfer.originAccount,
    iban: transfer.iban,
    name: transfer.name,
    amount: transfer.amount,
    concept: transfer.concept,
    notes: transfer.notes,
    day: transfer.day,
    month: transfer.month,
    year: transfer.year,
    date: new Date(transfer.date).toLocaleDateString(),
    email: transfer.email,
  };
};
