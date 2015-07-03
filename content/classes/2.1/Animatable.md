---
ID_PAGE: 6683
PG_TITLE: Animatable
PG_VERSION: 2.1
---

Used to access to individual animations
##new [Animatable](page.php?p=6683)(scene, target, fromFrame, toFrame, loopAnimation, speedRatio, onAnimationEnd, animations)



Builds an [Animatable](page.php?p=6683) object




####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=6662) | The scene where takes place the animation
 | target | any | The target object
optional | fromFrame | number | default : 0
optional | toFrame | number | default : 100
optional | loopAnimation | boolean | default : false
optional | speedRatio | number | default : 1.0
optional | onAnimationEnd | any | Function triggered on the end of an animation
optional | animations | any | The array of animations to run
---

##Members

###target : any




The animated target



###fromFrame : number




The begining frame of the animation



###toFrame : number




The ending frame of the animation



###loopAnimation : boolean




default : false. Sets if the animation loops or not



###speedRatio : number




default : 1.0. The speed Ratio, lower gives a slower animation



###onAnimationEnd : any




Function to execute on animation end



###animationStarted : boolean




Tests if the animation is in started state











##Methods

###appendAnimations(target, animations) &rarr; void
Append a new animation





####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | The target which will be animated
 | animations | [Animation](page.php?p=6684)[] | The animation(s) to apply
---

###getAnimationByTargetProperty(property) &rarr; [Animation](page.php?p=6684)
Returns animations that have to given property





####Parameters
 | Name | Type | Description
---|---|---|---
 | property | string | The given property
---

###pause() &rarr; void
Pauses the animation






###restart() &rarr; void
Restarts the animation






###stop() &rarr; void
