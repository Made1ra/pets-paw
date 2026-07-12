export function buildSearchQuery(object: Record<string, unknown>) {
  let query = "";
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];
      if (value) {
        query += `${key}=${value}&`;
      }
    }
  }

  return query.length > 1 ? query.slice(0, query.length - 1) : query;
}
