export const POST = 'POST';
export function addPost(text) {
  return {
    type: POST,
    text,
    message: "It was Posted!"
  } 
}

export const RETWEET = 'RETWEET';
export function retweet(id) {
  return {
    type: RETWEET,
    id,
  }
}

export const LIKE = 'LIKE';
export function like(id) {
  return {
    type: LIKE,
    id
  }
}