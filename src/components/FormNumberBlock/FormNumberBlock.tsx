import {FC, useEffect, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import styles from "./FormNumberBlock.module.css";
import { motion } from "framer-motion";
import {useActions} from "../../hooks/useActions.ts";
import NumberButton from "../NumberButton/NumberButton.tsx";
import YourPhone from "../YourPhone/YourPhone.tsx";
import {focusable} from "tabbable";

const FormNumberBlock:FC = () => {
    const {isShow, step, error} = useTypedSelector(state => state.drawer)
    const [isAgree, setIsAgree] = useState(false)
    const {closeDrawer, editStepDrawer} = useActions()

    // Конечный номер телефона
    const [userPhone, setUserPhone] = useState<number[]>([])

    // Экранные цифры
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    // Переключаем состояние показа на false так же шаг на -1
    const handleClickCloseButton = () => closeDrawer(-1)

    // Переключение состояние CheckBox
    const handleChangeIsAgree = () => setIsAgree(prevState => !prevState)

    // Функция ввода экранной клавиатуры
    const writeNumber = (value: number) => {
        setUserPhone(prevState => {
            if(prevState.length < 10) {
                return [...prevState, value]
            } else {
                return prevState
            }
        })
    }

    const handleClickSubmitButton = () => {
        if(isAgree && userPhone.length === 10) {
            editStepDrawer(2)
        }
    }

    const handleClickBackspaceNumber = () => {
        setUserPhone(prevState => {
            if(prevState.length > 0) {
                return prevState.slice(0, -1)
            } else {
                return prevState
            }
        })
    }

    useEffect(() => {
        const onKeyPress = (event: KeyboardEvent) => {
            if(event.key == '1' ||
                event.key == '2' ||
                event.key == '3' ||
                event.key == '4' ||
                event.key == '5' ||
                event.key == '6' ||
                event.key == '7' ||
                event.key == '8' ||
                event.key == '9' ||
                event.key == '0') {
                    writeNumber(Number(event.key))
            }
        };


        let index = 0;

        const onKeyDown = (event: KeyboardEvent) => {
            const arr = focusable(document.body)
            if (event.key == 'Backspace') {
                handleClickBackspaceNumber()
            }

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

        document.addEventListener('keypress', onKeyPress);
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keypress', onKeyPress);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    return (
                <>
                    {/*FormInputNumber*/}
                    <motion.section className={styles.wrapper}
                                    initial={{ opacity: 0, x: '-50%' }}
                                    animate={{ opacity: 1, x: '0' }}
                                    transition={{ duration: 1 }}>
                        <span className={styles.title}>Введите ваш номер мобильного телефона</span>
                        <YourPhone nums={userPhone} />
                        <span className={styles.subTitle}>и с вами свяжется наш менеджер для дальнейшей консультации</span>
                        <div className={styles.wrapperNumberButtons}>
                            {numbers.map(number => (
                                <NumberButton number={number} key={`numberBtn-${number}`} clickNumber={writeNumber} />
                            ))}
                            <button className={styles.backspaceNumberButton} onClick={handleClickBackspaceNumber}>Стереть</button>
                            <NumberButton number={0} key={`numberBtn-0`} clickNumber={writeNumber} />
                        </div>
                        <div className={styles.checkbox}>
                               <button className={styles.btnImg} onClick={handleChangeIsAgree}>
                                   <div className={isAgree ? styles.isAgreeTrue : styles.isAgreeFalse}>
                                   </div>
                               </button>
                            <span>Согласие на обработку персональных данных</span>
                        </div>
                        <button className={styles.button} onClick={handleClickSubmitButton}>Подтвердить номер</button>
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
                        <button className={styles.btnImg}  onClick={handleClickCloseButton} >
                            <img className={styles.qrcodeImg} src="./out.png" alt="clode btn" />
                        </button>
                    </motion.div>
                </>
    )
}

export default FormNumberBlock;