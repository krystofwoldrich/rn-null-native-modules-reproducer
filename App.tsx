import React from 'react';
import {
  Alert,
  Button,
  View,
} from 'react-native';
import NativeExampleTurboModule from './tm/NativeExampleTurboModule';

function App(): React.JSX.Element {

  return (
    <View style={{
      flex: 1,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Button
        title='Call Turbo Module'
        onPress={() => {
          Alert.alert('Return value', NativeExampleTurboModule.call(null));
        }}
      />
    </View>
  );
}

export default App;
