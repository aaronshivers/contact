import database from '../db/firebase'

export const startAddMessage = (messageData = {}) => {

  const {
    name = '',
    email = '',
    title = '',
    body = '',
    createdAt = Date.now()
  } = messageData[0]

  const message = { name, email, title, body, createdAt }

  return database
    .ref(`messages`)
    .push(message)
}
