import {FC, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import styles from "./FormNumberBlock.module.css";
import { motion } from "framer-motion";
import {useActions} from "../../hooks/useActions.ts";
import NumberButton from "../NumberButton/NumberButton.tsx";

const FormNumberBlock:FC = () => {
    const {isShow, step, error} = useTypedSelector(state => state.drawer)
    const [isAgree, setIsAgree] = useState(false)
    const {closeDrawer} = useActions()
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const handleClickCloseButton = () => closeDrawer(-1)
    const handleChangeIsAgree = () => setIsAgree(prevState => !prevState)

    return (
        <>
            {isShow && step == 1 && error == null && (
                <>
                    {/*FormInputNumber*/}
                    <motion.section className={styles.wrapper}
                                    initial={{ opacity: 0, x: '-50%' }}
                                    animate={{ opacity: 1, x: '0' }}
                                    transition={{ duration: 1 }}>
                        <span className={styles.title}>Введите ваш номер мобильного телефона</span>

                        <span className={styles.subTitle}>и с вами свяжется наш менеджер для дальнейшей консультации</span>
                        <div className={styles.wrapperNumberButtons}>
                            {numbers.map(number => (
                                <NumberButton number={number} key={`numberBtn-${number}`}/>
                            ))}
                        </div>
                        <div className={styles.checkbox}>
                            <div className={isAgree ? styles.isAgreeTrue : styles.isAgreeFalse} onClick={handleChangeIsAgree}>

                            </div>
                            <span>Согласие на обработку персональных данных</span>
                        </div>
                        <button className={styles.button}>Подтвердить номер</button>
                    </motion.section>

                    {/*QR Code*/}
                    <motion.div className={styles.qrcode}
                                initial={{ opacity: 0, x: '50%' }}
                                animate={{ opacity: 1, x: '0' }}
                                transition={{ duration: 1 }}>
                        <span className={styles.qrcodeTxt}>
                            Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
                        </span>
                        <img className={styles.qrcodeImg} src="./qr-code.png" alt="qrcode" />
                    </motion.div>

                    {/*Close Button*/}
                    <motion.div className={styles.close}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}>
                        <img className={styles.qrcodeImg} src="./out.png" alt="clode btn" onClick={handleClickCloseButton} />
                    </motion.div>
                </>
            )}
        </>
    )
}

export default FormNumberBlock;