import YouTubeIcon from '@mui/icons-material/YouTube';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import moment from 'moment';

import Button from '../Button';
import styles from './launch.module.css';
import DefaultImage from "../../assets/images/spacex-default.jpg";  // to be used if there are issues with images provided by the API


const Launch = ({props}) => {
    const imageLinks = props.rocket.flickr_images;
    const imageLink = imageLinks[Math.round(Math.random() * imageLinks.length)];  // random image from those provided be the API
    const youtubeLink = `https://youtu.be/${props.links.youtube_id}`  // link to youtube video
    const wiki = props.links.wikipedia;  // link to wikipedia article on launch
    const reddit = props.links.reddit.launch;  // link to reddit discussion on launch (is used as second option if API doesn't provide a wiki link)
    const defaultLink = "https://en.wikipedia.org/wiki/SpaceX"; // the default link to be used when other 2 return null

    return (
        <div className={styles.launchCard}>
            <img src={imageLink ? imageLink : DefaultImage} alt={props.name} className={styles.launchImg}/>
            <div className={styles.cardInfoWrapper}>
                <h2 className={styles.launchTitle}>{props.name}</h2>
                <div className={styles.dataWrapper}>
                    <p>Id: <span className={styles.highlighted}>{props.id}</span></p>
                    <p>Flight Number: <span className={styles.highlighted}>{props.flight_number}</span></p>
                    <p>Launch Date: <span className={styles.highlighted}>{moment(props.date_utc).format('MMMM Do YYYY')}<br />{moment(props.date_utc).format('h:mm:ss a')}</span></p>
                    <div className={styles.learnMore} >
                        <Button text="Read more" url={wiki ? wiki : reddit ? reddit : defaultLink} icon={<OpenInNewIcon fontSize="small" sx={{ml: 1}}/>} />
                        <Button text="Watch" url={youtubeLink} icon={<YouTubeIcon fontSize="small" sx={{ml: 1}}/>} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Launch
