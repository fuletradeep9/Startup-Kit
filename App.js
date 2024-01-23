/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import Navigation from './src';
import useCachedResources from './src/hooks/useCachedResources';
import { enableFreeze } from 'react-native-screens';

export default function App() {
  //uses the React Suspense mechanism to prevent parts of the React component tree from rendering, while keeping its state untouched
  enableFreeze(true);
  // useCachedResources();
  return <Navigation />;
}