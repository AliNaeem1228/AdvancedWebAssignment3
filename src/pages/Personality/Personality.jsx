import { Container } from "react-bootstrap";
import '../../../src/style.css'
import Particle from '../../components/Particle';

function Personality() {
  return (
    <Container>
        <Particle/>
        <h1 className="h_name">Personalities</h1>
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
                    <img class="w-100" src="https://media.them.us/photos/59ee74a6f64b9e000ba92c6a/16:9/w_1920,c_limit/harry%20styles%20rainbow%20flag.jpg" alt="image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="https://media.gq.com/photos/572cdd59c779e9c54a94b12a/16:9/w_1920,c_limit/harry-styles-haircut-2016.jpg" alt="image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="https://assets.teenvogue.com/photos/57b3632f3481e9fc11a3bc84/16:9/w_1920,c_limit/GettyImages-499733372.jpg" alt="image" />
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
            <h5 class="card-title">Harry Styles</h5>
            <p class="card-text">Harry Edward Styles is an English singer and actor. His musical career began in 2010 as part of One Direction, a boy band formed on the British music competition series The X Factor.</p>
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
                    <img class="w-100" src="https://cdn.bhdw.net/im/devil-may-cry-5-dante-wallpaper-23919_w635.webp" alt="image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="https://cdn.bhdw.net/im/devil-may-cry-5-2019-dante-wallpaper-22014_w635.webp" alt="image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="https://cdn.bhdw.net/im/devil-may-cry-5-action-wallpaper-10946_w635.webp" alt="image" />
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
            <h5 class="card-title">Dante</h5>
            <p class="card-text">Dante is a Fictional Character from a popular game series named Devil May Cry developed by CAPCOM.</p>
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
                    <img class="w-100" src="https://media.gq.com/photos/639ce48fa73f152109d5e2db/16:9/w_1920,c_limit/1245571471" alt="image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="https://images.hdqwalls.com/download/the-witcher-season-2-4k-yo-1280x720.jpg" alt="image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="https://image-cdn.netflixjunkie.com/wp-content/uploads/2022/08/henry-cavill-superman-wallpaper-scaled.jpg?width=900" alt="image" />
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
            <h5 class="card-title">Henry Cavill</h5>
            <p class="card-text">Henry William Dalgliesh Cavill is a British actor. He is known for his portrayal of Charles DC Comics character Superman in the DC Extended Universe, Geralt of Rivia in the Netflix fantasy series The Witcher.</p>
        </div>
    </div>
</div>
</Container>
  );
}

export default Personality;