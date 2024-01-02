import { Platform,StyleSheet,TouchableOpacity} from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { Text, View } from '../../components/Themed';
import HomeHeader from '../../components/HomeHeader';
import { Link } from 'expo-router';
import Posts from '../../components/Posts';

const HomeScreen = () =>{
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Posts />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:  Platform.OS === 'android' ? 40 : 0,
    backgroundColor:Colors.dark,
  },

});

export default HomeScreen;