import React, { useState } from 'react';
import { Button, View } from 'react-native';
import Modal from 'react-native-modal';

import { Login } from './Login';
import { Register } from './Register';

export const LoginModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View>
      <Button title="Login" onPress={toggleModal} />
      <Modal isVisible={isModalVisible}>
        <View>
          <Login />
          <View>
            <Button title="Cancel" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export const RegisterModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View>
      <Button title="Register" onPress={toggleModal} />
      <Modal isVisible={isModalVisible}>
        <View>
          <Register />
          <View>
            <Button title="Cancel" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
