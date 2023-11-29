var Spotify = require('spotify-web-api-js');
var s = new Spotify();

var spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken('0e73f40e691748508ab27f83a175a362');

// get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
  });
  
  // get Elvis' albums, using Promises through Promise, Q or when
  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    function (data) {
      console.log('Artist albums', data);
    },
    function (err) {
      console.error(err);
    }
  );