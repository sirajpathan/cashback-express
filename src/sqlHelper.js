import sql from './model/db.js';
import {promisify} from 'util';

export const query = promisify(sql.query.bind(sql));