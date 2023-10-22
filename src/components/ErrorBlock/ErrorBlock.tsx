import {FC} from "react";
import styles from './ErrorBlock.module.css';
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {motion} from "framer-motion";

const ErrorBlock:FC = () => {
    const { error} = useTypedSelector(state => state.drawer)
    return (
        <>
            {error && (
                <motion.section className={styles.wrapper}
                                initial={{ opacity: 0, y: '50%' }}
                                animate={{ opacity: 1, y: '0' }}
                                transition={{ duration: 1 }}>
                    <span className={styles.title}>{error}</span>
                </motion.section>
            )}
        </>
    )
}

export default ErrorBlock