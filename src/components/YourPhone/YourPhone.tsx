import {FC} from "react";
import styles from './YourPhone.module.css'

interface IProps {
    nums: number[] | null[]
}

const YourPhone: FC<IProps> = ({nums}) => {
    return (
        <span className={styles.phone}>+7
            (
            {nums[0]==0 ? '0' : nums[0] || '_'}
            {nums[1]==0 ? '0' : nums[1] || '_'}
            {nums[2]==0 ? '0' : nums[2] || '_'}
            )
            {nums[3]==0 ? '0' : nums[3] || '_'}
            {nums[4]==0 ? '0' : nums[4] || '_'}
            {nums[5]==0 ? '0' : nums[5] || '_'}
            -
            {nums[6]==0 ? '0' : nums[6] || '_'}
            {nums[7]==0 ? '0' : nums[7] || '_'}
            -
            {nums[8]==0 ? '0' : nums[8] || '_'}
            {nums[9]==0 ? '0' : nums[9] || '_'}
        </span>
    )
}

export default YourPhone;