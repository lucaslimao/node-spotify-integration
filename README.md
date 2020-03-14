# node-spotify-integration
library that aims to make communication with spotify more transparent

## Example

```
const service = require('../src/index')(client_id, client_secret)
```

### methods

### artists

```
service.artists.byId('artist_id')
```
```
service.artists.releated('artist_id')
```
```
service.artists.search('artist_name')
```
```
service.artists.several('artist_id, artist_id')
```

### tracks

```
service.tracks.byId('track_id')
```
```
service.tracks.search('track_name')
```
```
service.tracks.several('track_id, track_id')
```

### Return

#### success
```
{
  status: ,
  data: 
}
```

#### error
```
{
  status: ,
  data: {
    error:
  }
}
```
