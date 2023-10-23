import {FC, useEffect} from "react";
import styles from './Welcome.module.css';
import { motion } from "framer-motion";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {useActions} from "../../hooks/useActions.ts";
import {focusable} from "tabbable";

const WelcomeBlock:FC = () => {
    const {isShow, step, error} = useTypedSelector(state => state.drawer)
    const {editStepDrawer} = useActions()

    const handleSubmitButton = () => {
        editStepDrawer(1)
    }

    useEffect(() => {
        let index = 0
        const onKeyDown = (event: KeyboardEvent) => {
            const arr = focusable(document.body)

            if(event.key == 'ArrowRight') {
                if(arr) {
                    if(index < arr.length-1) {
                        index++
                    } else {
                        index=0
                    }
                    arr[index].focus()
                }
            }
            if(event.key == 'ArrowLeft') {
                if (arr) {
                    if(index > 0) {
                        index--
                    } else {
                        if (arr) {
                            index=arr.length-1
                        }
                    }
                    arr[index].focus()
                }
            }
        }

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [])
    return (
        <>
        {isShow && step == 0 && error == null && (
            <motion.section className={styles.wrapper}
                            initial={{ opacity: 0, x: '50%' }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}>
                <span className={styles.title}>
                    ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МУЖА! ПОДАРИТЕ ЕМУ BMW!
                </span>
                <img src="./qr-code.png" alt="qr code"/>
                <span className={styles.description}>
                    Сканируйте QR-код или нажмите ОК
                </span>
                <button className={styles.button} onClick={handleSubmitButton}>ок</button>
            </motion.section>
        )}
        </>
    )
}

export default WelcomeBlock