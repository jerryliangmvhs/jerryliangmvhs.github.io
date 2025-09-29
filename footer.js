function renderFooter(){
    return `<div class = "footer-wrapper">
            <img class = "footer-image" src = "/images/website-footer-logo.png">
            <div class = "column1">
                <h1 class = "footer-main-topic home-link"><a href = "/">Home</a></h1>
                <h1 class = "footer-main-topic">Units</h1>
                <ul class = "footer-units-list">
                    <li class = "footer-units-option"><a href = "/units/unit-1/">Unit 1: Foundations of Chemistry</a></li>
                    <li class = "footer-units-option"><a href = "/units/unit-2/">Unit 2: Atomic Structure</a></li>
                    <li class = "footer-units-option"><a href = "/units/unit-3/">Unit 3: Electronic Structure</a></li>
                    <li class = "footer-units-option"><a href = "/units/unit-4/">Unit 4: Chemical Bonding</a></li>
                    <li class = "footer-units-option"><a href = "/units/unit-5/">Unit 5: Chemical Reactions</a></li>
                    <li class = "footer-units-option"><a href = "/units/unit-6/">Unit 6: Stoichiometry</a></li>
                    <li class = "footer-units-option"><a href = "/units/unit-7/">Unit 7: Thermochemistry</a></li>
                    <li class = "footer-units-option"><a href = "/units/unit-8/">Unit 8: Equilibrium Acid & Bases</a></li>
                </ul>
                <h1 class = "footer-main-topic">Research Blogs</h1>
                    <li class = "footer-units-option"><a href = "#">Latest Blogs</a></li>
                <h1 class = "footer-main-topic about-the-creators-link"><a href = "/about-the-creators/">About the Creators</a></h1>
            </div>
            <div class = "column2">
                <p class = "footer-website-description">Live Laugh Love Chemistry strives to
                    provide high school chemistry honors students the resources they need to
                    become a successful chemistry student.
                </p>
            </div>
        </div>
        <div class = "copyright">© 2025 Lilalo Chemistry</div>`
}
document.querySelector("footer").innerHTML = renderFooter();