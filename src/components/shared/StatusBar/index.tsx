import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const AppStatusBar : React.FC = () => {
    

    return (
        <StatusBar
          barStyle = "dark-content"
          hidden = {false}
          backgroundColor = "#00BCD4"
          translucent = {false}
          networkActivityIndicatorVisible = {true}
/>
    )
}

export default StatusBar
