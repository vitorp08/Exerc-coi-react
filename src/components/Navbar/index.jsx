import {Link} from "react-router-dom"

export const Navbar = () =>(
    <nav>
        <ul>
            <li><link to="/">Home</Link></li>
            <li><link to="/contact">Contatos</Link></li>
            <li><link to="/projects">Projetos</Link></li>
        </ul>
    </nav>
)