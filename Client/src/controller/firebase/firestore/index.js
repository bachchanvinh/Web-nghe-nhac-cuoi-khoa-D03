import * as firestore from "firebase/firestore";
import db from '../init'


///push data of music to firebase
export async function addDataMusic(music, ind) {
  try {
    const docRef = await firestore.addDoc(firestore.collection(db, "musics"), {
      uid: ind + 1,
      name: music.name,
      singer: music.singer,
      img_src: music.img_src,
      src: music.src,
    });
    console.log("Document written with ID: ", docRef.id);
    // updateDocument(docRef, docRef.id)//update UID
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function addDataUser(username, src, uid) {
  try {
    const docRef = await firestore.addDoc(firestore.collection(db, "users"), {
      uid: uid,
      userName: username,
      likedMusic: [],
      friendList: [],
      ava_src: src
    });
    console.log("Document written with ID: ", docRef.id);
    // updateDocument(docRef, docRef.id)//update UID
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function updateDocument(ref, uid) {
  await firestore.updateDoc(ref, {
    uid: uid
  });
}
//-------------------------------------------------------------------------------------------------
//Read data
export async function getMusics(music, callBack) {
  try {
    try {
      const querySnapshot = await firestore.getDocs(firestore.collection(db, "musics"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        music.push(doc.data())

      });
    } catch (e) {
      console.error("Error get music ", e);
    }
    music.sort((a, b) => a.uid - b.uid);
    callBack(music)

  } catch (e) {
    console.log(e)
  }

}

