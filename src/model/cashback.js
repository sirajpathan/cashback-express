import { errorHandler } from '../utils';
import { query } from '../sqlHelper';
const CashbackModel = function () { };

CashbackModel.get = async ({ username }) => {
  return query(`SELECT transaction.id, transaction.date, ruleset.id as ruleset_id, ruleset.start_date, ruleset.end_date, ruleset.cashback, ruleset.redemption_limit as max_limit from ruleset
                    INNER JOIN transaction
                    ON (DATE(ruleset.start_date) <= DATE(DATE_FORMAT(transaction.date, '%Y-%m-%d')))
                    AND (DATE(ruleset.end_date) >= DATE(DATE_FORMAT(transaction.date, '%Y-%m-%d')))
                    AND transaction.customer_id=? GROUP BY (transaction.id) ORDER BY ruleset.id`, [username])
    .then(data => data)
    .catch(errorHandler);

};

export default CashbackModel;