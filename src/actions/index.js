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