import APP_AXIOS from '../../../core/api/app.service'

export const findPostById = (postId: number) =>
  APP_AXIOS.get(`/posts/${postId || 0}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
