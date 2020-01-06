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

function createPost(post)
{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      posts.push(post);
      const error=true;
      if(!error)
        resolve();
      else
        reject('Err:something went wrong');
    },2000)
  })
}

createPost({ title:'ThirdPost',body:'This is Third Post'}).then(getPost).catch(err=>console.log(err));
