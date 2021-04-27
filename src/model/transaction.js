import { normalizeRecord, errorHandler } from '../utils';
import { query } from '../sqlHelper';

const TransactionModel = function () {};

TransactionModel.create = (data) => {
  return query("INSERT INTO transaction SET ?", normalizeRecord(data, true))
  .then(res => res.insertId)
  .catch(errorHandler);    
};

export default TransactionModel;