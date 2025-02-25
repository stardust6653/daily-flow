// src/auth/default-data.ts

// 타입 정의
interface SubTask {
  task: string;
  order: number;
  complete?: boolean;
}

interface Task {
  statusLabel: string;
  main_task: string;
  memo: string;
  type: string;
  period?: string; // calendar 타입일 때만 존재
  complete?: boolean;
  expenditure?: number;
  subtasks?: SubTask[];
  order: number; // 순서 필드 추가
}

interface Status {
  label: string;
  color: string;
  sub_color: string;
}

interface Category {
  name: string;
  color: string;
  order: number;
  statuses: Status[];
  tasks: Task[];
}

export const DEFAULT_CATEGORIES: Category[] = [
  {
    name: '일상',
    color: '#9994D0',
    order: 1,
    statuses: [
      { label: '진행 전', color: '#9681FF', sub_color: '#F0F1FF' },
      { label: '진행 중', color: '#FF8183', sub_color: '#FFF0F4' },
      { label: '완료', color: '#67CF86', sub_color: '#F0FFF6' },
    ],
    tasks: [
      {
        statusLabel: '진행 전',
        main_task: '운동하기',
        memo: '매일 30분씩 걷기',
        type: 'task',
        period: '', // task 타입이므로 빈 문자열
        order: 0, // 첫 번째 항목
        subtasks: [
          { task: '운동복 준비하기', order: 1 },
          { task: '물병 챙기기', order: 2 },
        ],
      },
      {
        statusLabel: '진행 중',
        main_task: '책 읽기',
        memo: '하루 30페이지 목표',
        type: 'calendar',
        period: '2025-02-15 ~ 2025-03-15', // calendar 타입이므로 기간 지정
        order: 0, // 첫 번째 항목
      },
      {
        statusLabel: '완료',
        main_task: '장보기',
        memo: '마트에서 주간 식품 구매',
        type: 'task',
        period: '', // task 타입이므로 빈 문자열
        complete: true,
        expenditure: 35000,
        order: 0, // 첫 번째 항목
        subtasks: [
          { task: '야채 구매', complete: true, order: 1 },
          { task: '육류 구매', complete: true, order: 2 },
        ],
      },
    ],
  },
  {
    name: '업무',
    color: '#80B99D',
    order: 2,
    statuses: [
      { label: '할 일', color: '#9681FF', sub_color: '#F0F1FF' },
      { label: '진행 중', color: '#FF8183', sub_color: '#FFF0F4' },
      { label: '완료', color: '#67CF86', sub_color: '#F0FFF6' },
    ],
    tasks: [
      {
        statusLabel: '할 일',
        main_task: '회의 준비',
        memo: '다음 주 프로젝트 회의 자료 준비',
        type: 'task',
        period: '', // task 타입이므로 빈 문자열
        order: 0, // 첫 번째 항목
      },
    ],
  },
  {
    name: '약속',
    color: '#E6A4D5',
    order: 3,
    statuses: [
      { label: '예정', color: '#9681FF', sub_color: '#F0F1FF' },
      { label: '완료', color: '#67CF86', sub_color: '#F0FFF6' },
      { label: '취소', color: '#FF8183', sub_color: '#FFF0F4' },
    ],
    tasks: [
      {
        statusLabel: '예정',
        main_task: '친구 만나기',
        memo: '카페에서 저녁 7시',
        type: 'calendar',
        period: '2025-03-01', // calendar 타입이므로 기간 지정
        order: 0, // 첫 번째 항목
      },
    ],
  },
];
