interface EmptyValidationResult {
  isValid: boolean;
  message: string;
}

export const checkDataIsEmpty = (data: string): EmptyValidationResult => {
  const isEmpty = data.trim() === '';

  let message = '';
  if (isEmpty) {
    message = 'Field cannot be empty.';
  }

  const validationResult: EmailValidationResult = {
    isValid: !isEmpty,
    message,
  };

  return validationResult;
};

interface EmailValidationResult {
  isValid: boolean;
  message: string;
}

export const validateEmail = (email: string): EmailValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  const isEmpty = email.trim() === '';

  let message = '';
  if (isEmpty) {
    message = 'Email cannot be empty.';
  } else if (!isValid) {
    message = 'Invalid email format.';
  }

  const validationResult: EmailValidationResult = {
    isValid: !isEmpty && isValid,
    message,
  };

  return validationResult;
};

interface PasswordValidationResult {
  isValid: boolean;
  message: string;
}
export const validatePassword = (
  password: string,
): PasswordValidationResult => {
  // Password validation rules
  const minLength = 8;
  const maxLength = 20;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/.test(password);

  // Check if password meets all the criteria
  const isValidLength =
    password.length >= minLength && password.length <= maxLength;
  const hasValidChars =
    hasUppercase && hasLowercase && hasNumber && hasSpecialChar;

  // Construct the validation result object
  const validationResult: PasswordValidationResult = {
    isValid: isValidLength && hasValidChars,
    message: '',
  };

  // Add validation message based on specific criteria
  if (!isValidLength) {
    validationResult.message = `Password must be between ${minLength} and ${maxLength} characters long.`;
  } else if (!hasUppercase) {
    validationResult.message =
      'Password must contain at least one uppercase letter.';
  } else if (!hasLowercase) {
    validationResult.message =
      'Password must contain at least one lowercase letter.';
  } else if (!hasNumber) {
    validationResult.message =
      'Password must contain at least one numeric digit.';
  } else if (!hasSpecialChar) {
    validationResult.message =
      'Password must contain at least one special character.';
  }

  return validationResult;
};
