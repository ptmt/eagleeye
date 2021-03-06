import React from "react";
import {
  Button,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  Switch,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvodingView
} from "react-native";

import {
  Cell,
  CustomCell,
  Section,
  TableView
} from "react-native-tableview-simple";

import FocusPoint from "../components/FocusPoint";

export default class SetupFocus extends React.Component {
  static navigationOptions = {
    title: "Setup Focus Point"
  };
  render() {
    const featured = [
      "▵",
      "◯",
      "◎",
      "◐",
      "▢",
      "▦",
      "▩",
      "▱",
      "A",
      "◷",
      "◧",
      "❤️",
      "🖼",
      "🌎",
      "👻"
    ];

    const { settings, updateSettings } = this.props.screenProps;
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardDismissMode="on-drag"
      >
        <View style={styles.preview}>
          <FocusPoint content={settings.focusPoint} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <TextInput
            autoCorrect={false}
            autoFocus={true}
            onChangeText={text => text && updateSettings({ focusPoint: text })}
            defaultValue={settings.focusPoint}
            maxLength={1}
            style={styles.textInput}
          />
        </View>
        <Text style={styles.subheader}>Featured</Text>
        <View style={styles.section}>
          {featured.map(f => (
            <TouchableOpacity
              key={f}
              style={styles.button}
              onPress={() => updateSettings({ focusPoint: f })}
            >
              <Text style={styles.buttonText}>{f}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    margin: 30,
    height: 100,
    alignItems: "center"
  },
  textInput: {
    width: 200,
    height: 30,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    alignItems: "center"
  },
  subheader: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 19,
    fontWeight: "bold"
  },
  section: {
    flexDirection: "row",
    paddingHorizontal: 20,
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    margin: 5,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black"
  },
  buttonText: {
    fontSize: 30
  }
});
