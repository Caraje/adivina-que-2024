import { LevelGame } from "@/types/types";

export const exampleLevelsList: LevelGame[] = [
  {
    level_id: '01',
    level_category: 1,
    level_answers: [
      'Back to The Future',
      'Regreso al futuro', 
      'volver al futuro'
    ],
    level_images: [
      {img: './static_img/level/01/regreso01.webp'},
      {img: './static_img/level/01/regreso02.webp'},
      {img: './static_img/level/01/regreso03.webp'},
      {img: './static_img/level/01/regreso04.webp'},
      {img: './static_img/level/01/regreso05.webp'},
    ],
    image_correct: './static_img/level/01/regresoCorrect.webp',
    level_clue: [
      {clue: ''},
      {clue: 'Del año 1985'},
      {clue: 'Fue una trilogia'},
      {clue: 'Eric Stoltz iba a ser el protagonista pero cambiaron tras iniciar el rodaje'},
      {clue: 'A donde vamos no necesitamos carreteras'}
    ]
  },
  {
    level_id: '02',
    level_category: 1,
    level_answers: [
      'The Goonies',
      'Los goonies', 
      'Los goonies'
    ],
    level_images: [
      {img: './static_img/level/02/Goonies01.webp'},
      {img: './static_img/level/02/Goonies02.webp'},
      {img: './static_img/level/02/Goonies03.webp'},
      {img: './static_img/level/02/Goonies04.webp'},
      {img: './static_img/level/02/Goonies05.webp'}
    ],
    image_correct: './static_img/level/02/Correct.webp',
    level_clue: [
      {clue: null},
      {clue: 'Del año 1985'},
      {clue: 'Pelicula de aventuras'},
      {clue: 'Dirigida por Richar Donner'},
      {clue: 'Gordi, tienes que hacer el supermeneo'}
    ]
  },
  {
    level_id: '03',
    level_category: 1,
    level_answers: [
      'The Naked Gun',
      'Agárralo como puedas', 
      '¿Y dónde está el policía?'
    ],
    level_images: [
      {img: './static_img/level/03/naked01.webp'},
      {img: './static_img/level/03/naked02.webp'},
      {img: './static_img/level/03/naked03.webp'},
      {img: './static_img/level/03/naked04.webp'},
      {img: './static_img/level/03/naked05.webp'},
    ],
    image_correct: './static_img/level/03/nakedCorrect.webp',
    level_clue:  [
      {clue: null},
      {clue: 'Estrenada en 1988'},
      {clue: 'Basada en una serie con una temporada'},
      {clue: 'Una disparatada comedia'},
      {clue: 'Protagonizada por Leslie Nielsen'}
    ]
  },
]