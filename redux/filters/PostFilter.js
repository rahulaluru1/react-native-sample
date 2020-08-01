export default getPost=(posts,id)=>{
    var data={}
    posts.forEach(post=>{
        if(post.id===id){
            data = post;
            return data;
        }
    })
    return data;
}