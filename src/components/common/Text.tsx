import React from 'react';

import { StyleSheet, Text as TextC, TextProps, TextStyle } from 'react-native';

import R from '@app/res/R';

const Text: React.FC<ITextProps> = (props) => {
  const {
    variant = 'title2',
    color = R.color.fontPrimary,
    style = {},
    font = 'bold',
    gutterBottom = 0,
    gutterTop = 0,
    gutterLeft = 0,
    gutterRight = 0,
    align = 'auto',
    alignVertical = 'auto',
    fontStyle = 'normal',
    fontWeight = 'normal',
    transform = 'capitalize',
    letterSpacing = 0.3,
    textDecorationLine = 'none',
    ...restProps
  } = props;
  const defaultStyles = styles[variant];
  return (
    <TextC
      style={{
        ...styles[font],
        ...defaultStyles,
        color,
        textAlign: align,
        textAlignVertical: alignVertical,
        marginLeft:  R.unit.scale(gutterLeft),
        marginTop: R.unit.scale(gutterTop),
        marginRight: R.unit.scale(gutterRight),
        marginBottom: R.unit.scale(gutterBottom),
        textTransform: transform,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
        letterSpacing: letterSpacing,
        textDecorationLine:textDecorationLine,
        ...style,
      }}
      {...restProps}>
      {props.children}
    </TextC>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: R.unit.fontSize(18),
  },
  title2: {
    fontSize: R.unit.fontSize(16),
  },
  title3: {
    fontSize: R.unit.fontSize(14),
  },
  title4: {
    fontSize: R.unit.fontSize(13),
  },
  content: {
    fontSize: R.unit.fontSize(12),
  },
  content2: {
    fontSize: R.unit.fontSize(10),
  },
  small: {
    fontSize: R.unit.fontSize(8),
  },
  h0: {
    fontSize: R.unit.fontSize(20),
  },
  h1: {
    fontSize: R.unit.fontSize(40),
  },
  h2: {
    fontSize: R.unit.fontSize(60),
  },
  h3: {
    fontSize: R.unit.fontSize(26),
  },
  light: {
    fontFamily: R.font.Light,
  },
  regular: {
    fontFamily: R.font.Regular,
  },
  bold: {
    fontFamily: R.font.Bold,
  },
  semibold: {
    fontFamily: R.font.Bold,
  },
});

/*
title - 18dp - main top title 
title2 - 16dp will be used in tab or section
title3 - 14dp will be used in tab or section
small - 8dp below title small gray text
content - 12 dp , black
content2 - 10 dp, black
h1 - 32dp
h2 - 24dp
h3 - 18dp
h4 - 16dp
h5 - 13dp
h6 - 10dp
buttonText - 12dp
*/

export interface ITextProps extends TextProps {
  children?: any;
  variant?:
    | 'title'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'content'
    | 'content2'
    | 'content3'
    | 'small'
    | 'h6'
    | 'h5'
    | 'h4'
    | 'h3'
    | 'h2'
    | 'h1'
    | 'h0'
    | 'buttonText';
  style?: TextStyle;

  // util
  color?: string;
  font?:
    | 'light'
    | 'regular'
    | 'italic'
    | 'bold'
    | 'medium'
    | 'semibold'
    | 'black';
  gutterBottom?: number;
  gutterTop?: number;
  gutterLeft ?: 0;
  gutterRight ?: 0;
  opactity?: number;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'normal'
    | 'bold';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  alignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  letterSpacing?: number;
  textDecorationLine?: 'line-through' | 'none'
}

export default Text;
