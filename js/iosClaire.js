/////////////////////////////////////////////////////
//  Functions for buttons of iOSClaire Application
//

//when we start up we want to run the quote of the Day
$( document ).ready(function() {
  quoteOTD();
});

function quoteOTD()
{
  var url = "http://feeds.feedburner.com/brainyquote/QUOTEBR";
  $.ajax( {
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
          var result = data.responseData.feed;
          $('#quote-title').text("Quote of the Day");
          $('#quote-content').html(result.entries[0].content);

          if(result.entries[0].author != '') {
            $('#quote-author').html(result.entries[0].author);
          } else {
            $('#quote-author').html("Unknown");
          }
        },
        cache: false
  });
}

function loveQuoteOTD()
{
  var url = "http://feeds.feedburner.com/brainyquote/QUOTELO";
  $.ajax( {
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
          var result = data.responseData.feed;
          $('#quote-title').text("Love Quote of the Day");
          $('#quote-content').html(result.entries[0].content);

          if(result.entries[0].author != '') {
            $('#quote-author').html(result.entries[0].author);
          } else {
            $('#quote-author').html("Unknown");
          }
        },
        cache: false
  });
}

function randomQuote()
{
  $.ajax({
        url: "http://api.forismatic.com/api/1.0/",
        jsonp: "jsonp",
        dataType: "jsonp",
        data: {
          method: "getQuote",
          lang: "en",
          format: "jsonp"
        },
        success: function(data) {
          $('#quote-title').text("Random Quote");
          $('#quote-content').html('"' + data.quoteText + '"');

          if(data.quoteAuthor != '') {
            $('#quote-author').html(data.quoteAuthor);
          } else {
            $('#quote-author').html("Unknown");
          }
        },
        cache: false
  });
}
