export interface AuthState {
  loading: boolean;
  email: string;
  name?: string;
  error?: string;
  data?: UserData;
  badges?: Badge[];
  avatar?: string;
  avatarLoading?: boolean;
}

export interface SerializedError {
  response: {
    data: {
      message: string;
    };
  };
}

export interface SignUpPayload {
  email: string;
  password: string;
  name: string;
}

export interface SignUpResponse {
  email: string;
  password: string;
  name: string;
  data: UserData;
}

export interface SignInResponse {
  email: string;
  name: string;
  data: UserData;
  avatar: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}
export interface ResetPayload {
  email: string;
}
export interface UserData {
  level: number;
  totalExperience: number;
  rank: number;
  balance: number;
}

export interface Badge {
  badgeColor: string;
  borderColor: string;
  iconBackground: string;
  description: string;
  title: string;
  name: string;
  bronze: string;
  silver: string;
  gold: string;
  icon: string;
}

export interface Avatar {
  _parts: [[string, {name: string; uri: string; type: string}]];
}
