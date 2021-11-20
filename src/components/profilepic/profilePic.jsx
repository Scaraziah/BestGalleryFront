import React, {useState} from "react";
import { render } from "react-dom";
import { storage, app } from "../firebase/firebase"
import 'firebase/storage';
import deerBarn from '../images/deerBarn.png'
import { getStorage, ref } from "firebase/storage";

const ReactFirebaseFileUpload = () => {    
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const imagesRef = ref(storage, 'images');

    const handleChange = e => {
        if (e.target.files[0]){
            setImage(e.target.files[0])
        }    
    }

    const handleUpload = () => {
        const uploadTask = storage.imagesRef(`${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .imagesRef("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url)
                    })
            }
        )
    };

    console.log( "image: ", image);

    return(
        <div>
            <progress value={progress} max = "100" />
            <br />
            <input type="file" onChange={handleChange} />
            <button onClick = {handleUpload}>Upload</button>
            <br />
            {url}
        </div>    
    );
}


export default ReactFirebaseFileUpload;