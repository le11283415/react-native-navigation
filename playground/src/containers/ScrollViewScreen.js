const React = require('react');
const { Component } = require('react');

const { StyleSheet, ScrollView, View, Button } = require('react-native');

const Navigation = require('react-native-navigation');
const testIDs = require('../testIDs');

class ScrollViewScreen extends Component {
  static get navigationOptions() {
    return {
      topBar: {
        translucent: false
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      topBarHideOnScroll: false
    };
    this.onClickToggleTopBarHideOnScroll = this.onClickToggleTopBarHideOnScroll.bind(this);
  }

  render() {
    return (
      <View>
        <ScrollView testID={testIDs.SCROLLVIEW_ELEMENT} contentContainerStyle={styles.contentContainer}>
          <View>
            <Button title="Toggle Top Bar Hide On Scroll" testID={testIDs.TOGGLE_TOP_BAR_HIDE_ON_SCROLL} onPress={this.onClickToggleTopBarHideOnScroll} />
          </View>
        </ScrollView>
      </View>
    );
  }

  onClickToggleTopBarHideOnScroll() {
    this.setState({
      topBarHideOnScroll: !this.state.topBarHideOnScroll
    })
  }

  componentDidUpdate(state) {
    Navigation.setOptions(this.props.containerId, {
      topBar: {
        hideOnScroll: this.state.topBarHideOnScroll
      }
    });
  }
}



module.exports = ScrollViewScreen;

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    height: 1200
  }
});

