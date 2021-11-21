import React from 'react';
import { StyleSheet, View, ViewPropTypes, TextInput, ViewStyle } from 'react-native';

interface PinProps extends JSX.IntrinsicAttributes {
  containerStyle: ViewStyle ,
  style?: ViewStyle,
  refCallback?: any,
  remainingProps:JSX.IntrinsicElements['input']
};


const PinInput : React.FC<PinProps>  = ({
  containerStyle,
  style,
  refCallback,
  ...remainingProps
}) => {

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <TextInput
        {...remainingProps}
        style={[styles.textInputStyle, style, { flex: 1 }]}
        ref={refCallback}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    borderColor: '#d4d4d4',
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    width:50,
    height:50,
    marginRight:5
  },
  textInputStyle: {
    padding: 5,
  },
});



export default PinInput;