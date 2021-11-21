import * as React from 'react';
import {View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import colors from '../../../utils/colors';
import AppText from '../AppText';
import styles from './styles';
interface AppInputs {
  label: string;
  isError: boolean;
  placeholder?: string;
  isPassword?: boolean;
  value?: string;
  onBlur?: any;
  onChangeText?: any;
}

const AppInput: React.FC<AppInputs> = ({
  label,
  value,
  onBlur,
  onChangeText,
  isError,
  isPassword,
  placeholder,
  ...props
}) => {
  return (
    <View style={styles.label}>
      <AppText>{label}</AppText>
      <TextInput
        style={styles.input}
        outlineColor={colors.formOutlineColor}
        mode={'outlined'}
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText && onChangeText}
        error={isError ? true : false}
        theme={{colors: {text: colors.black, primary: colors.formOutlineColor}}}
        secureTextEntry={isPassword ? true : false}
        placeholder={placeholder ? placeholder : ''}
        {...props}
      />
      {isError && <Text style={styles.errorMessage}>{'invalid input'}</Text>}
    </View>
  );
};

export default AppInput;
