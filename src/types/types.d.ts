

export type RankList = {
  id: string, 
  name: string, 
  avatar: string, 
  points: number
}

type Networks = {
  network_id: string,
  network_name: string, 
  network_url: string
}

type Level = {
  level_id: string, 
  level_correct: string, 
  level_errors: number, 
  level_points: number, 
}
type DataGame = {
  movies: Level[],
  series: Level[],
  videogames: Level[]
}
export type User = {
  user_id: string,
  user_name: string,
  user_email: string,
  user_avatar: string,
  user_created: string,
  user_networks: Networks[],
  user_datagame: DataGame,
}