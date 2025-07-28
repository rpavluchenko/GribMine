export enum Role {
  youtube = 'youtube',
  moderator = 'moderator',
  curator = 'curator',
  admin = 'admin',
  user = 'user',
}

export interface IUser {
  email: string
  login: string
  password: string
  role: Role
  created_at: Date
  updated_at: Date
  profile: Profile
  restrictions: Restrictions
  referral: Referral
}

export interface Referral {
  balance: number
  usage: number
  referral_percent: number
  referral_code: string
}

export interface Profile {
  balance: number
  updated_at: Date
  user: IUser
  access?: Access
}

export interface Access {
  is_buy: boolean
  is_gifted: boolean
  by?: string
  date_from?: Date
  profile: Profile
}

export interface Restrictions {
  banned: boolean
  banned_case?: string
  reason?: string
  date?: Date
  user: IUser
}
