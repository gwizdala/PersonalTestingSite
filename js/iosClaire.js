/////////////////////////////////////////////////////
//  Functions for buttons of iOSClaire Application
//

function loveQuoteOTD()
{
  var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       console.log(this);
       $('#quote-title').text("Love Quote of the Day");
       $('#quote-content').html(post.content);
     }
   };
   xhttp.open("GET", "https://www.brainyquote.com/link/quotelo.js", true);
   xhttp.send();
}
function quoteOTD()
{
  document.getElementById("randomQuote").style.display="none";
  document.getElementById("quoteOTD").style.display="block";
  document.getElementById("loveQuoteOTD").style.display="none";
}
function randomQuote()
{
  $.ajax( {
        url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
          var post = data.shift(); // The data is an array of posts. Grab the first one.
          $('#quote-title').text("Random Quote");
          $('#quote-content').html(post.content);
        },
        cache: false
  });
}
