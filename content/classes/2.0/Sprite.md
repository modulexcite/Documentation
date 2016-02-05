---
ID_PAGE: 25033
PG_TITLE: Sprite
PG_VERSION: 2.0
---
##new [Sprite](/classes/Sprite)(name, manager)



Create a new [Sprite](/classes/Sprite).
A tutorial about sprites can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/08-Sprites)




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the sprite
 | manager | [SpriteManager](/classes/SpriteManager) | The sprite manager
---

##Members

###name : string




The sprite name



###position : [Vector3](/classes/Vector3)




The sprite position



###color : [Color4](/classes/Color4)




The sprite color



###size : number




The sprite size



###angle : number




The sprite angle



###cellIndex : number




The index of the cell



###invertU : number




True if invert in U axis ; False otherwise



###invertV : number




True if invert in V axis ; False otherwise



###disposeWhenFinishedAnimating : boolean




True if dispose when finished animating ; False otherwise



###animations : [Animation](/classes/Animation)[]




Animations array











##Methods

###playAnimation(from, to, loop, delay) &rarr; void
Function to play the sprite animation





####Parameters
 | Name | Type | Description
---|---|---|---
 | from | number | Number of the first frame
 | to | number | Number of the last frame
 | loop | boolean | True : loop ; False : don't loop
 | delay | number | Delay between each frame
---

###stopAnimation() &rarr; void
Function to stop the sprite animation






###dispose() &rarr; void

