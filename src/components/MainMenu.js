import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
import { PaperProvider, Appbar, Drawer, Button } from 'react-native-paper'
import { withTheme } from 'react-native-paper';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const SocialIcons = [
  {
    name: 'facebook',
    backgroundColor: 'none',
    url: '#',
  },
  {
    name: 'twitter',
    backgroundColor: 'none',
    url: '#',
  },
  {
    name: 'instagram',
    backgroundColor: 'none',
    url: '#',
  },
];



function MainMenu() {

  const [state, setState] = useState({
    mobileView: false,
  });
  const [active, setActive] = useState('');


  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const { width } = Dimensions.get('window');
  const isSmallScreen = width < 600;
  const isMediumScreen = width >= 600 && width < 1200;

  return (
    !mobileView ? displayDesktop() : displayMobile()

  );
};



function displayMobile() {
  return (
    <PaperProvider>
      <Appbar.Header style={styles.mobileMenuContainer}>
        <Appbar.Action icon="menu" />
        <Appbar.Content title="MHK" style={{ alignSelf: 'center' }} />
      </Appbar.Header>
    </PaperProvider>
  );
}

function displayDesktop() {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <View style={styles.socialIcons}>
          {SocialIcons.map((item,index) => (
            <FontAwesome.Button key={index} name={item.name} backgroundColor={item.backgroundColor} size={12} />
          ))}
        </View>
        <View style={styles.leftMenu}>
          <TouchableOpacity>

            <Text style={styles.menuItem}>SHOP</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>PLAN MY KITCHEN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
        </View>
        <View style={styles.rightMenu}>
          <TouchableOpacity>
            <Text style={styles.menuItem}>ABOUT US</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>GALLERY</Text>
          </TouchableOpacity>

        </View>

        <Button icon={'cart'} mode='outlined' textColor={'white'} dark={true} style={styles.cartIcon} contentStyle={styles.cartButton} >
          <Text>MY ORDER</Text>
        </Button>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    // Add any other general styling you need
  },
  mobileMenuContainer: {

    width: '100%',
  },
  socialIcons: {
    flex: 1,
    flexDirection: 'row',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    paddingBottom: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  leftMenu: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuItem: {
    marginHorizontal: 20,
    display: 'flex',
    color: 'white',
    fontFamily:'Roboto-Regular',
    letterSpacing:2
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center'
  },
  rightMenu: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cartIcon: {
    borderColor: 'white',
    borderWidth:0.5,
    height:40,
    alignItems:'center',
    justifyContent:'center'
    // Styles for the cart icon
  },
  cartButton: {
    flexDirection: 'row-reverse'
  }
  ,
  logo: {
    width: 84,
    height: 33,
  },
});
export default withTheme(MainMenu);
