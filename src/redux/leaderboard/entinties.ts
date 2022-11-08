export interface LeaderboardData {
  totalExperience: number;
  name: string;
}

export interface InitialState {
  leaderboard: LeaderboardData[];
  leaderboardLoading: boolean;
  leaderboardError?: string;
}
