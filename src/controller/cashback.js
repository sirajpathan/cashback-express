import CashbackModel from '../model/cashback';
import { filter } from '../utils';
import { normalizeRecord, errorHandler } from '../utils';

class Cashback {
	/**
	 *
	 * @param {String} username username retrieved from JWT token
	 * @description return promise with cash back data.
	 */
	get(username) {
		return CashbackModel.get(username)
			.then(this._formatData)
			.catch(errorHandler);
	}

	_formatData = (res) => {
		res = res.map(row => filter(row, ['start_date', 'end_date', 'date']));
		//convert object keys from snake_case to camelCase
		res = normalizeRecord(res);

		//limit cashback based on redemption_limit
		let data = this._limitData(res);
		data = data.map(row => filter(row, ['maxLimit', 'rulesetId']));
		return data;
	}

	_limitData = (arr) => {
		let [ruleId, counter, data] = [null, 0, []];
		arr.map(row => {
			if (ruleId !== row.rulesetId) {
				ruleId = row.rulesetId;
				counter = 0;
			}
			counter++;
			if (counter <= row.maxLimit) {
				data.push(row);
			}
		});
		return data;
	}
}

export default Cashback;