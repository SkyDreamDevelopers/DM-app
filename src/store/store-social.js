import { firebaseDb } from 'boot/firebase'
import { firebaseAuth } from 'boot/firebase'

const state = {
        media: [
        //     {
        //     "Facebook" : {
        //             name : 'Hello',
        //             Followers: 50,
        //             Images: 40
                
        //     },
        // },{
        //       "Google": {
        //             name: 'World',
        //             Pages: 2,
        //             Sessions: 44,
        //             Users: 33,
        //       }
        //     }
            ]
    }
const getters = {
        media: state => state.media
    }
const mutations = {
        addMedia(state, payload) {
            state.media.push(payload);
        }
    }
const actions = {
        readData({ commit }) {
            let userId = firebaseAuth.currentUser.uid
            let userMedia = firebaseDb.ref('media/'+ userId)

            // child added 
            userMedia.on('child_added', snapshot => {
                let key = snapshot.ref.key;
                let media = snapshot.val()

                let payload = {
                    mediaName: key,
                    mediafull: media
                }
               
               commit('addMedia', payload)
                
            })
        }
    }


    export default {
        namespaced: true,
        state,
        actions,
        getters,
        mutations
      };