import { Link, useNavigate } from "react-router-dom";
export function NavBar() {
    const navigate = useNavigate();
    const linkEstilos = {
        color: "white",
        textDecoration: "none",
        marginRight: "1rem",
    };
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className="nav-link active" to='/'>Inicio</Link>
                        <Link className="nav-link active" to='/fiscalia'>Fiscalia</Link>
                        <Link className="nav-link active" to='/jpl'>Policía Local</Link>
                        <Link className="nav-link active" to='/corteapelaciones'>Corte Apelaciones</Link>
                        <Link className="nav-link active" to='/cortesuprema'>Corte Suprema</Link>
                        <Link className="nav-link active" to='/leyes'>Leyes</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}