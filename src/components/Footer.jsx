export default function Footer() {
    return (
        <footer className="bg-dark text-warning py-5 mt-auto">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-3 mb-4">
                        <h5 className="text-uppercase">Legal</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Cookie Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 mb-4">
                        <h5 className="text-uppercase">Movies</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Latest Releases</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Top Rated</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Genres</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 mb-4">
                        <h5 className="text-uppercase">Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
