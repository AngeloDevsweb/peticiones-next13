import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [usu, setUsu] = useState([])

  useEffect(()=>{
    async function peticion(){
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setUsu(users)
    }
    peticion()
  },[])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {
          usu.map((usuario)=>(
            <ul key={usuario.id}>
              <li>nombre: {usuario.name}</li>
              <li>usuario: {usuario.username}</li>
              <h3>Direccion: {usuario.address.street}</h3>
              <button>
                <Link href={`/usuario/${usuario.id}`} >Ver Usuario</Link>
              </button>
              
            </ul>
          ))
        }
      </div>
    </>
  )
}
