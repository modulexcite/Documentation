---
ID_PAGE: 24895
PG_TITLE: Action
PG_VERSION: 2.0
---
##new [Action](/classes/Action)(triggerOptions, condition)



Actions are a simple way to add interactions in your scenes. An action is launched when its trigger is fired.
See more [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions)




####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | Options of the trigger
optional | condition | [Condition](/classes/Condition) | [Condition](/classes/Condition) to trigger the action
---

##Members

###triggerOptions : any




The trigger options



###trigger : number




Number of the trigger











##Methods

###getTriggerParameter() &rarr; any
Get the trigger parameter






###execute(evt) &rarr; void
Execute the trigger





####Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](/classes/ActionEvent) | An event to trigger
---

###then(action) &rarr; [Action](/classes/Action)

####Parameters
 | Name | Type | Description
---|---|---|---
 | action | [Action](/classes/Action) | The action to do
---
