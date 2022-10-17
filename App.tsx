import React from 'react';
import { View } from 'react-native';
import JoinScreen from './components/join-screen/join-screen';

export default function App() {
    return (
        <React.StrictMode>
            <View>
                <JoinScreen />
            </View>
        </React.StrictMode>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
