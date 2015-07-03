---
ID_PAGE: 5841
PG_TITLE: PostProcess
PG_VERSION: 2.0
---

Postprocesses allow you to create 2D effects on top of your scene.

A postprocess is linked to a camera and can be part of a chain of postprocesss where each postprocess use the result of the previous one as input for its own processing.

A tutorial about post process can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-postprocesses)
##new [PostProcess](page.php?p=5841)(name, fragmentUrl, parameters, samplers, ratio, camera, samplingMode, engine, reusable, defines)


The Postprocess constructor


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The postprocess name
 | fragmentUrl | string | The URL of .fragment.fx file where you will code the GLSL shader used for every pixel of the screen
 | parameters | string[] | A list of your uniforms parameters
 | samplers | string[] | A list of additionnal samplers
 | ratio | number | The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](page.php?p=5702) | The scene camera linked to this post process
 | samplingMode | number | [Texture](page.php?p=5790).NEAREST_SAMPLINGMODE, [Texture](page.php?p=5790).BILINEAR_SAMPLINGMODE or [Texture](page.php?p=5790).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](page.php?p=5700) | The engine to attach the postprocess.
optional | reusable | boolean | Indicates if the postprocess can be reused multiple times on the same camera
optional | defines | string | 
---

##Members

###name : string




###onApply : (Effect) =&gt; void





###onBeforeRender : (Effect) =&gt; void





###onSizeChanged : () =&gt; void





###onActivate : (Camera) =&gt; void





###width : number



default : -1


###height : number



default : -1


###renderTargetSamplingMode : number



default : [Texture](page.php?p=5790).NEAREST_SAMPLINGMODE

Other possible values : [Texture](page.php?p=5790).BILINEAR_SAMPLINGMODE, [Texture](page.php?p=5790).TRILINEAR_SAMPLINGMODE







##Methods

###isReusable() &rarr; boolean
Tests if the Postprocess is set to reusable




###activate(camera, sourceTexture) &rarr; void
Activates this postprocess to the given camera



####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](page.php?p=5702) | default : this camera. The camera to apply the postprocess
optional | sourceTexture | WebGLTexture | Optional textures to add
---

###apply() &rarr; [Effect](page.php?p=5782)
Applies this postprocess




###dispose(camera) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](page.php?p=5702) | The given camera
---