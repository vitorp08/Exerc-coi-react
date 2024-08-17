export const Infos = ({avatar_url,  userName, login, public_repos, follwers, following, html_url}) =>{
    return(
        <>
        <img src={avatar_url} alt={userName} />
        <h1>{userName}</h1>
        <p>{login}</p>
        <p>{public_repos} repositórios criados</p>
        <p>{follwers} seguidoeres, seguindo {following} membros</p>
        <a href={html_url} >repositório</a>
        </>
    )
}