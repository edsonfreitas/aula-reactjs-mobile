import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../theme';

interface Props {
    screenshot: string | null;
    onTakeShot: () => void;
    onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress= {screenshot ? onRemoveShot: onTakeShot}
    >
        {
            screenshot
            ?
            <View>
              <Image
                  style={styles.image}
                  source={{uri: screenshot}}
              />
            <Ionicons 
            name="md-trash-outline"
             size={22} 
             color={theme.colors.text_secondary}
             weight= 'fill'
             style={styles.removeIcon}
             />
             </View>
             :
             <Ionicons 
             name="md-camera-outline" 
             size={22} 
             color={theme.colors.text_secondary}
             weight= 'bold' 
             />
        }
    </TouchableOpacity>
  );
}