import React,{useEffect,useState} from "react";
import Colors from "../constants/Colors";
import {Post} from "../types/Post";
import postsData from "../assets/posts/posts.json"
import { StyleSheet,FlatList, Image, Text,TouchableOpacity, View } from "react-native";
import { Link, useNavigation } from "expo-router";
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Posts=()=>{
    const [posts, setPosts] = useState<Post[]>([]); 
    const navigation = useNavigation();
    useEffect(()=> {
        setPosts(postsData);
    },[]);

    const renderPost = ({ item }: { item: Post }) => (
        <Link href={`/posts/${item.id}`} asChild>
            <TouchableOpacity>
                <View style={{marginTop:10,}}>
                    <View style={styles.usernameContainer}>
                        {/* view profile */}
                        <TouchableOpacity onPress={() => navigation.navigate(`/profiles/${item.username}`)}>
                        {/* profile picture */}
                        <Image source={{uri:item.mediaUrl}} style={styles.profilePicture}></Image>
                        </TouchableOpacity>
                        <View> 
                            <Text style={styles.userName}>{item.username}</Text>
                            {/* Posted date */}
                            <Text style={styles.postedDate}>{item.postedDate}</Text>
                        </View>
                    </View>
                    
                    <Text style={styles.description}>{item.description}</Text>
                    {/* Render Image or Video */}
                    <Image source={{uri:item.mediaUrl}} style={styles.media}></Image>

                    {/* View to display numeber of likes, share, comment, views */}
                    <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:8}}>
                        <View style={{flexDirection:"row"}}>
                            <AntDesign name="like1" size={18} color="blue" />
                            <Text style={styles.likesContainerText}>{item.likes}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.likesContainerText}>{item.numComments} comments</Text>
                            <Text style={styles.likesContainerText}>{item.shares} shares</Text>
                            <Text style={styles.likesContainerText}>{item.views} views</Text>
                        </View>
                    </View>
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
                </View>
            </TouchableOpacity>
        </Link>
    );
    
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
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={
            <>
            <View style={styles.createPost}>
                {/* view profile */}
                <Link href={'/(tabs)/friends'} asChild>
                    <TouchableOpacity style={styles.buttons}>
                        {/* profile picture */}
                        <Ionicons name="search" size={24} />
                    </TouchableOpacity>
                </Link>
                {/* create post */}
                <Link href={'/(tabs)/friends'} asChild>
                    <TouchableOpacity>
                    <View>
                        <View>
                        <Text style={{ color: Colors.light}}>What's on your mind?</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </Link>
                <Link href={'/(tabs)/friends'} asChild>
                <TouchableOpacity style={styles.imagesButton}>
                    <Ionicons name="images" size={24} color="green"/>
                </TouchableOpacity>
                </Link>
            </View>
            <View style={{height: 8,width: "100%",backgroundColor: "#000",
          }} />
          </>
          }
        />
      );

}

const styles = StyleSheet.create({
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
        marginBottom:5,
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
});
export default Posts;