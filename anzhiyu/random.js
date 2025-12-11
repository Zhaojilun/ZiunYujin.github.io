var posts=["2025/12/11/hello-world/","2025/12/11/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };