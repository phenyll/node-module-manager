# node-module-manager
Mounts NPM-Modules at runtime into the running project

## Usage

```javascript
var ModuleManager = require("ModuleManager");
var mysql = ModuleManager.get('mysql');
//use it!
mysql.createConnection(/*[..]*/);
```

## Restrictions
For security-reasons and my use-case i currently restricted the use to the mysql package.
