"use client"
import React, { useEffect, useState } from 'react'
import style from "./writePage.module.css"
import Image from 'next/image'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.snow.css'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {app} from "@/utils/firebase"

const storage = getStorage(app);

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [media, setMedia] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const { status} = useSession();
  

  const router = useRouter();

  useEffect(()=> {
    const upload = ()=>{
    const name = new Date().getTime + file.name;
    const storageRef = ref(storage, name);


    const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {}, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );

    }  
    file && upload();
  },[file]);

  if(status === "loading"){
    return <div className={style.loading}><h1>Loading . . . .</h1> </div>
  }

  if (status === "unauthenticated"){
    router.push('/');
  }

  const slugify = (str) => 
    str .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g,"")
    .replace(/[\s_-]+/g,"_")
    .replace(/^-+-+$/g,"");


  const handleSubmit = async ()=> {
    const res = await fetch("api/posts",{
      method: "POST",
      body: JSON.stringify({
        title,
        desc:value,
        img:media,
        slug:slugify(title),
        catSlug: catSlug || "none",
      }),
    });
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };
  
  return (
    <div className={style.container}>
      <input type='text' placeholder='Judul' className={style.input} onChange={e=>setTitle(e.target.value)}/>
      <select className={style.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="politik">Politik</option>
        <option value="musik">Musik</option>
        <option value="sosial">Sosial</option>
        <option value="olahraga">Olahraga</option>
        <option value="film">Film</option>
      </select>
      <div className={style.editor}>
        <button className={style.button} onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="" width={16} height={16}/>
        </button>
        { open && (
            <div className={style.add}>
              <input type='file' id="image" 
                onChange={e=>setFile(e.target.files[0])}
                style={{display:"none"}}
              />
              
                <button className={style.addButton}>
                  <label htmlFor='image'>
                    <Image src="/image.png" alt="" width={16} height={16} />
                    </label>
                </button>
              
                <button className={style.addButton}>
                    <Image src="/external.png" alt="" width={16} height={16} />
                </button>
            </div>
        )}
        <ReactQuill 
            className={style.textArea}
            theme='bubble' 
            value={value} 
            onChange={setValue} 
            placeholder='tuliskan idemu ....'/>
      </div>
      <button className={style.publish} onClick={handleSubmit}>Publish</button>
    </div>
  );
}

export default WritePage;
