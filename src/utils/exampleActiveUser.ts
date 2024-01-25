import { User } from "@/types/types";

export const exampleUser: User ={
  user_id: '1',
  user_name: 'Caraje',
  user_email: 'test@test.com',
  user_avatar: './static_img/avatars/02.jpg',
  user_created: 'fecha',
  user_networks: [
    {
      network_id: '1', 
      network_name: 'Twitter', 
      network_url: 'https://www.google.com'
    },
    {
      network_id: '2', 
      network_name: 'Instagram', 
      network_url: 'https://www.google.com'
    },
    {
      network_id: '3', 
      network_name: 'youtube', 
      network_url: 'https://www.google.com'
    },
    {
      network_id: '4', 
      network_name: 'twitch', 
      network_url: 'https://www.google.com'
    },
  ],
  user_datagame: {
    movies: [
      {
        level_id: 'da9fdcd9-2a48-4d13-9d21-f0a4dcc1b813',
        level_correct: true, 
        level_errors: 2,
        level_points: 3
      },
      {
        level_id: 'e7a37ace-15da-4ad2-ba46-f1a06a6e07ba',
        level_correct: false, 
        level_errors: 5,
        level_points: 0
      },
      {
        level_id: 'f79baa81-7024-4977-9c8d-f277d6d13213',
        level_correct: true, 
        level_errors: 3,
        level_points: 2
      },
      {
        level_id: '4',
        level_correct: true, 
        level_errors: 2,
        level_points: 3
      },
      {
        level_id: '5',
        level_correct: false, 
        level_errors: 5,
        level_points: 0
      },
      {
        level_id: '6',
        level_correct: true, 
        level_errors: 2,
        level_points: 3
      },
    ],
    series: [
      {
        level_id: '1',
        level_correct: true, 
        level_errors: 2,
        level_points: 3
      },
      {
        level_id: '2',
        level_correct: false, 
        level_errors: 5,
        level_points: 0
      },
      {
        level_id: '3',
        level_correct: true, 
        level_errors: 3,
        level_points: 2
      },
      {
        level_id: '4',
        level_correct: true, 
        level_errors: 2,
        level_points: 3
      },
      {
        level_id: '5',
        level_correct: false, 
        level_errors: 5,
        level_points: 0
      },
      {
        level_id: '6',
        level_correct: true, 
        level_errors: 2,
        level_points: 3
      },
    ],
    videogames: [
      {
        level_id: '1',
        level_correct: true, 
        level_errors: 2,
        level_points: 3
      },
      {
        level_id: '2',
        level_correct: false, 
        level_errors: 5,
        level_points: 0
      },
      {
        level_id: '3',
        level_correct: true, 
        level_errors: 3,
        level_points: 2
      },
      {
        level_id: '4',
        level_correct: true, 
        level_errors: 2,
        level_points: 3
      },
      {
        level_id: '5',
        level_correct: false, 
        level_errors: 5,
        level_points: 0
      },
      {
        level_id: '6',
        level_correct: true, 
        level_errors: 2,
        level_points: 3
      },
    ]
  }
}