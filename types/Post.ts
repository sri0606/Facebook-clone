export type Comment = {
    username: string;
    comment: string;
    commentId: string;
  };
  
  export type Post = {
    id: string;
    username: string;
    postedDate:string,
    description: string;
    mediaUrl: string;
    likes: string;
    views:string;
    numComments: string;
    shares:string;
    comments: Comment[];
  };
  