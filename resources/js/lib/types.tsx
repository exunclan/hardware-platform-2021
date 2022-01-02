import { ErrorBag, Errors, Page, PageProps } from "@inertiajs/inertia";

export interface IUser {
  id: number;

  email: string;
  name: string;
  email_verified_at?: string;
  admin: boolean;

  cart_parts?: IUserPart[];
  cart_parts_count?: number;
  // provider: string;
  // social_id?: string;
  // social_username?: string;
  // social_avatar?: string;
  created_at: string;
  updated_at: string;
}
export interface IUserPart {
  id: number;

  user_id: number;
  part_id: number;
  buy_price: string;
  bought_at: string;
  sell_price?: string;
  sold_at?: string;

  part?: IPart;

  created_at: string;
  updated_at: string;
}

export interface IAssignment {
  id: number;

  title: string;
  description: string;
  budget: string;
  active: boolean;

  created_at: string;
  updated_at: string;
}

export interface IPart {
  id: number;

  name: string;
  company: string;
  price: string;
  type: string;

  created_at: string;
  updated_at: string;
}

export interface IPartPrice {
  id: number;

  part_id: number;
  price: string;

  created_at: string;
  updated_at: string;
}

export interface IPageProps extends Page<PageProps> {
  props: {
    errors: Errors & ErrorBag;
    authenticated: boolean;
    user: IUser;
  };
}
