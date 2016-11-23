/////////////////////////////////////////////////////
//  Functions for buttons of iOSClaire Application
//

//when we start up we want to run the quote of the Day
$( document ).ready(function() {
  quoteOTD();
});

function quoteOTD()
{
  $.ajax( {
        url: 'http://quotesondesign.com/api/3.0/api-3.0.json',
        crossDomain: true,
        dataType: 'jsonp',
        type: 'GET',
        success: function(data) {
          $('#quote-title').text("Quote of the Day");
          $('#quote-content').html(data.quote);
          $('#quote-author').html(data.author);
        },
        cache: false
  });
}

function loveQuoteOTD()
{
  $.ajax( {
        url: 'http://quotes.rest/qod.json',
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
  $.getJSON( {
        url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
        crossDomain: true,
        dataType: 'jsonp',
        type: 'GET',
        success: function(data) {
          console.log(data);
          $('#quote-title').text("Random Quote");
          $('#quote-content').html(data.quoteText);
          $('#quote-author').html(data.quoteAuthor);
        },
        cache: false
  });
}
