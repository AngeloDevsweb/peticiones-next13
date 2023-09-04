import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'

export default function Usuario() {
    const router = useRouter()
    const {query} = useRouter()
    const {id} = query

    //console.log(id);

    const [userSingle, setUserSingle] = useState({})

    useEffect(()=>{
        async function peticionUser(){
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const user = await res.json();
            setUserSingle(user)
        }
        peticionUser()
    },[])

  return (
    <div>
        <h1>INFORMACION DEL USUARIO</h1>
        <br />
        <h3>name: {userSingle.name}</h3>
        <h3>username {userSingle.username}</h3>
        <h3>phone {userSingle.phone}</h3>
        <h3>email {userSingle.email}</h3>
        <h3>website {userSingle.website}</h3>
        <button onClick={()=>router.push('/')}>
            Volver al inicio
        </button>
    </div>
  )
}
