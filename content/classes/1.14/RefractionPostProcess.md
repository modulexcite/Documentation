---
ID_PAGE: 24564
PG_TITLE: RefractionPostProcess
PG_VERSION: 1.14
---

Builtin postprocess applying e refraction texture as a postprocess

A tutorial about post process can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-postprocesses)
##new [RefractionPostProcess](/classes/RefractionPostProcess)(name, refractionTextureUrl, color, depth, colorLevel, ratio, camera, samplingMode, engine, reusable)

The Postprocess constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The postprocess name
 | refractionTextureUrl | string | The URL of the refraction texture
 | color | [Color3](/classes/Color3) | The base color of the refraction (used to taint the rendering)
 | depth | number | The simulated refraction
 | colorLevel | number | The coefficient of the base color (0 to remove base color tainting)
 | ratio | number | The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](/classes/Camera) | The scene camera linked to this post process
optional | samplingMode | number | [Texture](/classes/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/Engine) | The engine to attach the postprocess.
optional | reusable | boolean | Indicates if the postprocess can be reused multiple times on the same camera
---

##Extends [PostProcess](/classes/PostProcess)
##Members

###color : [Color3](/classes/Color3)


The base color of the refraction (used to taint the rendering)

###depth : number


The simulated refraction

###colorLevel : number


The coefficient of the base color (0 to remove base color tainting)



##Methods

###dispose(camera) &rarr; void
Removes the postprocess from the given camera

####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/Camera) | The given camera
---
