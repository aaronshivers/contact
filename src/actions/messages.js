import database from '../db/firebase'

export const startAddMessage = (messageData = {}) => {

  const {
    username = '',
    email = '',
    title = '',
    body = '',
    createdAt = Date.now()
  } = messageData[0]

  const message = { username, email, title, body, createdAt }

  return database
    .ref(`messages`)
    .push(message)
}
