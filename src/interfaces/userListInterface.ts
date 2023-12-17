export interface IResponseGetUsers {
  data: IUserInfo[];
  pages: number;
}

export interface IUserInfo {
  id: string;
  email: string;
  tg_id: null;
  name: string;
  password: null;
  avatar: null;
  created_at: string;
  role: string;
  subscription: ISubscription;
}

export interface ISubscription {
  id: string;
  plan_id: string;
  user_id: string;
  tokens: number;
  additional_tokens: number;
  created_at: string;
  plan: IPlan;
}

export interface IPlan {
  id: string;
  type: string;
  price: number;
  currency: string;
  tokens: number;
}
