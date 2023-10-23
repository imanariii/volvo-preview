import {FC, useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import styles from "./FinalWindow.module.css";
import { motion } from "framer-motion";
import {useActions} from "../../hooks/useActions.ts";
const FinalWindow:FC = () => {
    const {isShow, step, error} = useTypedSelector(state => state.drawer)
    const {editStepDrawer} = useActions()

    useEffect(() => {
        setTimeout(() => {
            editStepDrawer(3)
        }, 10000)
    }, [])
    return (
        <>
            <motion.section className={styles.wrapper}
                            initial={{ opacity: 0, x: '-50%' }}
                            animate={{ opacity: 1, x: '0' }}
                            transition={{ duration: 1 }}>
                <span className={styles.title}>заявка принята</span>
                <span className={styles.subtitle}>Держите телефон под рукой. <br/> Скоро с Вами свяжется наш менеджер. </span>
            </motion.section>
        </>
    )
}

export default FinalWindow