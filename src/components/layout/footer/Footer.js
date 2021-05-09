function Footer(){
    return(
    <footer id="footer" className="text-center text-white text-lg-start">
        <div className="container p-4 pt-5">
            <div className="row">

                <h2 className="text-center pb-5">Pour me contacter</h2>

                <div className="col-lg-6 col-md-12 mb-4 mb-md-0 pb-4">
                    <h5 className="text-uppercase">Pour finir :</h5>
                    <p>Dans le cadre de ma formation à l'Afpa de Rouen, je suis à la recherche<br/>
                    d'un stage non rémunéré pour 9 semaines à partir du 16 août 2021.<br />
                    Si mon profil vous intéresse, vous pouvez directement me contacter<br />
                    en cliquant sur le lien ci-joint : <a href="mailto:julien.coart@gmail.com">julien.coart@gmail.com</a>
                    </p>
                </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5>Linkedin</h5>
                <ul className="list-unstyled mb-5">
                    <li>
                        <a href="https://www.linkedin.com/in/julien-coart-86142a147/" target="_blank" rel=" noreferrer noopener">
                        <img src={process.env.PUBLIC_URL + "/linkedin.png"} alt="lien_linkedin"/>
                        </a> 
                    </li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5>GitHub</h5>
                <ul className="list-unstyled mb-5">
                    <li>
                        <a href="https://github.com/JulienDev76-75" target="_blank" rel=" noreferrer noopener">
                        <img src={process.env.PUBLIC_URL + "/GitHub-Mark.png"} alt="lien_GitHub"/>
                        </a> 
                    </li>
                </ul>
            </div>
            </div>
        </div>

        <div className="text-center pt-5">© 2021 Copyright: Julien Coart. 
        </div>

    </footer>
    );
}

export default Footer;