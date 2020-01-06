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
      const error=false;
      if(!error)
        resolve();
      else
        reject('Err:something went wrong');
    },2000)
  })
}

async function init()
{
await createPost({ title:'ThirdPost',body:'This is Third Post'});
 getPost();
}

init();
