export interface AuthState {
  loading: boolean;
  email: string;
  name?: string;
  error?: string;
  data?: UserData;
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
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface UserData {
  level: number;
  totalExperience: number;
  rank: number;
  balance: number;
}
