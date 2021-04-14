# Basic data-fetching script using Axios & Cheerio

## Running the following will output a json file of the results

</br>

```bash
node index.js
```

</br>

### Note that you must install the local dependencies upon cloning/downloading this repo

<hr>

## Current output:

```json
[
    {
        "links": [
            "Apartments"
        ]
    },
    {
        "links": [
            "Architecture"
        ]
    },
    {
        "links": [
            "Organizations"
        ]
    },
    {
        "links": [
            "Attractions"
        ]
    }, ...
```

</br>

## Desired output:

```json
[
  {
    "links": [
      "Apartments",
      "Architecture",
      "Organizations",
      "Attractions",
      ...
    ]
  }
]
```
