export const mapMovementsFromApiToVm = (movements) => {
  return movements.map((movement) => mapMovementFromApiToVm(movement));
};

const mapMovementFromApiToVm = (movement) => {
  return {
    id: movement.id,
    description: movement.description,
    amount: `${movement.amount} €`,
    balance: `${movement.balance} €`,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
    accountId: movement.accountId,
  };
};

export const mapAccountFromApiToVm = (account) => {
  return {
    balance: account.balance,
    alias: account.name,
    iban: account.iban,
  };
};
