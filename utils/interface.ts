// 共用
export interface ILink {
  name: string;
  link: string;
  dropdown: { item: string; link: string }[];
}

export interface IIntro {
  title: string;
  engTitle: string;
  description: string;
  cover: string;
}

// 首頁
export interface ICarousel {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface IIcon {
  name: string;
  class: string;
  link: string;
}

export interface INews {
  type: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  link: string;
}

export interface IService {
  type: string;
  image: object;
}

export interface ICase {
  case: string;
  type: string;
  date: string;
  description: string;
  coverUrl: string;
  imageUrl: string;
  link: string;
  fliped: boolean;
}

export interface IPartner {
  name: string;
  imageUrl: string;
  link: string;
}

export interface Intro {
  title: string;
  engTitle: string;
  description: string;
}

// 資訊公告
export enum newsType {
  company = '公司資訊',
  shoppingArea = '商圈資訊',
  tech = '科技新知'
}

export interface INewsTab {
  label: string;
  type: string;
}

// 關於我們
export interface IMilestone {
  time: string;
  title: string;
  description: string;
}

export interface IDepartment {
  department: string;
  description: string;
  imageUrl?: string;
  image: object;
}

// 奧圖服務
export interface IServiceHero {
  contentAlign: 'left' | 'right' | 'no-pic';
  index: string;
  title: string;
  description: string;
  imageUrl: string;
  hypertext: string;
  hyperlink: string;
  backgroundColor?: string;
}

// 成功案例
export enum caseType {
  ALL = '總覽',
  DI = '數位互動',
  CMS = '雲控播',
  WEB = '網頁建置',
  SHI = '軟硬體整合',
  HI = '硬體整合'
}

export interface IRecommemded {
  title: string;
  description: string;
  type: string;
  path: string;
  cover: string;
}

export interface IBriefCase {
  id: number;
  type: caseType;
  title: string;
  description: string;
  imageUrl: string;
}

// 商洽聯繫
export interface IFormData {
  brandCompany: string;
  position: string;
  contactPerson: string;
  email: string;
  contactNumber: string;
  extension: number | null;
  subject: string;
  contents: string;
}
