import React from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = {
  text: string;
  fontFamily?: string;
  fontSize: number;
  lineHeight: number;
  color: string;
  letterSpacing?: number;
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through' | undefined;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
};

const TextStyled: React.FC<Props> = ({ text, ...restProps }) => {
  const styles = StyleSheet.create({
    text: {
      ...restProps,
    },
  });

  return <Text style={styles.text}>{text}</Text>;
};

export default TextStyled;
