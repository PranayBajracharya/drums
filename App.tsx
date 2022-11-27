import React from 'react';
import { Button, Text, View } from 'react-native';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const App: React.FC = () => {
  const sound = new Sound('snare.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });

  return (
    <View>
      <Text>Hello World!</Text>
      <Button
        title="Tap me"
        onPress={() => {
          sound.play();
        }}
      />
    </View>
  );
};

export default App;
