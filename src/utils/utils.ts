interface IValidationInput {
  elementId: string;
  regexp: string;
}

interface IInputsValidationResults {
  inputName: string;
  inputValue: string;
  validationOk: boolean;
}

/**
 * Делает валидацию инпута, устанавливая соответствующие классы,
 * при успешной валидации возвращает объект с полями inputName, inputValue и validationOk
 * */
export const validateInput = (elementId: string, regexp: RegExp | string): IInputsValidationResults => {
  const input = document.getElementById(elementId) as HTMLInputElement;
  const reg = new RegExp(regexp);
  const validationOk = reg.test(input.value);

  if (validationOk) {
    input.classList.remove('input-error');
    input.classList.add('input-normal');
  } else {
    input.classList.remove('input-normal');
    input.classList.add('input-error');
  }

  return {
    validationOk: validationOk,
    inputName: input.name,
    inputValue: input.value,
  };
};

/**
 * Делает валидацию инпутов, устанавливая соответствующие классы,
 * при успешной прохождении валидации всех инпутов выводит объект в консоль.
 * */
export const validateInputs = (...items: IValidationInput[]) => {
  const inputsValidationResult = items.map((item) => validateInput(item.elementId, item.regexp));

  if (inputsValidationResult.every((item) => item.validationOk)) {
    // eslint-disable-next-line no-console
    console.log(inputsValidationResult.reduce((acc, item) => Object.assign(acc, { [item.inputName]: item.inputValue }), {}));
  }
};
