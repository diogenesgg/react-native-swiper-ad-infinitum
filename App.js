import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import Swiper from 'react-native-swiper';

const cache = {
  "0": "zero",
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine",
  "10": "ten"
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default class App extends Component {

  state = {
    pages: ["2", "3", "4"],
    key: 1
  }

  renderItem(item, idx) {
    const itemInt = parseInt(item)
    const style = itemInt % 2 == 0 ? styles.slide1 : styles.slide2
    return (
      <View style={style} key={idx}>
        <Text style={styles.text}>{cache[item]}</Text>
      </View>
    )
  }

  onPageChanged(idx) {
    if (idx == 2) {
      const newPages = this.state.pages.map(i => (parseInt(i)+1).toString())
      this.setState({pages: newPages, key: ((this.state.key+1)%2) })
    } else if (idx == 0) {
      const newPages = this.state.pages.map(i => (parseInt(i)-1).toString())
      this.setState({pages: newPages, key: ((this.state.key+1)%2) })
    }
  }

  render() {
    return (
      <Swiper
        index={1}
        key={this.state.key}
        style={styles.wrapper}
        loop={false}
        showsPagination={false}
        onIndexChanged={(index) => this.onPageChanged(index)}>
        {this.state.pages.map((item, idx) => this.renderItem(item, idx))}
      </Swiper>
    );
  }
}