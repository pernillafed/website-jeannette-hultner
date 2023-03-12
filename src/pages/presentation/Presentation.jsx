import PresentationVideo from "../../assets/presentation.mov";
import presentationText from "../../assets/data/presentationText.json";
import styles from "./Presentation.module.css";

const Presentation = () => {
    return (
        <div className={styles.presentation}>
            <h1>Presentation</h1>
            <video width="640" controls>
                <source src={PresentationVideo} type="video/mp4" />
            </video>
            <p>{presentationText.introduction}</p>
        </div>
    );
}
 
export default Presentation;