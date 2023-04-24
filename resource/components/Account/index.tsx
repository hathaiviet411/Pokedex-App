import React from 'react';

import { Switch } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal } from 'react-native';

export interface props {
  navigation: any,
}

export default function Account(props) {
  const [isSwitchOn1, setIsSwitchOn1] = React.useState(false);
  const [isSwitchOn2, setIsSwitchOn2] = React.useState(false);
  const [isSwitchOn3, setIsSwitchOn3] = React.useState(false);
  const [isSwitchOn4, setIsSwitchOn4] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const onToggleSwitch = (index) => {
    switch (index) {
      case 1:
        setIsSwitchOn1(!isSwitchOn1);
        break;
      case 2:
        setIsSwitchOn2(!isSwitchOn2);
        break;
      case 3:
        setIsSwitchOn3(!isSwitchOn3);
        break;
      case 4:
        setIsSwitchOn4(!isSwitchOn4);
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    setModalVisible(false);

    props.navigation.navigate('AlphaLogin');
  };

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={{ gap: 10, paddingBottom: 40 }}>
          <Text style={[styles.title, { marginVertical: 10 }]}>Account information</Text>

          <Text style={styles.label}>Name</Text>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.normalText}>Junior Saraiva</Text>

            <TouchableOpacity style={styles.rightCaret}>
              <AntDesign name='right' size={18} color='#333333' />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Email</Text>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.normalText}>meuemail@gmail.com</Text>

            <TouchableOpacity style={styles.rightCaret} >
              <AntDesign name='right' size={18} color='#333333' />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Password</Text>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.normalText}>••••••••••••••••</Text>

            <TouchableOpacity style={styles.rightCaret}>
              <AntDesign name='right' size={18} color='#333333' />
            </TouchableOpacity>
          </View>

          <Text style={[styles.title, { marginVertical: 10 }]}>Pokédex</Text>

          <Text style={styles.label}>Mega evolutions</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.normalText}>Enables the display of mega evolutions.</Text>

            <Switch
              color='#173EA5'
              value={isSwitchOn1}
              style={styles.switchButton}
              onValueChange={(value) => { onToggleSwitch(1) }}
            />
          </View>

          <Text style={styles.label}>Other ways</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.normalText}>Enables the display of alternate Pokémon forms.</Text>

            <Switch
              color='#173EA5'
              value={isSwitchOn2}
              style={styles.switchButton}
              onValueChange={(value) => { onToggleSwitch(2) }}
            />
          </View>

          <Text style={[styles.title, { marginVertical: 10 }]}>Notification</Text>

          <Text style={styles.label}>Pokedex updates</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.normalText}>New Pokémon, abilities, information, etc.</Text>

            <Switch
              color='#173EA5'
              value={isSwitchOn3}
              style={styles.switchButton}
              onValueChange={(value) => { onToggleSwitch(3) }}
            />
          </View>

          <Text style={styles.label}>Pokemon world</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 40 }}>
              <Text style={styles.normalText}>Events and information from the world of pokémon.</Text>
            </View>

            <Switch
              color='#173EA5'
              value={isSwitchOn4}
              style={styles.switchButton}
              onValueChange={(value) => { onToggleSwitch(4) }}
            />
          </View>

          <Text style={[styles.title, { marginVertical: 10 }]}>Language</Text>

          <Text style={styles.label}>Interface language</Text>

          <Text style={styles.normalText}>Português (PT-BR)</Text>

          <Text style={styles.label}>In-game information language</Text>

          <Text style={styles.normalText}>English (US)</Text>

          <Text style={[styles.title, { marginVertical: 10 }]}>General</Text>

          <Text style={styles.label}>Version</Text>

          <Text style={styles.normalText}>0.8.12</Text>

          <Text style={styles.label}>Terms and conditions</Text>

          <Text style={styles.normalText}>Everything you need to know.</Text>

          <Text style={styles.label}>Help center</Text>

          <Text style={styles.normalText}>Need help, contact us.</Text>

          <Text style={styles.label}>About</Text>

          <Text style={styles.normalText}>Learn more about the app.</Text>

          <Text style={[styles.title, { marginVertical: 10 }]}>Others</Text>

          <TouchableOpacity onPress={() => { setModalVisible(true) }}>
            <Text style={[styles.label, { color: '#CD3131' }]}>Sign Out</Text>
          </TouchableOpacity>

          <Text style={styles.normalText}>You entered as Junior Saraiva.</Text>
        </View>

        <Modal
          transparent={true}
          animationType='slide'
          visible={modalVisible}
          onRequestClose={() => { setModalVisible(!modalVisible) }}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalContainerText}>Are you sure you want to quit?</Text>

            <TouchableOpacity
              onPress={() => { handleLogout() }}
              style={styles.confirmButton}
            >
              <Text style={styles.confirmButtonText}>Yes, leave.</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => { setModalVisible(!modalVisible) }}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelButtonText}>No, cancel.</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '700',
  },

  label: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '700',
  },

  normalText: {
    fontSize: 16,
    color: '#4D4D4D',
  },

  switchButton: {
    right: 0,
    position: 'absolute',
    transform: [{ scaleX: .7 }, { scaleY: .7 },],
  },

  rightCaret: {
    right: 0,
    position: 'absolute',
  },

  modalContainer: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },

  modalContainerText: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: '700',
  },

  confirmButton: {
    height: 45,
    width: '90%',
    borderRadius: 45 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CD3131',
  },

  confirmButtonText: {
    fontSize: 16,
    color: '#F5F5F7',
    fontWeight: '700',
  },

  cancelButton: {

  },

  cancelButtonText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '700',
  },
});