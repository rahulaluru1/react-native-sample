export default getSearchedPosts=(posts,name)=>{
    var data=[];
    posts.forEach(post=>{
        if(post.userName===name){
            data.push(post);
        }
    });
    return  data;
}