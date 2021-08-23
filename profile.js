firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
        firebase.database().ref(`users/${uid}`).once('value', (data) => {
            let username = document.getElementById("username");
            let email = document.getElementById("email");
            let userprofile = document.getElementById("userprofile");
            username.innerHTML = data.val().username;
            email.innerHTML = data.val().email
            userprofile.setAttribute('src', data.val().profile)
            console.log(data.val())
        })
    } else {
        window.location = "index.html"
    }
});
var storageRef = firebase.storage().ref();
var files = [];
document.getElementById("pictures").addEventListener("change", function (e) {

    console.log("change occurs")
    files = e.target.files;
});



let addData = async () => {
    let dish = document.getElementById("dish");
    let price = document.getElementById("price");
    let picture = document.getElementById("picture");
    const rUid = firebase.auth().currentUser.uid;
  





    var metadata = {
        contentType: 'image/jpeg',
    };
    console.log(rUid, "aaaaaaaaaaaaaaaaaaaaaaa");
    // var uploadTask = storageRef.child('images/' + files[0].name).put(files[0], metadata);



    // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    //     (snapshot) => {
    //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         console.log('Upload is ' + progress + '% done');
    //         switch (snapshot.state) {
    //             case firebase.storage.TaskState.PAUSED: // or 'paused'
    //                 console.log('Upload is paused');
    //                 break;
    //             case firebase.storage.TaskState.RUNNING: // or 'running'
    //                 console.log('Upload is running');
    //                 break;
    //         }
    //     },
    //     (error) => {
    //         // A full list of error codes is available at
    //         // https://firebase.google.com/docs/storage/web/handle-errors
    //         switch (error.code) {
    //             case 'storage/unauthorized':
    //                 // User doesn't have permission to access the object
    //                 break;
    //             case 'storage/canceled':
    //                 // User canceled the upload
    //                 break;

    //             // ...

    //             case 'storage/unknown':
    //                 // Unknown error occurred, inspect error.serverResponse
    //                 break;
    //         }
    //     },
    //     () => {
    //         // Upload completed successfully, now we can get the download URL
    //         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {

    //             console.log('File available at', downloadURL);
    //             var image = downloadURL;

    //             try {
    //                 var putDish = await firebase.database().ref(`dishes`).set({
    //                     dish: dish.value,
    //                     price: price.value,
    //                     picture: picture.value,
    //                     resturantId: rUid,
    //                     dishImage: image
    //                 })
    //             } catch (e) {
    //                 console.log(e)
    //             }
    //         });
    //     }
    // );


}





let logout = () => {
    firebase.auth().signOut()
        .then(() => {
            window.location = "login.html"
        })
}

