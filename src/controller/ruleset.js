import RulesetModel from '../model/ruleset';
import { errorHandler } from '../utils';

class Ruleset {
	/**
	 *
	 * @param {Object} body user's input provided in API call
	 * @description Creates rule for cash back in 'ruleset' table.
	 */
    create (body) {
        return RulesetModel.create(body)
			.then(() => ({msg: 'success'}))
			.catch(errorHandler);
    }
}

export default Ruleset;