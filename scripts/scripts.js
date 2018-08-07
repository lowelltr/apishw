"use strict";
console.log("working");
$.get(`https://www.reddit.com/r/aww/.json`, (data) =>{
  console.log(data.data.children);
  let items = data.data.children;
  items.forEach(function(thing){
    console.log(thing.data.title.thumbnail);
    let url = "https://www.reddit.com" + thing.data.permalink;
    $(".stuff").append(
      "<p>"+thing.data.title+"</p>", 
      "<img src="+"'"+thing.data.thumbnail+"'"+ ">",
      "<a href='"+ url+ "'>see more</a>"

    )

   
  
    

  })
});