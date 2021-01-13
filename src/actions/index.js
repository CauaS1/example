export const POST = 'POST';
export function addPost(text) {
  return {
    type: POST,
    text,
    message: "It was Posted!"
  } 
}
