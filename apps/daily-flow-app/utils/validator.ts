type DataType = Record<string, any>;

interface ResultType {
  test: (data: DataType) => boolean;
  message: string;
}

interface RulesType {
  required: (field: string) => ResultType;
  email: (field: string) => ResultType;
  password: (field: string) => ResultType;
  minLength: (field: string, length: number) => ResultType;
  matches: (field1: string, field2: string) => ResultType;
}

export const rules: RulesType = {
  required: (field: string) => ({
    test: (data: DataType) => Boolean(data[field]),
    message: `${field}은(는) 필수입니다`,
  }),
  email: (field: string) => ({
    test: (data: DataType) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data[field] || ""),
    message: `유효한 이메일 형식이 아닙니다`,
  }),
  password: (field: string) => ({
    test: (data: DataType) => /[!@#$%^&*(),.?":{}|<>]/.test(data[field] || ""),
    message: `비밀번호는 특수문자를 포함해야 합니다`,
  }),
  minLength: (field: string, length: number) => ({
    test: (data: DataType) => (data[field] || "").length >= length,
    message: `${field}은(는) ${length}자 이상이어야 합니다`,
  }),
  matches: (field1: string, field2: string) => ({
    test: (data: DataType) => data[field1] === data[field2],
    message: `${field1}와 ${field2}가 일치하지 않습니다`,
  }),
};

// 벨리데이터 생성 함수
// rules: 벨리데이터 규칙 배열
export const createValidator = (rules: ResultType[]) => {
  return (data: DataType) => rules.every((rule) => rule.test(data));
};
