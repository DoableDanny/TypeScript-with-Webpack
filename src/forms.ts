export const formData = (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input');
  // values is is an object where each property has to be a string and each value has to be a string.
  let values: { [prop: string]: string } = {};

  inputs.forEach((input) => {
    values[input.id] = input.value;
  });

  return values;
};
