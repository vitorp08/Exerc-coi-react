import { useEffect } from "react"

export const Home = () =>{
    const [infos, setInfos] = useState([])
    useEffect(()=>{
        const getInfos = async()=>{
            const response = await fetch('https://api.github.com/users/vitorp08')
            const data = await response.json()
            setInfos(data)
            
        }
        getInfos()
    },[])
    return(

    <>
    <infos
    
        avatar_url = {infos.avatar_url}
        userName = {infos.name}
        login = {infos.login}
        public_repos = {infos.public_repos}
        follower = {infos.follower}
        following = {infos.following}
        html_url = {infos.html_url}

    />

    </>

    )
    

}
