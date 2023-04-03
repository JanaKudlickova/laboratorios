import { getMovements, getAccount } from './movements.api';
import { addMovementRows } from './movements.helpers';
import {
  mapMovementsFromApiToVm,
  mapAccountFromApiToVm,
} from './movements.mappers';
import { onSetValues } from '../../common/helpers';
import { history } from '../../core/router';

const params = history.getParams();

let account = {
  balance: '',
  alias: '',
  iban: '',
};

getAccount(params.id).then((apiAccount) => {
  account = mapAccountFromApiToVm(apiAccount);
  onSetValues(account);
});

getMovements(params.id).then((movements) => {
  console.log({ movements });
  const viewModelMovements = mapMovementsFromApiToVm(movements).filter(
    (movement) => movement.accountId === params.id
  );
  addMovementRows(viewModelMovements);
});
