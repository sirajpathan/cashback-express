export function responseInterceptor(req, res, next) {
  var originalSend = res.send;

  res.send = function(){
    arguments[0] = JSON.stringify(arguments[0]);
    originalSend.apply(res, arguments);
  };
  next();
}

export function errorHandler (err) {
  console.log("error: ", err);
  return err;
}

export function errorModifier (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({error: err.message});
}

// database records are snake_cased
export function normalizeRecord (record, isCase) {
  const norm = rec => mapObj(rec, (key, item) => {
      let val = item;
      if (item && typeof item === "object") {
          val = normalizeRecord(item);
      }

      return isCase ? { [toSnake(key)]: val } : { [toCamel(key)]: val };
  });
  return Array.isArray(record) ? record.map(norm) : norm(record);
}

//from camelCase to snake-case
function toSnake (str) {
  return str.split(/(?=^[A-Z])|(?=.*)(?=[A-Z])/g).join("_").toLowerCase();
}

// from snake_case or kebab-case to camelCase
export function toCamel (str) {
  const split = str.split(/-|_/g);
  return split.shift() + split.map(capitalize).join("");
}

export function mapObj (obj, schema) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
      return Object.keys(obj).reduce((defs, key) => {
          return Object.assign(defs, schema(key, obj[key]));
      }, {});
  }
  return obj;
}

export function capitalize (str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function filter (arr, columns) {
  columns.map(col => {
    delete arr[col];
  });
  return arr;
}