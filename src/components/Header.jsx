import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-dark text-white p-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="h4 m-0">MY APP</h1>
                <nav>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            "btn btn-outline-warning btn-sm " + (isActive ? "active" : "")
                        } end>
                        Home
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
