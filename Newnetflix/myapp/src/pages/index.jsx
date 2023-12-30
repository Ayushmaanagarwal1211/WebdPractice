import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Body from '../../components/Body'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // const [film,setfilm]=useState([])
//   useEffect(()=>{
//      const data= fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',{
//     method:"GET",
//     headers:{accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjhhYmQyZDZhM2UwNzJlNzhiNmJlY2VhYWVkODc5ZiIsInN1YiI6IjY1MDljOGI3M2NkMTJjMDBjYTU3MzMxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AZ5STxGaedADkxdoTIx0VSrf1owcEmdRHSuHCJHs8l8'}
//   }).then(res=>{
//     return res.json().then(data=>{
// setfilm(data.results) 
// console.log(data.results[0].overview)
// console.log(data.results)   })
//   })
//   },)
 
  return (
<>
{/* <Navbar />
<Search /> */}
{/* <Body name='Trending' options={['DAY','WEEK']} /> */}
{/* {
  film.length!==0 && film.map((data)=>{
    return <div>{data.overview}</div>
  })
} */}
</>
  )
}
