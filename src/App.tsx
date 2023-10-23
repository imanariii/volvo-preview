import video from './assets/preview.mp4'
import WelcomeBlock from "./components/WelcomeBlock/WelcomeBlock.tsx";
import {useActions} from "./hooks/useActions.ts";
import { useEffect, useRef} from "react";
import FormNumberBlock from "./components/FormNumberBlock/FormNumberBlock.tsx";
import ErrorBlock from "./components/ErrorBlock/ErrorBlock.tsx";
import {useTypedSelector} from "./hooks/useTypedSelector.ts";
import FinalWindow from "./components/FinalWindow/FinalWindow.tsx";
function App() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const {setShowDrawer, editStepDrawer}  = useActions()
    const { step, isShow } = useTypedSelector(state => state.drawer)

    useEffect(() => {
        setTimeout(() => {
            setShowDrawer(true)
            videoRef.current?.pause()
        }, 5000)
    }, [])

    useEffect(() => {
        if (step == -1) {
            videoRef.current?.play()
            setTimeout(() => {
                setShowDrawer(true)
                editStepDrawer(0)
                videoRef.current?.pause()
            }, 10000)
        }
        if (step == 3) {
            videoRef.current?.play()
        }
    }, [step])
    return (
        <>
            <video ref={videoRef} width="100%" height='100%' autoPlay muted playsInline>
                <source src={video} type="video/mp4" />
            </video>
            <WelcomeBlock />
            {step == 1 && isShow && <FormNumberBlock />}
            {step == 2 && isShow && <FinalWindow />}
            <ErrorBlock />
        </>
    )
}

export default App
