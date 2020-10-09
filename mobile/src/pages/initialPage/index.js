import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import { MaterialCommunityIcons , Feather } from '@expo/vector-icons'; 

import styles from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menu} >
        <View style={styles.espace} />
        <Text style={styles.logo}>Google Podcast</Text>
        <View style={styles.profile} />
      </View>
      <View style={styles.podcastSubscribe} >
        <View style={styles.podcast} />
        <View style={styles.podcast} />
        <View style={styles.podcast} />
        <View style={styles.podcast} />
        <View style={styles.podcast} />
        <View style={styles.podcast} />
        <View style={styles.podcast} />
      </View>
      <View style={[styles.rowDescription, styles.borderTop]}>
        <View style={styles.podcastProfile}>
          <View style={styles.logoPodcast} />
          <View style={styles.infoPodcast}>
            <Text style={styles.title}>Título do podcast</Text>
            <Text style={styles.time}>6 horas</Text>
          </View>
        </View>
        <Text style={styles.titlePodcast}>
        Titulo do Podcast - Episódio 01 ...
        </Text>
        <Text style={styles.descriptionPodcast}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>
        <View style={styles.rowButtons}>
          <View style={styles.firstbutton}>
            <MaterialCommunityIcons name="play-circle-outline" size={22} color="#3380e6" />
            <Text style={styles.minutes}>00min</Text>
          </View>
          <MaterialCommunityIcons name="playlist-plus" size={22} color="#3380e6" />
          <Feather name="arrow-down-circle" size={22} color="#3380e6" style={{marginLeft: '15px'}} />
        </View>
      </View>
      <View style={styles.rowDescription}>
        <View style={styles.podcastProfile}>
          <View style={styles.logoPodcast} />
          <View style={styles.infoPodcast}>
            <Text style={styles.title}>Título do podcast</Text>
            <Text style={styles.time}>6 horas</Text>
          </View>
        </View>
        <Text style={styles.titlePodcast}>
        Titulo do Podcast - Episódio 01 ...
        </Text>
        <Text style={styles.descriptionPodcast}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>
        <View style={styles.rowButtons}>
          <View style={styles.firstbutton}>
            <MaterialCommunityIcons name="play-circle-outline" size={22} color="#3380e6" />
            <Text style={styles.minutes}>00min</Text>
          </View>
          <MaterialCommunityIcons name="playlist-plus" size={22} color="#3380e6" />
          <Feather name="arrow-down-circle" size={22} color="#3380e6" style={{marginLeft: '15px'}} />
        </View>
      </View>
      <View style={styles.rowDescription}>
        <View style={styles.podcastProfile}>
          <View style={styles.logoPodcast} />
          <View style={styles.infoPodcast}>
            <Text style={styles.title}>Título do podcast</Text>
            <Text style={styles.time}>6 horas</Text>
          </View>
        </View>
        <Text style={styles.titlePodcast}>
        Titulo do Podcast - Episódio 01 ...
        </Text>
        <Text style={styles.descriptionPodcast}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>
        <View style={styles.rowButtons}>
          <View style={styles.firstbutton}>
            <MaterialCommunityIcons name="play-circle-outline" size={22} color="#3380e6" />
            <Text style={styles.minutes}>00min</Text>
          </View>
          <MaterialCommunityIcons name="playlist-plus" size={22} color="#3380e6" />
          <Feather name="arrow-down-circle" size={22} color="#3380e6" style={{marginLeft: '15px'}} />
        </View>
      </View>
      <View style={styles.rowDescription}>
        <View style={styles.podcastProfile}>
          <View style={styles.logoPodcast} />
          <View style={styles.infoPodcast}>
            <Text style={styles.title}>Título do podcast</Text>
            <Text style={styles.time}>6 horas</Text>
          </View>
        </View>
        <Text style={styles.titlePodcast}>
        Titulo do Podcast - Episódio 01 ...
        </Text>
        <Text style={styles.descriptionPodcast}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>
        <View style={styles.rowButtons}>
          <View style={styles.firstbutton}>
            <MaterialCommunityIcons name="play-circle-outline" size={22} color="#3380e6" />
            <Text style={styles.minutes}>00min</Text>
          </View>
          <MaterialCommunityIcons name="playlist-plus" size={22} color="#3380e6" />
          <Feather name="arrow-down-circle" size={22} color="#3380e6" style={{marginLeft: '15px'}} />
        </View>
      </View>
      <View style={styles.rowDescription}>
        <View style={styles.podcastProfile}>
          <View style={styles.logoPodcast} />
          <View style={styles.infoPodcast}>
            <Text style={styles.title}>Título do podcast</Text>
            <Text style={styles.time}>6 horas</Text>
          </View>
        </View>
        <Text style={styles.titlePodcast}>
        Titulo do Podcast - Episódio 01 ...
        </Text>
        <Text style={styles.descriptionPodcast}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>
        <View style={styles.rowButtons}>
          <View style={styles.firstbutton}>
            <MaterialCommunityIcons name="play-circle-outline" size={22} color="#3380e6" />
            <Text style={styles.minutes}>00min</Text>
          </View>
          <MaterialCommunityIcons name="playlist-plus" size={22} color="#3380e6" />
          <Feather name="arrow-down-circle" size={22} color="#3380e6" style={{marginLeft: '15px'}} />
        </View>
      </View>
      <View style={styles.rowDescription}>
        <View style={styles.podcastProfile}>
          <View style={styles.logoPodcast} />
          <View style={styles.infoPodcast}>
            <Text style={styles.title}>Título do podcast</Text>
            <Text style={styles.time}>6 horas</Text>
          </View>
        </View>
        <Text style={styles.titlePodcast}>
        Titulo do Podcast - Episódio 01 ...
        </Text>
        <Text style={styles.descriptionPodcast}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>
        <View style={styles.rowButtons}>
          <View style={styles.firstbutton}>
            <MaterialCommunityIcons name="play-circle-outline" size={22} color="#3380e6" />
            <Text style={styles.minutes}>00min</Text>
          </View>
          <MaterialCommunityIcons name="playlist-plus" size={22} color="#3380e6" />
          <Feather name="arrow-down-circle" size={22} color="#3380e6" style={{marginLeft: '15px'}} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    
    
  );
}
