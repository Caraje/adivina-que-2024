

export type RankList = {
  id: string, 
  name: string, 
  avatar: string, 
  points: number
}

export type Networks = {
  network_id: string,
  network_name: string, 
  network_url: string
}

export type LevelsPassed = {
  level_id: string, 
  level_correct: boolean, 
  level_errors: number, 
  level_points: number, 
}
export type User = {
  user_id: string,
  user_name: string,
  user_email: string,
  user_avatar: string,
  user_created: string,
  user_networks: Networks[],
  user_datagame: {
    movies: LevelsPassed[],
    series: LevelsPassed[],
    videogames: LevelsPassed[]
  },
}


export type LevelGame = {
  level_id: string,
  level_category: number,
  level_answers: string[],
  level_images: {img: string}[],
  image_correct: string, 
  level_clue:  {clue: string | clue}[]
}


export type handleNextClue = () => void
export type handleOpenLogin = () => void


export type CreateUser = {
  user_name: string, 
  user_email: string, 
  user_password: string, 
  user_password_repeat: string
}


export type ImageCloudinary = {
  bytes: number,
  created_at: string, 
  format: string, 
  height: string,
  public_id: string,
  url: string,
  version: number,
  width: number
}