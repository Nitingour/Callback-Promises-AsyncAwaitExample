const posts=[
    { title:'FirstPost',body:'This is First Post'},
    { title:'SecondPost',body:'This is Second Post'}
 ]

function getPost()
{
  setTimeout(()=>{
       let output='';
       posts.forEach((post,index)=>{
       output += `<li>${post.title}</li>`;
      })
     document.body.innerHTML=output;
        },1000)
}

function createPost(post,callback)
{
    setTimeout(()=>{
      posts.push(post);
       callback();
    },2000)
}

createPost({ title:'ThirdPost',body:'This is Third Post'},getPost);
