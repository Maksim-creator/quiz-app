export interface LeaderboardData {
  totalExperience: number;
  name: string;
  avatar?: string;
}

export interface InitialState {
  leaderboard: LeaderboardData[];
  leaderboardLoading: boolean;
  leaderboardError?: string;
  leaderLoading?: boolean;
  leader?: LeaderboardData;
  leaderError?: string;
}
