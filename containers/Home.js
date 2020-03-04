import React from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
import {Container, Content, List, ListItem, Text, Icon} from 'native-base';
import NavigationService from '../Services/NavigationService';

import firebase from 'react-native-firebase';

const Home = () => {
  const menuItems = [
    {
      name: 'Recreation Activities',
      navigation: 'RecActivitiesList',
      id: 1,
    },
    {
      name: 'Location Map',
      navigation: 'LocationMap',
      id: 4,
    },
    {
      name: 'Events',
      navigation: 'Events', // need to define route
      id: 2,
    },
    {
      name: 'Shopping',
      navigation: 'Shopping', // need to define route
      id: 3,
    },
  ];

  return (
    <Container>
      <Content>
        <List>
          {menuItems.map(item => {
            return (
              <ListItem
                button
                onPress={() => NavigationService.navigate(item.navigation)}
                key={item.id}>
                <Text>{item.name}</Text>
                <Icon
                  type="FontAwesome"
                  name="chevron-right"
                  style={styles.icon}
                />
              </ListItem>
            );
          })}
        </List>
      </Content>

      <Container>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require('../assets/ReactNativeFirebase.png')}
              style={[styles.logo]}
            />
            <Text style={styles.welcome}>
              Welcome to {'\n'} React Native Firebase
            </Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            {Platform.OS === 'ios' ? (
              <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
              </Text>
            ) : (
              <Text style={styles.instructions}>
                Double tap R on your keyboard to reload,{'\n'}
                Cmd+M or shake for dev menu
              </Text>
            )}
            <View style={styles.modules}>
              <Text style={styles.modulesHeader}>
                The following Firebase modules are pre-installed:
              </Text>
              {firebase.admob.nativeModuleExists && (
                <Text style={styles.module}>admob()</Text>
              )}
              {firebase.analytics.nativeModuleExists && (
                <Text style={styles.module}>analytics()</Text>
              )}
              {firebase.auth.nativeModuleExists && (
                <Text style={styles.module}>auth()</Text>
              )}
              {firebase.config.nativeModuleExists && (
                <Text style={styles.module}>config()</Text>
              )}
              {firebase.crashlytics.nativeModuleExists && (
                <Text style={styles.module}>crashlytics()</Text>
              )}
              {firebase.database.nativeModuleExists && (
                <Text style={styles.module}>database()</Text>
              )}
              {firebase.firestore.nativeModuleExists && (
                <Text style={styles.module}>firestore()</Text>
              )}
              {firebase.functions.nativeModuleExists && (
                <Text style={styles.module}>functions()</Text>
              )}
              {firebase.iid.nativeModuleExists && (
                <Text style={styles.module}>iid()</Text>
              )}
              {firebase.links.nativeModuleExists && (
                <Text style={styles.module}>links()</Text>
              )}
              {firebase.messaging.nativeModuleExists && (
                <Text style={styles.module}>messaging()</Text>
              )}
              {firebase.notifications.nativeModuleExists && (
                <Text style={styles.module}>notifications()</Text>
              )}
              {firebase.perf.nativeModuleExists && (
                <Text style={styles.module}>perf()</Text>
              )}
              {firebase.storage.nativeModuleExists && (
                <Text style={styles.module}>storage()</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </Container>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  icon: {
    fontSize: 15,
    marginLeft: 'auto',
  },
});
