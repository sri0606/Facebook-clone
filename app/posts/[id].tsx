// Import necessary libraries and components
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link, useLocalSearchParams, useNavigation } from 'expo-router';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Platform, Animated } from 'react-native';
import postsData from '../../assets/posts/posts.json'; 
import {Post, Comment} from '../../types/Post';
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import  Colors from "../../constants/Colors";
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const PostDetailScreen = () => {
    const navigation = useNavigation();
    const { id } = useLocalSearchParams();
    const [posts, setPosts] = useState<Post[]>([]); 

    useEffect(()=> {
        setPosts(postsData);
    },[]);

    const post = (posts as Post[]).find((item) => item.id === id);

    if (!post) {
      return <Text>Loading...</Text>;
    }
    
    const PostDetailsHeader = () => { 
        useLayoutEffect(() => {
            navigation.setOptions({
              headerTitle: '',
              headerTransparent: true,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={24} color={'#fff'} />
                </TouchableOpacity>
              ),
            });
          }, []);
        
        return(
        <SafeAreaView style={styles.usernameContainer}>
        {/* view profile */}
        <Link href={`/profiles/${post.username}`} asChild>
        {/* profile picture */}
        <Image source={{uri:post.mediaUrl}} style={styles.profilePicture}></Image>
        </Link>
        <View> 
            <Text style={styles.userName}>{post.username}</Text>
            {/* Posted date */}
            <Text style={styles.postedDate}>{post.postedDate}</Text>
        </View>
    </SafeAreaView>
     )};

    const PostDetails = () => { 
        return(
        <View style={{marginTop:10,}}>

            <Text style={styles.description}>{post.description}</Text>
            {/* Render Image or Video */}
            <Image source={{uri:post.mediaUrl}} style={styles.media}></Image>
            <View style={[styles.seperator, {marginHorizontal:8}]}></View>
            {/* View to display links to comment, share, like */}
            <View style={styles.rowContainer}>
                <View style={styles.rowContainer}>  
                    <AntDesign name="like2" size={24} color={Colors.lightGrey} />
                    <Text style={[styles.likesContainerText,{fontWeight:"bold"}]}>Like</Text>
                </View>
                <View style={styles.rowContainer}>
                    <FontAwesome name="comment-o" size={24} color={Colors.lightGrey}  />
                    <Text style={[styles.likesContainerText,{fontWeight:"bold"}]}>Comment</Text>
                </View>
                <View style={styles.rowContainer}>
                    <MaterialCommunityIcons name="share-outline" size={24} color={Colors.lightGrey} />
                    <Text style={[styles.likesContainerText,{fontWeight:"bold"}]}>Share</Text>
                </View>
            </View>
            <View style={[styles.seperator, {marginHorizontal:8}]}></View>
            {/* View to display numeber of likes, share, comment, views */}
            <View style={{flexDirection:"row", marginHorizontal:8, marginVertical:9}}>
                <AntDesign name="like1" size={18} color="blue" />
                <Text style={styles.likesContainerText}>{post.likes}</Text>
            </View>

            <View style={[styles.seperator]}></View>

        </View>
    )};

    const comments = post.comments;
    const renderComments=({ item }: { item: Comment }) => {
        return(
        <View style={[styles.rowContainer, {justifyContent:"flex-start"}]}>
            <View>
                {/* view profile */}
                <Link href={`/profiles/${item.username}`} asChild>
                {/* profile picture */}
                <Image source={{uri:post.mediaUrl}} style={styles.profilePicture}></Image>
                </Link>
            </View>
            <View style={styles.commentContainer}> 
                <Text style={styles.userName}>{item.username}</Text>
                <Text style={{color:Colors.lightText}}>{item.comment}</Text>
            </View>
            
        </View>
    )};
    const ItemSeparator = () => (
        <View
          style={{
            height: 8,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    return (
        <View style={styles.container}>
            <PostDetailsHeader/>
            <FlatList
            data={comments} 
            renderItem={renderComments}
            keyExtractor={(item) => item.commentId}
            ListHeaderComponent={<PostDetails/>}>
            </FlatList>
        </View>
        
        );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:  Platform.OS === 'android' ? 40 : 0,
    backgroundColor:Colors.dark,
  },
    rowContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical:5,
        marginHorizontal:4
    },
    userName:{
        color:Colors.lightText,
        fontWeight:"bold",
        marginBottom:6
    },
    postedDate:{
        color:Colors.lightGrey,
    },
    description:{
        color:Colors.lightText,
        marginLeft:10,
        marginBottom:8,
    },
    media: {
        width:'100%',
        height:400,
        marginBottom:10
    },
    profilePicture:{
        width: 40,         // Set the width of the button
        height: 40,  
        marginLeft:8,
        backgroundColor:Colors.grey,
        borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:10,
    },
    usernameContainer:{
        flexDirection:"row",
        alignItems: 'center',
        marginLeft:40,
        marginTop:10,
    },
    likesContainerText:{
        color:Colors.lightGrey,
        marginLeft:6,
        marginBottom:8,
    },
    seperator:{
        wdith:"100%",
        height:1, 
        backgroundColor: Colors.grey,
    },

    // header
    createPost:{
        flexDirection:"row",
        alignItems: 'center',
        paddingLeft:5,
        marginVertical:15
      },
      title: { 
        fontSize: 20,
        fontWeight: 'bold',
      },
      buttons:{
        width: 40,         // Set the width of the button
        height: 40,  
        marginLeft:8,
        backgroundColor:Colors.grey,
        borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:10,
    },
    imagesButton:{
      marginLeft:145,
    },
    commentContainer:{
        marginHorizontal:10,
        backgroundColor:Colors.grey,
        padding:10,
        borderRadius:20,
    }
});

const handleLike = () => {
  // Like interaction logic
};

const handleComment = () => {
  // Comment interaction logic
};

const handleShare = () => {
  // Share interaction logic
};

export default PostDetailScreen;
