import { normalizeRecord, errorHandler } from '../utils';
import { query } from '../sqlHelper';

const RulesetModel = function () {};

RulesetModel.create = (data) => {
    return query("INSERT INTO ruleset SET ?", normalizeRecord(data, true))
    .then(res => res)
    .catch(errorHandler);
};

export default RulesetModel;