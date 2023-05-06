import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

const ActionButtons = ({ data }) => {
  const [likes, setLikes] = useState(data.likes);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(data.comments);

  const handlePress = (buttonName: string) => {
    if (buttonName === 'like') {
      if (liked) {
        setLiked(false);
        setLikes(likes - 1);
      } else {
        setLiked(true);
        setLikes(likes + 1);
      }
    } else if (buttonName === 'comment') {
      setComments(comments + 1);
    } else {
      console.log(buttonName)
    }
  };

  return (
    <View style={styles.actionButtonsContainer}>
      <View style={styles.leftActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handlePress('like')}
        >
          <Icon 
            name={liked ? "heart" : "heart-outline"}
            size={20} 
            color="#000" 
          />
          <Text style={styles.actionButtonText}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handlePress('comment')}
        >
          <Icon name="chatbubble-outline" size={20} color="#000" />
          <Text style={styles.actionButtonText}>{comments}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handlePress('download')}
        >
          <Icon name="download-outline" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handlePress('share')}
        >
          <Icon name="share-outline" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handlePress('more')}
        >
          <Icon name="ellipsis-horizontal" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtonsContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftActions: {
    flexDirection: 'row',
  },
  rightActions: {
    flexDirection: 'row',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginRight: 5,
  },
  actionButtonText: {
    color: '#000',
    fontSize: 14,
    marginLeft: 4,
  },
});

export default ActionButtons;
