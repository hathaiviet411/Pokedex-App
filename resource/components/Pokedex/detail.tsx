import React from 'react';
import pokemonDetail from './pokemon-detail';
import FastImage from 'react-native-fast-image';
const imageSourcePrefix = '../../../public/images/info';

import { AntDesign } from '@expo/vector-icons';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export interface props {
  route: any;
  navigation: any;
};

export default function DetailPokedex(props) {
  const item = props.route.params.item;
  const weight = require(`${imageSourcePrefix}/weight.png`);
  const height = require(`${imageSourcePrefix}/height.png`);
  const category = require(`${imageSourcePrefix}/category.png`);
  const pokeball = require(`${imageSourcePrefix}/pokeball.png`);
  const male = require(`${imageSourcePrefix}/male.png`);
  const female = require(`${imageSourcePrefix}/female.png`);
  const evoBulbasaur = require(`${imageSourcePrefix}/evo_bulbasaur.png`);
  const evoIvysaur = require(`${imageSourcePrefix}/evo_ivysaur.png`);
  const evoVenusaur = require(`${imageSourcePrefix}/evo_venusaur.png`);
  const evolutionArrowDown = require(`${imageSourcePrefix}/evolution_arrow_down.png`);

  const handleBackAction = () => {
    props.navigation.goBack();
  };

  const PercentageBar = ({ percentage }) => {
    const maleWidth = `${percentage.male}%`;
    const femaleWidth = `${percentage.female}%`;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.percentageBar}>
          <View style={[{ width: maleWidth, backgroundColor: '#2551C3' }, styles.childPercentageBarLeft]} />
          <View style={[{ width: femaleWidth, backgroundColor: '#FF7596' }, styles.childPercentageBarRight]} />
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <FastImage
              style={{
                width: 24,
                height: 24,
              }}
              defaultSource={male}
              resizeMode={FastImage.resizeMode.contain}
              source={{ priority: FastImage.priority.normal }}
            />

            <Text style={styles.infoText}>{maleWidth}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <FastImage
              style={{
                width: 24,
                height: 24,
              }}
              defaultSource={female}
              resizeMode={FastImage.resizeMode.contain}
              source={{ priority: FastImage.priority.normal }}
            />

            <Text style={styles.infoText}>{femaleWidth}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.headerBackground, { backgroundColor: item ? item.elementColor : '' }]}>
      </View>

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => { handleBackAction() }}
          style={styles.backButton}
        >
          <AntDesign name='left' size={24} color='#ffffff' />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.favoriteButton}
        >
          <AntDesign name='hearto' size={24} color='#ffffff' />
        </TouchableOpacity>
      </View>

      <View style={styles.avatarCard}>
        <FastImage
          style={{
            width: 200,
            height: 200,
          }}
          resizeMode={FastImage.resizeMode.contain}
          source={{ uri: item ? item.elementBackground : '', priority: FastImage.priority.normal, }}
        />

        <Image
          style={{
            top: 100,
            width: 150,
            height: 150,
            position: 'absolute',
          }}
          source={item.gif}
          resizeMode='contain'
        // resizeMode={FastImage.resizeMode.contain}
        // source={{ uri: item ? item.avatar : '', priority: FastImage.priority.normal }}
        />
      </View>

      <View style={styles.mainInfo}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.name}>{item ? item.name : ''}</Text>

          <Text>{item ? item.coordinate : ''}</Text>

          <View style={{ flexDirection: 'row', gap: 10, marginVertical: 10 }}>
            <TouchableOpacity
              style={[styles.elementButton, { backgroundColor: item ? item.elementColor : '' }]}
            >
              <Image
                style={{
                  left: 5,
                  width: 30,
                  height: 30,
                  position: 'absolute',
                }}
                source={{ uri: item ? item.elementImage : '' }}
              />
              <Text style={styles.elementButtonText}>{item ? item.element : ''}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.typeButton, { backgroundColor: item ? item.typeColor : '' }]}
            >
              <Image
                style={{
                  left: 5,
                  width: 30,
                  height: 30,
                  position: 'absolute',
                }}
                source={{ uri: item ? item.typeImage : '' }}
              />

              <Text style={styles.typeButtonText}>{item ? item.type : ''}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.descriptionText}>
            {item ? pokemonDetail[item.id - 1]['description'] : ''}
          </Text>

          <View style={styles.horizontalBar} />

          <View style={{ flexDirection: 'row', gap: 20 }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
                <FastImage
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  defaultSource={weight}
                  resizeMode={FastImage.resizeMode.contain}
                  source={{ priority: FastImage.priority.normal }}
                />

                <Text style={styles.infoText}>Weight</Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoCardText}>6,9 kg</Text>
              </View>

              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
                <FastImage
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  defaultSource={category}
                  resizeMode={FastImage.resizeMode.contain}
                  source={{ priority: FastImage.priority.normal }}
                />

                <Text style={styles.infoText}>Category</Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoCardText}>Seed</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
                <FastImage
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  defaultSource={height}
                  resizeMode={FastImage.resizeMode.contain}
                  source={{ priority: FastImage.priority.normal }}
                />
                <Text style={styles.infoText}>Height</Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoCardText}>0,7 m</Text>
              </View>

              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
                <FastImage
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  defaultSource={pokeball}
                  resizeMode={FastImage.resizeMode.contain}
                  source={{ priority: FastImage.priority.normal }}
                />
                <Text style={styles.infoText}>Ability</Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoCardText}>Overgrow</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.infoText}>Gender</Text>

            <PercentageBar percentage={{ male: 87.5, female: 12.5 }} />
          </View>

          <View style={{ marginVertical: 20, flexDirection: 'column', }}>
            <Text style={styles.titleText}>Weakness</Text>

            <View style={{ flex: 1, flexDirection: 'column', paddingTop: 20, gap: 20 }}>
              <View style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
                <View style={[styles.weaknessCard, { backgroundColor: '#FF9D55' }]}>
                  <FastImage
                    style={{
                      width: 40,
                      height: 40,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={{
                      uri: 'https://raw.githubusercontent.com/nonamelittlefox/Pokedex-App/develop/public/images/fire.png',
                      priority: FastImage.priority.normal
                    }}
                  />

                  <Text style={styles.weaknessText}>Fire</Text>
                </View>

                <View style={[styles.weaknessCard, { backgroundColor: '#FA7179' }]}>
                  <FastImage
                    style={{
                      width: 40,
                      height: 40,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={{
                      uri: 'https://raw.githubusercontent.com/nonamelittlefox/Pokedex-App/develop/public/images/psiquico.png',
                      priority: FastImage.priority.normal
                    }}
                  />

                  <Text style={styles.weaknessText}>Psychic</Text>
                </View>
              </View>

              <View style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
                <View style={[styles.weaknessCard, { backgroundColor: '#89AAE3' }]}>
                  <FastImage
                    style={{
                      width: 40,
                      height: 40,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={{
                      uri: 'https://raw.githubusercontent.com/nonamelittlefox/Pokedex-App/develop/public/images/flying.png',
                      priority: FastImage.priority.normal
                    }}
                  />

                  <Text style={styles.weaknessText}>Flying</Text>
                </View>

                <View style={[styles.weaknessCard, { backgroundColor: '#73CEC0' }]}>
                  <FastImage
                    style={{
                      width: 40,
                      height: 40,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={{
                      uri: 'https://raw.githubusercontent.com/nonamelittlefox/Pokedex-App/develop/public/images/gelo.png',
                      priority: FastImage.priority.normal
                    }}
                  />

                  <Text style={styles.weaknessText}>Frost</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.titleText}>Evolutions</Text>

            <View style={styles.evolutionCard}>
              <TouchableOpacity style={styles.evolutionCardItem}>
                <View style={[styles.evolutionCardItemLeft, { backgroundColor: item ? item.elementColor : '' }]}>
                  <FastImage
                    style={{
                      width: 90,
                      height: 90,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={{ uri: item ? item.elementBackground : '', priority: FastImage.priority.normal }}
                  />

                  <FastImage
                    style={{
                      width: 180,
                      height: 180,
                      position: 'absolute',
                      bottom: -15,
                    }}
                    defaultSource={evoBulbasaur}
                    resizeMode={FastImage.resizeMode.contain}
                    source={{ priority: FastImage.priority.normal }}
                  />
                </View>

                <View style={styles.evolutionCardItemRight}>
                  <Text style={{ fontSize: 18, fontWeight: '700' }}>Bulbasaur</Text>
                  <Text style={{ color: '#333333', fontWeight: '600' }}>Nº001</Text>

                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <FastImage
                      style={{
                        width: 35,
                        height: 35,
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                      source={{ uri: item ? item.elementImage : '', priority: FastImage.priority.normal }}
                    />

                    <FastImage
                      style={{
                        width: 35,
                        height: 35,
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                      source={{ uri: item ? item.typeImage : '', priority: FastImage.priority.normal }}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <FastImage
                  style={{
                    width: 65,
                    height: 65,
                  }}
                  defaultSource={evolutionArrowDown}
                  resizeMode={FastImage.resizeMode.contain}
                  source={{ priority: FastImage.priority.normal }}
                />

                <Text style={{ fontSize: 18, fontWeight: '700', color: '#173EA5', marginLeft: 10 }}>Level 16</Text>
              </View>

              <TouchableOpacity style={styles.evolutionCardItem}>
                <View style={[styles.evolutionCardItemLeft, { backgroundColor: item ? item.elementColor : '' }]}>
                  <FastImage
                    style={{
                      width: 90,
                      height: 90,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={{ uri: item ? item.elementBackground : '', priority: FastImage.priority.normal }}
                  />

                  <FastImage
                    style={{
                      width: 180,
                      height: 180,
                      position: 'absolute',
                      bottom: -15,
                    }}
                    defaultSource={evoIvysaur}
                    resizeMode={FastImage.resizeMode.contain}
                    source={{ priority: FastImage.priority.normal }}
                  />
                </View>

                <View style={styles.evolutionCardItemRight}>
                  <Text style={{ fontSize: 18, fontWeight: '700' }}>Ivysaur</Text>
                  <Text style={{ color: '#333333', fontWeight: '600' }}>Nº002</Text>

                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <FastImage
                      style={{
                        width: 35,
                        height: 35,
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                      source={{ uri: item ? item.elementImage : '', priority: FastImage.priority.normal }}
                    />

                    <FastImage
                      style={{
                        width: 35,
                        height: 35,
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                      source={{ uri: item ? item.typeImage : '', priority: FastImage.priority.normal }}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <FastImage
                  style={{
                    width: 65,
                    height: 65,
                  }}
                  defaultSource={evolutionArrowDown}
                  resizeMode={FastImage.resizeMode.contain}
                  source={{ priority: FastImage.priority.normal }}
                />

                <Text style={{ fontSize: 18, fontWeight: '700', color: '#173EA5', marginLeft: 10 }}>Level 36</Text>
              </View>

              <TouchableOpacity style={styles.evolutionCardItem}>
                <View style={[styles.evolutionCardItemLeft, { backgroundColor: item ? item.elementColor : '' }]}>
                  <FastImage
                    style={{
                      width: 90,
                      height: 90,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={{ uri: item ? item.elementBackground : '', priority: FastImage.priority.normal }}
                  />

                  <FastImage
                    style={{
                      width: 180,
                      height: 180,
                      position: 'absolute',
                      bottom: -15,
                    }}
                    defaultSource={evoVenusaur}
                    resizeMode={FastImage.resizeMode.contain}
                    source={{ priority: FastImage.priority.normal }}
                  />
                </View>

                <View style={styles.evolutionCardItemRight}>
                  <Text style={{ fontSize: 18, fontWeight: '700' }}>Venusaur</Text>
                  <Text style={{ color: '#333333', fontWeight: '600' }}>Nº003</Text>

                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <FastImage
                      style={{
                        width: 35,
                        height: 35,
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                      source={{ uri: item ? item.elementImage : '', priority: FastImage.priority.normal }}
                    />

                    <FastImage
                      style={{
                        width: 35,
                        height: 35,
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                      source={{ uri: item ? item.typeImage : '', priority: FastImage.priority.normal }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  headerBackground: {
    height: 300,
    borderBottomRightRadius: 320,
    borderBottomLeftRadius: 320,
  },

  header: {
    top: 60,
    zIndex: 999,
    width: '100%',
    marginTop: 10,
    position: 'absolute',
    flexDirection: 'row',
  },

  backButton: {
    left: 20,
    position: 'absolute',
  },

  favoriteButton: {
    right: 20,
    position: 'absolute',
  },

  avatarCard: {
    top: 80,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },

  mainInfo: {
    flex: 1,
    marginTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 15,
  },

  name: {
    fontSize: 30,
    color: '#1D1D1F',
    fontWeight: '500',
  },

  elementButton: {
    height: 45,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  elementButtonText: {
    fontSize: 16,
    marginLeft: 30,
    fontWeight: '700',
    color: '#F5F5F7'
  },

  typeButton: {
    height: 45,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  typeButtonText: {
    fontSize: 16,
    marginLeft: 30,
    fontWeight: '700',
    color: '#F5F5F7'
  },

  horizontalBar: {
    borderTopWidth: 1,
    marginVertical: 20,
    borderTopColor: '#EEEEEE',
  },

  descriptionText: {
    fontSize: 16,
    lineHeight: 20,
    color: '#1D1D1F',
    textAlign: 'justify',
  },

  infoText: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 10,
    color: '#999999',
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  infoCard: {
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 20,
    alignItems: 'center',
    borderColor: '#999999',
    justifyContent: 'center',
  },

  infoCardText: {
    fontSize: 18,
    fontWeight: '700',
  },

  percentageBar: {
    height: 15,
    borderRadius: 15,
    marginVertical: 20,
    flexDirection: 'row',
  },

  childPercentageBarRight: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },

  childPercentageBarLeft: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },

  titleText: {
    fontSize: 20,
    fontWeight: '700',
  },

  weaknessCard: {
    flex: 1,
    height: 45,
    paddingLeft: 10,
    borderRadius: 45,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  weaknessText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#000000',
    fontWeight: '600',
  },

  evolutionCard: {
    marginTop: 20,
    borderRadius: 15,
    borderColor: '#999999',
    borderWidth: 1,
    padding: 20,
    gap: 20,
    flexDirection: 'column',
  },

  evolutionCardItem: {
    flex: 1,
    height: 100,
    borderRadius: 45,
    flexDirection: 'row',
    borderColor: '#999999',
    borderWidth: 1,
  },

  evolutionCardItemLeft: {
    flex: 1.5,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  evolutionCardItemRight: {
    flex: 2,
    gap: 5,
    paddingLeft: 20,
    borderTopRightRadius: 45,
    borderBottomRightRadius: 45,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});