import { newsType, caseType } from './interface';

// computed: 資訊公告分類標籤
export const computedNewsType = (type: string): newsType | '' => {
  switch (type) {
    case 'company':
      return newsType.company;

    case 'shopping-area':
      return newsType.shoppingArea;

    case 'tech':
      return newsType.tech;

    default:
      return '';
  }
};

// computed: 案例分類標籤
export const computedCaseType = (type: string): caseType | '' => {
  switch (type) {
    case 'DI':
      return caseType.DI;

    case 'CMS':
      return caseType.CMS;

    case 'WEB':
      return caseType.WEB;

    case 'SHI':
      return caseType.SHI;

    case 'HI':
      return caseType.HI;

    default:
      return '';
  }
};

// function: 隨機獲取陣列中 n 個元素
export const handleGetRandomElements = (arr: any, n: number) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }
  return result;
};
