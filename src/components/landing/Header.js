import H2 from '@material-tailwind/react/Heading2';
import {useState, useEffect} from 'react'
import TextTransition, {presets} from 'react-text-transition'

const myText = [
    "Welcome To My Website",
    "Hi's is Thiraphat Chorakhe",
    "I hope Your like IT🔅"
]
export default function Header() {
    const [idx, setIdx] = useState(0)
    
    useEffect(() => {
            const Interval = setInterval(() => {
                setIdx(idx => idx + 1)
            }, 3000);
        return () => clearInterval(Interval)
    }, [idx])
    return ( 
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-12 ml-auto mr-auto text-center">
                        <H2 color="white"><TextTransition springConfig={presets.wobbly} text={myText[idx % myText.length]}/></H2>
                    </div>
                </div>
            </div>
        </div>
    );
}
