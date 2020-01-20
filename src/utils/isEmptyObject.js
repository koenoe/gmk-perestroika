// @flow
export default function isEmptyObject(object: Object): boolean {
  return Object.values(object).every(v => v === 0);
}
