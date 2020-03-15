# node-spotify-integration
library that aims to make communication with spotify more transparent

## Example

```javascript
const service = require('../src/index')(client_id, client_secret)
```

### methods

### artists

```javascript
service.artists.byId('artist_id')
```
```javascript
service.artists.releated('artist_id')
```
```javascript
service.artists.search('artist_name')
```
```javascript
service.artists.several('artist_id, artist_id')
```

### tracks

```javascript
service.tracks.byId('track_id')
```
```javascript
service.tracks.search('track_name')
```
```javascript
service.tracks.several('track_id, track_id')
```

### Return

#### success
```javascript
{
  status: ,
  data: 
}
```

#### error
```javascript
{
  status: ,
  data: {
    error:
  }
}
```
