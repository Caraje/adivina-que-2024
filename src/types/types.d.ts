

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

export type User = {
  user_id: string,
  user_name: string,
  user_email: string,
  user_avatar: string,
  user_created: string,
  user_networks: Networks[],
  user_datagame: {
    movies: {
      level_id: string, 
      level_correct: boolen, 
      level_errors: number, 
      level_points: number, 
    }[],
    series: {
      level_id: string, 
      level_correct: boolen, 
      level_errors: number, 
      level_points: number, 
    }[],
    videogames: {
      level_id: string, 
      level_correct: boolen, 
      level_errors: number, 
      level_points: number, 
    }[]
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