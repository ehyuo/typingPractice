import { useSelector } from "react-redux";
import InfoField from "./infoField";

const InfoContainer = () => {
    const { language, mode, longTextTitle } = useSelector(state => ({
        language: state.setting.language,
        mode: state.setting.mode,
        longTextTitle: state.longText.longTextTitle
    }))
    return (
        <InfoField 
            language={language}
            mode={mode}
            longText={longTextTitle}/>
    )
}

export default InfoContainer;