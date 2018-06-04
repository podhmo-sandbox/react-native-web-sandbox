import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  link: {
    color: '#1B95E0'
  },
  code: {
    fontFamily: 'monospace, monospace'
  }
});

const Link = (props) => <Text {...props} accessibilityRole="link" style={StyleSheet.compose(styles.link, props.style)} />

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Image accessibilityLabel="React logo" source={logo} resizeMode="contain" style={styles.logo} />
          <Text style={styles.title}>React Native for Web</Text>
        </View>
        <Text style={styles.text}>
          This is an example of an app built
          with <Link href="https://github.com/facebook/create-react-app">Create React App</Link> and{' '}
          <Link href="https://github.com/necolas/react-native-web">React Native for Web</Link>
        </Text>
        <Text style={styles.text}>
          To get started, remix this starter kit by editing <Link href="https://glitch.com/edit/#!/react-native?path=src/components/App/index.js" style={styles.code}>src/components/App/index.js</Link>.
        </Text>
        <Button onPress={() => {}} title="Example button" />
      </View>
    );
  }
}

export default App;
