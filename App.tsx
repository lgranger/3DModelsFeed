import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import CardList from './components/CardList';
import Details from './components/Details';
import { ProjectData } from './mockData';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState<ProjectData>();

  const showModal = (data: ProjectData) => {
    setSelectedCardData(data);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <CardList showModal={showModal} />
      <Modal visible={isModalVisible} animationType="fade" transparent={true} onRequestClose={closeModal}>
        <View style={styles.modalBackground} >
          <View style={styles.modal}>
            <Details data={selectedCardData} onClose={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    position: 'absolute',
    top: -40,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '88%',
    maxHeight: '85%',
  },
});

export default App;

