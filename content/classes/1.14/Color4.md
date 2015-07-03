---
ID_PAGE: 3325
PG_TITLE: Color4
PG_VERSION: 1.14
---
##new [Color4](page.php?p=3325)(r, g, b, a)

Creates a new RGBA [Color4](page.php?p=3325)
####Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | The initial red value
 | g | number | The initial green value
 | b | number | The initial blue value
 | a | number | The initial alpha value
---

##Members

###r : number


The red value

###g : number


The green value

###b : number


The blue value

###a : number


The alpha value



##Methods

###addInPlace(right) &rarr; void
Adds another [Color4](page.php?p=3325)

####Parameters
 | Name | Type | Description
---|---|---|---
 | right | any | The color to add
---

###asArray() &rarr; number[]
Returns an array representation of the color


###toArray(array, index) &rarr; void
Fills an array from a given index with the color's values

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | The array to fill
optional | index | number | default : 0 The given index
---

###add(right) &rarr; [Color4](page.php?p=3325)
Adds another color and returns the result

####Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](page.php?p=3325) | 
---

###subtract(right) &rarr; [Color4](page.php?p=3325)
Substracts another color and returns the result

####Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](page.php?p=3325) | The color to substract
---

###subtractToRef(right, result) &rarr; void
Substracts another color into a third color

####Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](page.php?p=3325) | The color to substract
 | result | [Color4](page.php?p=3325) | The color to return
---

###scale(scale) &rarr; [Color4](page.php?p=3325)
Scales a [Color4](page.php?p=3325)

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | The scaling factor
---

###scaleToRef(scale, result) &rarr; void
Scales a [Color4](page.php?p=3325) into an existing [Color4](page.php?p=3325)

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | The scaling factor
 | result | [Color4](page.php?p=3325) | The color to return
---

###toString() &rarr; string
Returns a string representation of the color


###clone() &rarr; [Color4](page.php?p=3325)
Clones the color into a new [Color4](page.php?p=3325)


###static Lerp(left, right, amount) &rarr; [Color4](page.php?p=3325)
Linear interpolation of a color 4

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](page.php?p=3325) | first color
 | right | [Color4](page.php?p=3325) | second color
 | amount | number | Weighting factor.
---

###static LerpToRef(left, right, amount, result) &rarr; void
Linear interpolation of a color 4 into an existing [Color4](page.php?p=3325)

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](page.php?p=3325) | first color
 | right | [Color4](page.php?p=3325) | second color
 | amount | number | Weighting factor.
 | result | [Color4](page.php?p=3325) | The color which hold the result color
---

###static FromArray(array, offset) &rarr; [Color4](page.php?p=3325)
Creates new [Color4](page.php?p=3325) from the given array

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | The given array
optional | offset | number | The first index of the array to look at
---

###static FromInts(r, g, b, a) &rarr; [Color4](page.php?p=3325)
Creates a new [Color4](page.php?p=3325) from a set of integers. Values must be between 0 and 255

####Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | The red value (0&lt;r&lt;255)
 | g | number | The green value (0&lt;g&lt;255)
 | b | number | The blue value (0&lt;b&lt;255)
 | a | number | The alpha value (0&lt;b&lt;255)
---