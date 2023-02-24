import firebase from 'firebase/compat/app'
import 'firebase/compat/database'


const db = (
    firebase
        .initializeApp({ projectId: 'onlinebook-fd101' })
        .database()
)


export { db }
