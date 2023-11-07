import React, { Component, useEffect, useState } from 'react';
import MainMenu from '../components/MainMenu';
import { Text } from 'react-native';
import { View, ImageBackground, ScrollView, Image } from 'react-native-web';
import { Button } from 'react-native-paper';

export default function HomePage() {

  const [state, setState] = useState({
    mobileView: false
  });

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState('')


  const { mobileView } = state;
  useEffect(() => {

    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    const setImageSize = () => {
      return Image.getSize(require('../../assets/sliders/Bitmap.png'), (iwidth, iheight) => {

        setHeight(window.innerWidth / iwidth * iheight)
        setWidth(window.innerWidth)

      })
    };




    setResponsiveness();
    setImageSize();
    window.addEventListener("resize", () => {

      setResponsiveness()
      setImageSize()



    });

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, [])


  function Mobile() {
    return (
      <View style={{ height: height + 1 }}>

        <MainMenu />
        <ImageBackground source={require('../../assets/sliders/Bitmap.png')} style={{ width: width, height: height, position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 10, fontFamily: 'Roboto-Regular' }}>DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY</Text>
          <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', width: '60%', fontFamily: 'Helvetica-Bold' }}>Bespoke & made to measure handmade kitchen design</Text>
          <Button mode='outlined' buttonColor={'#D4B254'} textColor='white' >
            <Text style={{ fontFamily: 'Roboto-Regular' }}>ORDER NOW</Text>
          </Button>
        </ImageBackground>
      </View>
    );
  }


  function Desktop() {

    return (
      <View style={{ height: height + 1 }}>
        <ImageBackground source={require('../../assets/sliders/Bitmap.png')} style={{ width: width, height: height, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 10, fontFamily: 'Roboto-Regular' }}>DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY</Text>
          <Text style={{ color: 'white', fontSize: 35, textAlign: 'center', width: '60%', fontFamily: 'Helvetica-Bold' }}>Bespoke & made to measure handmade kitchen design</Text>
          <Button mode='contained' buttonColor={'#D4B254'} textColor='white' >
            <Text style={{ fontFamily: 'Roboto-Regular' }}>ORDER NOW</Text>
          </Button>
        </ImageBackground>
        <MainMenu />

      </View>
    );


  }

  return (
    <ScrollView>

      {mobileView ? Mobile() : Desktop()}
      <View style={{ flexDirection: mobileView ? 'column' : 'row' }}>
        <View style={{ flex: 1 }}>
          <Image source={require('../../assets/picture2.png')} style={{ height: height, width: 'auto' }} />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', margin: 35 }}>
          <Text style={{ fontFamily: 'Roboto-Regular', color: '#D4B254', fontSize: 13, marginBottom: 5 }}>QUALITY CRAFTMANSHIP FROM BUILD TO DELIVERY</Text>
          <Text style={{ fontFamily: 'Helvetica-Bold', color: '#222222', fontSize: 42, marginBottom: 35 }}>Discover the beauty of a handmade kitchen</Text>
          <Text style={{ fontFamily: 'Roboto-Regular', color: '#777777', fontSize: 15, marginBottom: 35 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.</Text>
          <View style={{ width: 150 }}>
            <Button mode='contained' buttonColor={'#D4B254'} textColor='white' style={{ alignContent: 'center', justifyContent: 'center' }} >
              <Text style={{ fontFamily: 'Roboto-Regular' }}>ABOUT US</Text>
            </Button>
          </View>

        </View>
      </View>

      <View style={{ backgroundColor: '#EEEEEE', alignContent: 'center', justifyContent: 'center', paddingVertical: mobileView ? 100 : 150, paddingHorizontal: mobileView ? 10 : 150 }}>
        <View style={{ alignSelf: 'center', alignContent: 'middle', justifyContent: 'center' }}>
          <Text style={{ fontFamily: 'Roboto-Regular', color: '#D4B254', fontSize: 13, marginBottom: 10, textAlign: 'center' }}>QUALITY CRAFTMANSHIP FROM BUILD TO DELIVERY</Text>
          <Text style={{ fontFamily: 'Helvetica-Bold', color: '#222222', fontSize: 25, marginBottom: 32, textAlign: 'center' }}>Over 35 years experience designing handmade kitchens</Text>
          <Text style={{ fontFamily: 'Roboto-Regular', color: '#777777', fontSize: 18, marginBottom: 35, textAlign: 'center' }}>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned. {"\n"} Jane, Dundee</Text>
        </View>
      </View>
      <View style={{ alignContent: 'center', justifyContent: 'center',padding: 40, }}>
        <View style={{ alignSelf: 'center', alignContent: 'center', justifyContent: 'center' }}>
          <Text style={{ fontFamily: 'Helvetica-Bold', color: '#222222', fontSize: 25, marginBottom: 32, textAlign: 'center' }}>Customer Gallery</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
            <Image source={require('../../assets/p1.png')} style={{ height: 200, width: 200, margin: 10 }} />
            <Image source={require('../../assets/p2.png')} style={{ height: 200, width: 200, margin: 10 }} />
            <Image source={require('../../assets/p3.png')} style={{ height: 200, width: 200, margin: 10 }} />
            <Image source={require('../../assets/p4.png')} style={{ height: 200, width: 200, margin: 10 }} />

          </ScrollView>
          <View>
            <Button mode='contained' buttonColor={'#D4B254'} textColor='white' style={{ alignContent: 'center', justifyContent: 'center', width: 150, alignSelf: 'center' }} >
              <Text style={{ fontFamily: 'Roboto-Regular' }}>VIEW MORE</Text>
            </Button>
          </View>
        </View>
      </View>
      <View>
        
      </View>

    </ScrollView>
  );

}



