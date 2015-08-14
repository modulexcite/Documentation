---
ID_PAGE: 25313
PG_TITLE: Database
PG_VERSION: 2.1
TAGS:
    - Database
---
##Description

class [Database](/classes/2.2-alpha/Database)



##Constructor

##new [Database](/classes/2.2-alpha/Database)(urlToScene, callbackManifestChecked)

Create a new [Database](/classes/2.2-alpha/Database)
An explanation about how BabylonJs index all its resources can be found here

####Parameters
 | Name | Type | Description
---|---|---|---
 | urlToScene | string | 
 | callbackManifestChecked | (checked: boolean) =&gt; any | 

##Members

###static IsUASupportingBlobStorage : boolean



###static IDBStorageEnabled : boolean



###static parseURL : (url: string) =&gt; string

Returns an absolute url using the given string

@param url The url to parse

###static ReturnFullUrlLocation : (url: string) =&gt; string

Returns the full location string

@param url The url location to complete

##Functions

###checkManifestFile() &rarr; void

Checks the manifest file
###openAsync(successCallback, errorCallback) &rarr; void

Tries to use the offline data if the manifest indicates so

####Parameters
 | Name | Type | Description
---|---|---|---
 | successCallback | any | 
 | errorCallback | any | 

###loadImageFromDB(url, image) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 
 | image | HTMLImageElement | 
