export const required = value =>
  value ? undefined : <span className="alert">Required</span>;
export const nonEmpty = value =>
  value.trim() !== '' ? (
    undefined
  ) : (
    <span className="alert">Cannot be empty</span>
  );
export const isTrimmed = value =>
  value.trim() === value ? (
    undefined
  ) : (
    <span className="alert">Cannot start or end with whitespace</span>
  );
export const length = length => value => {
  if (length.min && value.length < length.min) {
    return (
      <span className="alert">
        `Must be at least ${length.min} characters long`
      </span>
    );
  }
  if (length.max && value.length > length.max) {
    return (
      <span className="alert">
        `Must be at most ${length.max} characters long`
      </span>
    );
  }
};
export const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim() ? (
    undefined
  ) : (
    <span className="alert">Does not match</span>
  );
