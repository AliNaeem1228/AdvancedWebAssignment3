import { Container } from "react-bootstrap";
import '../../../src/style.css'
import Particle from '../../components/Particle';

function Cities() {
  return (
    <Container>
        <Particle/>
        <h1 className="h_name">Cities</h1>
<div class="card-deck">
    <div class="card">
        <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <iframe width="420" height="224" src="https://www.youtube.com/embed/p4Gaw89NABo"> </iframe>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="https://wallpaperswide.com/download/frankfurt_germany-wallpaper-2560x1440.jpg" alt="image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="https://images.wallpaperscraft.com/image/single/hamburg_germany_town_hall_58095_1600x900.jpg" alt="image" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="card-body">
            <h5 class="card-title">Germany</h5>
            <p class="card-text">Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII.</p>
        </div>
    </div>
    <div class="card">
        <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <iframe width="420" height="224" src="https://www.youtube.com/embed/oTDXnAXw66Y"> </iframe>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="https://c4.wallpaperflare.com/wallpaper/662/782/517/obelisco-de-buenos-aires-argentina-buenos-aires-city-wallpaper-preview.jpg" alt="image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="https://wallpaperswide.com/download/argentine_national_congress_palace_buenos_aires_argentina-wallpaper-1920x1080.jpg" alt="image" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="card-body">
            <h5 class="card-title">Argentina</h5>
            <p class="card-text">Argentina, officially the Argentine Republic, is a country in the southern half of South America. Argentina covers an area of 2,780,400 km², making it the second-largest country in South America after Brazil, the fourth-largest country in the Americas, and the eighth-largest country in the world.</p>
        </div>
    </div>
    <div class="card">
        <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators3" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <iframe width="420" height="224" src="https://www.youtube.com/embed/uTfsJHNiGYw"> </iframe>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="https://images.wallpaperscraft.com/image/single/mosque_architecture_night_city_138027_1600x900.jpg" alt="image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="https://assets.cntraveller.in/photos/6299dc1174e2baa4e2fc00a5/16:9/w_960,c_limit/GettyImages-160193420.jpg" alt="image" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="card-body">
            <h5 class="card-title">Turkey</h5>
            <p class="card-text">Turkey is a large peninsula that bridges the continents of Europe and Asia. Turkey is surrounded on three sides by the Black Sea, the Mediterranean Sea, and the Aegean Sea. Istanbul, the largest city in Turkey, is built on land in the Bosporus seaway. The city is partly in Europe and partly in Asia.</p>
        </div>
    </div>
</div>
</Container>
  );
}

export default Cities;