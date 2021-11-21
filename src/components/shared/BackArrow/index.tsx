import React from 'react'
import { View, Image,TouchableOpacity } from 'react-native'
import NavigationService from '../../../navigation/NavigationService';
const backArrow = require('../../../assets/images/Arrow.png')

import styles from './styles';

const BackArrow : React.FC = () => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => NavigationService.goBack()} >
            <Image source={backArrow}  style={styles.image} ></Image>
        </TouchableOpacity>
    )
}

export default BackArrow
