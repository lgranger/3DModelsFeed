import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AuthorInfo = ({ authorName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.authorName}>{authorName}</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  authorName: {
    fontSize: 16,
  },
  followButton: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  followButtonText: {
    color: '#000',
    fontSize: 14,
  },
});

export default AuthorInfo;
