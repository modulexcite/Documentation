---
ID_PAGE: 24525
PG_TITLE: BaseTexture
PG_VERSION: 1.14
---
##new [BaseTexture](/classes/BaseTexture)(scene)

Create a new [BaseTexture](/classes/BaseTexture);
A tutorial about materials and textures can be found here : https://github.com/BabylonJS/Babylon.js/wiki/04-Materials
####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/Scene) | The scene which will contains the new base texture
---

##Members

###name : string


Name of the base texture.

###delayLoadState : number


Delay to load

By default : no delay

###hasAlpha : boolean


True if the base texture has alpha ; False otherwise

By default : false

###getAlphaFromRGB : boolean


True if RGBA ; False otherwise

By default : false

###level : number


The render level

By default : 1

###isCube : boolean


True if the basetexture is a cube ; False otherwise

By default : false

###isRenderTarget : boolean


True if this is a render target ; False otherwise

By default : false

###animations : [Animation](/classes/Animation)[]


The animations of the base texture

###onDispose : () =&gt; void


Function to call on dispose

###coordinatesIndex : number


The coordinates index

By default : 0

###coordinatesMode : number


The coordinates mode

By default : Explicit_Mode

###wrapU : number


The texture repetition in U axis

###wrapV : number


The texture repetition in V axis

###anisotropicFilteringLevel : number


The level of the anisotropic filtering level

By default : 4



##Methods

###getScene() &rarr; [Scene](/classes/Scene)
Get the scene which contains the base texture
@return The scene


###getTextureMatrix() &rarr; [Matrix](/classes/Matrix)
Get the texture matrix - return null
@return null


###getReflectionTextureMatrix() &rarr; [Matrix](/classes/Matrix)
Get the reflection texture matrix - return null
@return null


###getInternalTexture() &rarr; WebGLTexture
Get the internal texture
@return The internal texture


###isReady() &rarr; boolean
True if the base texture is ready ; False otherwise


###getSize() &rarr; ISize
Get the size of the base texture
@return ISize


###getBaseSize() &rarr; ISize
Get the base size of the base texture
@return ISize


###delayLoad() &rarr; void
Do the load delay


###releaseInternalTexture() &rarr; void
Release the internal texture


###clone() &rarr; [BaseTexture](/classes/BaseTexture)
Clone the base texture


###dispose() &rarr; void
Destroy the base texture object

