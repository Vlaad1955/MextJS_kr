import {newsService} from "@/app/service/news.service";
import {urls} from "@/app/constant/urls";


const WhatsNew = async () => {
    const newsfilm = await newsService();
    const imageSrc = newsfilm.poster_path
        ? `${urls.imageBaseURL}${newsfilm.poster_path}`
        : "https://repository.kristti.com.ua/wp-content/themes/repa/img/img/nopicture.png";

    return (
        <section className="whats-new">
            <h2>Що нового</h2>
            <div className="new-card">
                <img src={imageSrc} alt="Weekly Featured"/>
                <div className="details">
                    <h3>{newsfilm.title}</h3>
                    <span>{newsfilm.release_date}</span>
                    <p className="description">{newsfilm.overview}</p>
                </div>
            </div>
        </section>
    )
};

export default WhatsNew;