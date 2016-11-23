/////////////////////////////////////////////////////
//  Functions for buttons of iOSClaire Application
//

function loveQuoteOTD()
{
  $.ajax( {
        url: 'http://quotes.rest/qod.json',
        success: function(data) {
          $('#quote-title').text("Quote of the Day");
          $('#quote-content').html(data.contents.quotes[0].quote);
          $('#quote-author').html(data.contents.quotes[0].author);
        },
        cache: false
  });
}
function quoteOTD()
{
  $.ajax( {
        url: 'http://quotes.rest/qod.json?category=love',
        success: function(data) {
          $('#quote-title').text("Love Quote of the Day");
          $('#quote-content').html(data.contents.quotes[0].quote);
          $('#quote-author').html(data.contents.quotes[0].author);
        },
        cache: false
  });
}
function randomQuote()
{
  $.ajax( {
        url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
        success: function(data) {
          console.log(data);
          $('#quote-title').text("Random Quote");
          $('#quote-content').html(data.quoteText);
          $('#quote-author').html(data.quoteAuthor);
        },
        cache: false
  });
}
