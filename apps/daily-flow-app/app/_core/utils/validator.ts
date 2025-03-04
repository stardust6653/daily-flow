type DataType = Record<string, any>;

interface ResultType {
  test: (data: DataType) => boolean;
  message: string;
}

interface ExtendedResultType extends ResultType {
  field: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

interface RulesType {
  required: (field: string) => ExtendedResultType;
  email: (field: string) => ExtendedResultType;
  password: (field: string) => ExtendedResultType;
  minLength: (field: string, length: number) => ExtendedResultType;
  matches: (field1: string, field2: string) => ExtendedResultType;
}

export const rules: RulesType = {
  required: (field: string) => ({
    test: (data: DataType) => Boolean(data[field]),
    message: `${field}은(는) 필수입니다`,
    field,
  }),
  email: (field: string) => ({
    test: (data: DataType) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data[field] || ""),
    message: `유효한 이메일 형식이 아닙니다`,
    field,
  }),
  password: (field: string) => ({
    test: (data: DataType) => /[!@#$%^&*(),.?":{}|<>]/.test(data[field] || ""),
    message: `비밀번호는 특수문자를 포함해야 합니다`,
    field,
  }),
  minLength: (field: string, length: number) => ({
    test: (data: DataType) => (data[field] || "").length >= length,
    message: `${field}은(는) ${length}자 이상이어야 합니다`,
    field,
  }),
  matches: (field1: string, field2: string) => ({
    test: (data: DataType) => data[field1] === data[field2],
    message: `${field1}와 ${field2}가 일치하지 않습니다`,
    field: "password-confirm",
  }),
};

// 벨리데이터 생성 함수
// rules: 벨리데이터 규칙 배열
export const createValidatorWithError = (rules: ExtendedResultType[]) => {
  return (data: DataType): ValidationResult => {
    const errors: Record<string, string> = {};
    let isValid = true;

    rules.forEach((rule) => {
      const valid = rule.test(data);
      if (!valid) {
        const field = rule.field;
        if (!errors[field]) errors[field] = "";
        errors[field] = rule.message;
        isValid = false;
      }
    });

    return { isValid, errors };
  };
};
