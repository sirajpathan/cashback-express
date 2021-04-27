import TransactionModel from '../model/transaction';
import { errorHandler } from '../utils';

class Transaction {
	/**
	 *
	 * @param {Object} body username username retrieved from JWT token
	 * @description Creates transaction and stores in transaction table.
	 */
    create ({username}) {
		var date = new Date();
		//Using UTC date to avoid conflicts if we are deploying to different regions
		const fullDate = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;
		
		const transaction = {
			'customerId': username,
			'date': fullDate
		}

        return TransactionModel.create(transaction)
			.then(data => ({transactionId: data}))
			.catch(errorHandler);
    }
}

export default Transaction;