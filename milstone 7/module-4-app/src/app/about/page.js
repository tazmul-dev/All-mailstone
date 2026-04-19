import Image from "next/image";
import image from '../../../assert/taz.jpg'

const aboutPage = () => {
    return (
        <div>
            <h1 className=" text-2xl text-red-500">This is a about page</h1>

            <Image height='350' width='350' src={'/img.jpg'} alt="a man of formal image"></Image>

            <Image height={'350'} width={'350'} src={image} alt="a man of simple photo"></Image>

            <Image height={'500'} width={'500'} src= "https://i.ibb.co.com/mVhKd44P/Capture2.jpg" alt="a man of simple photo"></Image>
            

            
        </div>
    );
};

export default aboutPage;

