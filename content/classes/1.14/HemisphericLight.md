---
ID_PAGE: 24474
PG_TITLE: HemisphericLight
PG_VERSION: 1.14
---

Hemispheric light represents a simple and easy way to simulate realistic ambient light.

An hemispheric light is defined by a direction to the sky and by 3 colors: one for the diffuse (the sky color), one for the ground (the color when the pixel is not towards the sky) and one for the specular.

A tutorial about lights can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/06-Lights)
##new [HemisphericLight](/classes/HemisphericLight)(name, direction, scene)

Creates a new [HemisphericLight](/classes/HemisphericLight) object
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The namme of the light
 | direction | [Vector3](/classes/Vector3) | The direction of the light
 | scene | [Scene](/classes/Scene) | The scene to create the light into
---

##Extends [Light](/classes/Light)
##Members

###direction : [Vector3](/classes/Vector3)


The direction of the light

###groundColor : [Color3](/classes/Color3)


The ground color



##Methods

###setDirectionToTarget(target) &rarr; [Vector3](/classes/Vector3)
Sets the direction of the light using the given target

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/Vector3) | The given target to lighten
---

###getShadowGenerator() &rarr; [ShadowGenerator](/classes/ShadowGenerator)
Returns null


###transferToEffect(effect, directionUniformName, groundColorUniformName) &rarr; void
Gives the light to position with the given effect with given position name

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/Effect) | The given effect
 | directionUniformName | string | The direction uniform name
 | groundColorUniformName | string | The groundColor uniform name
---
