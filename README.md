This plugin allows to import JAVA properties as json

## Install and usage


Install the package first:
```
npm install --save-dev parcel-transformer-java-properties
```

And edit `.parcelrc` file to add new transformer
```
/* .parcelrc */
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{properties}": ["parcel-transformer-java-properties"]
  }
}
```


## Usage

Use in import:

```javascript
import * as texts from "../../../resources/l10n/messages.properties";
```
