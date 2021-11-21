import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AppButton from '../../../components/shared/Button';
import OtpVerification from '../forgot-password-otp/OtpVerification';
import styles from './styles';
import * as forgotPasswordCall from './action/apiCall'
import AppInput from '../../../components/shared/Forms/Input';

type OtpProps = {
    setVisible:Function
}


const Otp : React.FC<OtpProps> = ({setVisible}) => {
    const [error,setError] = React.useState('');
    const [password, onChangeText] = React.useState("");
    const [pageTwo, setPageTwo] = React.useState(false);
    const moveToOtpSlide = () => {
        if(password.length < 6){
            setError("Password must be more than 6");
            setPageTwo(false);
        }else{
            setError("");
            setPageTwo(true);
        }
    }
    const closeModal = () => setVisible(false);
    const payload = {
        "reset_token":"",
        "new_password":password
    }

    const NewPasswordInput = () => (
        <View style={styles.newPassword}>
         {error ? <Text style={[styles.subTitle,{textAlign:'center'}]}>{error}</Text> : null }
         <AppInput label={"New Password"} isError={error ? true : false } value={password} onChangeText={onChangeText} isPassword={true} placeholder={"******"} />
         <AppButton text={"Login"} method={moveToOtpSlide}  />
        </View>
    )
    const OtpSlide = () => (
        <>
         <Text style={styles.subTitle}>Input the verification code sent to your mail.</Text>
            <View style={styles.formSection}>
                <OtpVerification payload={payload} keys={"reset_token"} method={forgotPasswordCall.verifyOtp} callback={closeModal} />
            </View>
        </>
    )
    return (
        <View >
            <Text style={styles.title}>Forgot Password?</Text>
            { pageTwo ? OtpSlide() : NewPasswordInput()  }
        </View>
    )
}

export default Otp
