export default DashboardDataFilter = (users,posts)=>{
    const dataArray=[];
    // console.log(posts)
   users.forEach(user=>{
       posts.filter(post=>post.userId===user.id).forEach(obj=>{
           dataArray.push({
               userId:user.id,
               userName:user.username,
               postId:obj.id,
               postBody:obj.body,
               postTitle:obj.title
           })
       })
   })
   return dataArray
}

