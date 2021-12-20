import { ErrorBag, Errors, Page, PageProps } from "@inertiajs/inertia";

export interface IUser {
  id: number;
  created_at: string;
  updated_at: string;
  email: string;
  name: string;
  email_verified_at?: string;
  admin: boolean;

  cart_parts?: IUserPart[];
  // provider: string;
  // social_id?: string;
  // social_username?: string;
  // social_avatar?: string;
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
}

export interface IAssignment {
  id: number;

  title: string;
  description: string;
  budget: string;
}

export interface IPart {
  id: number;

  name: string;
  company: string;
  price: string;
  type: string;
}

export interface IPageProps extends Page<PageProps> {
  props: {
    errors: Errors & ErrorBag;
    authenticated: boolean;
    user: IUser;
  };
}
