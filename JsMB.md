<a name="JsMB"></a>

## JsMB : <code>object</code>
**Kind**: global namespace  

* [JsMB](#JsMB) : <code>object</code>
    * [.PI](#JsMB.PI)
    * [.G](#JsMB.G)
    * [.RAD2DEG](#JsMB.RAD2DEG)
    * [.DEG2RAD](#JsMB.DEG2RAD)
    * [.setColor(color)](#JsMB.setColor) ⇒ <code>this</code>
    * [.setLineWidth(width)](#JsMB.setLineWidth) ⇒ <code>this</code>
    * [.fillRect(x, y, w, h)](#JsMB.fillRect) ⇒ <code>this</code>
    * [.fullScreen(mode)](#JsMB.fullScreen) ⇒ <code>this</code>
    * [.cls()](#JsMB.cls) ⇒ <code>this</code>
    * [.fillScreen(color)](#JsMB.fillScreen) ⇒ <code>this</code>
    * [.drawRect(x, y, w, h)](#JsMB.drawRect) ⇒ <code>this</code>
    * [.drawPlot(x, y)](#JsMB.drawPlot) ⇒ <code>this</code>
    * [.clearRect(x, y, w, h)](#JsMB.clearRect) ⇒ <code>this</code>
    * [.drawLine(x1, y1, x2, y2)](#JsMB.drawLine) ⇒ <code>this</code>
    * [.drawCube(x, y, w, h, q)](#JsMB.drawCube) ⇒ <code>this</code>
    * [.drawArc(x, y, radius, startAngle, endAngle, counterClockwise)](#JsMB.drawArc) ⇒ <code>this</code>
    * [.fillArc(x, y, radius, startAngle, endAngle, counterClockwise)](#JsMB.fillArc) ⇒ <code>this</code>
    * [.fillRect4(x1, y1, x2, y2, x3, y3, x4, y4)](#JsMB.fillRect4) ⇒ <code>this</code>
    * [.drawRect4(x1, y1, x2, y2, x3, y3, x4, y4)](#JsMB.drawRect4) ⇒ <code>this</code>
    * [.fillTriangle(x1, y1, x2, y2, x3, y3)](#JsMB.fillTriangle) ⇒ <code>this</code>
    * [.drawNangle(array)](#JsMB.drawNangle) ⇒ <code>this</code>
    * [.fillNangle(array)](#JsMB.fillNangle) ⇒ <code>this</code>
    * [.drawTriangle(x1, y1, x2, y2, x3, y3)](#JsMB.drawTriangle) ⇒ <code>this</code>
    * [.drawString(text, x, y)](#JsMB.drawString) ⇒ <code>this</code>
    * [.repaint()](#JsMB.repaint) ⇒ <code>this</code>
    * [.setFontSize(size)](#JsMB.setFontSize) ⇒ <code>this</code>
    * [.setFont(family)](#JsMB.setFont) ⇒ <code>this</code>
    * [.makeLinearGradient(x, y, x1, y1)](#JsMB.makeLinearGradient) ⇒ <code>this</code>
    * [.makeRadialGradient(x, y, r, x1, y1, r1)](#JsMB.makeRadialGradient) ⇒ <code>this</code>
    * [.setGradientColor(g, pos, color)](#JsMB.setGradientColor) ⇒ <code>this</code>
    * [.rgb(red, green, blue)](#JsMB.rgb) ⇒ <code>string</code>
    * [.rgba(red, green, blue, alpha)](#JsMB.rgba) ⇒ <code>string</code>
    * [.gelLoad(file, name)](#JsMB.gelLoad) ⇒ <code>this</code>
    * [.spriteGel(sprite, gel)](#JsMB.spriteGel) ⇒ <code>this</code>
    * [.drawGel(name, x, y)](#JsMB.drawGel) ⇒ <code>this</code>
    * [.drawSprite(name, x, y)](#JsMB.drawSprite) ⇒ <code>this</code>
    * [.gelSize(name, w, h)](#JsMB.gelSize) ⇒ <code>this</code>
    * [.drawGelFragment(name, fx, fy, fw, fh, x, y, w, h)](#JsMB.drawGelFragment) ⇒ <code>this</code>
    * [.makeTexture(gelname, repeat)](#JsMB.makeTexture) ⇒ <code>this</code>
    * [.input(text, [def])](#JsMB.input) ⇒ <code>this</code>
    * [.println()](#JsMB.println) ⇒ <code>this</code>
    * [.playSound(file, loop, channel)](#JsMB.playSound) ⇒ <code>this</code>
    * [.pauseSound(channel)](#JsMB.pauseSound) ⇒ <code>this</code>
    * [.sqrt(number)](#JsMB.sqrt) ⇒ <code>number</code>
    * [.random(min, max)](#JsMB.random) ⇒ <code>number</code>
    * [.sin(angle)](#JsMB.sin) ⇒ <code>number</code>
    * [.cos(angle)](#JsMB.cos) ⇒ <code>number</code>
    * [.tan(angle)](#JsMB.tan) ⇒ <code>number</code>
    * [.ctg(angle)](#JsMB.ctg) ⇒ <code>number</code>
    * [.asin(number)](#JsMB.asin) ⇒ <code>number</code>
    * [.acos(number)](#JsMB.acos) ⇒ <code>number</code>
    * [.atan(number)](#JsMB.atan) ⇒ <code>number</code>
    * [.mod(x, y)](#JsMB.mod) ⇒ <code>number</code>
    * [.abs(number)](#JsMB.abs) ⇒ <code>number</code>
    * [.pow(number, power)](#JsMB.pow) ⇒ <code>number</code>
    * [.ln(number)](#JsMB.ln) ⇒ <code>number</code>
    * [.exp(power)](#JsMB.exp) ⇒ <code>number</code>
    * [.limit(variable, min, max)](#JsMB.limit) ⇒ <code>number</code>
    * [.min()](#JsMB.min) ⇒ <code>number</code>
    * [.max()](#JsMB.max) ⇒ <code>number</code>
    * [.rad(deg)](#JsMB.rad) ⇒ <code>number</code>
    * [.deg(rad)](#JsMB.deg) ⇒ <code>number</code>
    * [.len(str)](#JsMB.len) ⇒ <code>number</code>
    * [.str(num)](#JsMB.str) ⇒ <code>string</code>
    * [.val(str)](#JsMB.val) ⇒ <code>number</code>
    * [.int(str, [system])](#JsMB.int) ⇒ <code>number</code>
    * [.float(str)](#JsMB.float) ⇒ <code>number</code>
    * [.upper(str)](#JsMB.upper) ⇒ <code>string</code>
    * [.lower(str)](#JsMB.lower) ⇒ <code>string</code>
    * [.mid(str, pos, len)](#JsMB.mid) ⇒ <code>string</code>
    * [.chr(code)](#JsMB.chr) ⇒ <code>string</code>
    * [.asc(str, [pos])](#JsMB.asc) ⇒ <code>number</code>
    * [.split(str, char)](#JsMB.split) ⇒ <code>array</code>
    * [.replace(str, reg, to, [all])](#JsMB.replace) ⇒ <code>string</code>
    * [.localSaveData(name, _data)](#JsMB.localSaveData) ⇒ <code>this</code>
    * [.localReadData(name)](#JsMB.localReadData) ⇒ <code>this</code>
    * [.parseJSON(json)](#JsMB.parseJSON) ⇒ <code>object</code>
    * [.toJSON(object, [f], [s])](#JsMB.toJSON) ⇒ <code>string</code>
    * [.toPSON(object, [s])](#JsMB.toPSON) ⇒ <code>string</code>
    * [.include(file)](#JsMB.include) ⇒ <code>this</code>
    * [.screenWidth()](#JsMB.screenWidth) ⇒ <code>number</code>
    * [.screenHeight()](#JsMB.screenHeight) ⇒ <code>number</code>
    * [.getMouseX()](#JsMB.getMouseX) ⇒ <code>number</code>
    * [.getMouseY()](#JsMB.getMouseY) ⇒ <code>number</code>
    * [.getLeftClicksCount()](#JsMB.getLeftClicksCount) ⇒ <code>number</code>
    * [.getRightClicksCount()](#JsMB.getRightClicksCount) ⇒ <code>number</code>
    * [.log()](#JsMB.log) ⇒ <code>this</code>
    * [.debug(text, [style])](#JsMB.debug) ⇒ <code>this</code>
    * [.exit()](#JsMB.exit) ⇒ <code>this</code>

<a name="JsMB.PI"></a>

### JsMB.PI
Число PI до 15 знака (3.1415....)

**Kind**: static property of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.G"></a>

### JsMB.G
Число G (9.8)

**Kind**: static property of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.RAD2DEG"></a>

### JsMB.RAD2DEG
Преобразование радиан в градусы (180 / PI)

**Kind**: static property of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.DEG2RAD"></a>

### JsMB.DEG2RAD
Преобразование градусов в радиан (PI / 180)

**Kind**: static property of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.setColor"></a>

### JsMB.setColor(color) ⇒ <code>this</code>
Задать текущий цвет

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Свет в CSS формате |

<a name="JsMB.setLineWidth"></a>

### JsMB.setLineWidth(width) ⇒ <code>this</code>
Задать толщину линий

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | Толщина |

<a name="JsMB.fillRect"></a>

### JsMB.fillRect(x, y, w, h) ⇒ <code>this</code>
Рисует залитый прямоугольник

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Координата X левого верхнего угла |
| y | <code>number</code> | Координата Y левого верхнего угла |
| w | <code>number</code> | Ширина |
| h | <code>number</code> | Высота |

<a name="JsMB.fullScreen"></a>

### JsMB.fullScreen(mode) ⇒ <code>this</code>
Переключить полноэкранный режим

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| mode | <code>bool</code> | true - включить, false - отключить |

<a name="JsMB.cls"></a>

### JsMB.cls() ⇒ <code>this</code>
Очищает экран

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.fillScreen"></a>

### JsMB.fillScreen(color) ⇒ <code>this</code>
Заливает экран выбранным цветом

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Цвет в CSS формате |

<a name="JsMB.drawRect"></a>

### JsMB.drawRect(x, y, w, h) ⇒ <code>this</code>
Рисует прямоугольник

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Координата X левого верхнего угла |
| y | <code>number</code> | Координата Y левого верхнего угла |
| w | <code>number</code> | Ширина |
| h | <code>number</code> | Высота |

<a name="JsMB.drawPlot"></a>

### JsMB.drawPlot(x, y) ⇒ <code>this</code>
Рисует точку по координатам (заливает пиксель)

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X координата точки |
| y | <code>number</code> | Y координата точки |

<a name="JsMB.clearRect"></a>

### JsMB.clearRect(x, y, w, h) ⇒ <code>this</code>
Очищяет прямоугольную область

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Координата X левого верхнего угла |
| y | <code>number</code> | Координата Y левого верхнего угла |
| w | <code>number</code> | Ширина |
| h | <code>number</code> | Высота |

<a name="JsMB.drawLine"></a>

### JsMB.drawLine(x1, y1, x2, y2) ⇒ <code>this</code>
Рисует линию по 2 точкам

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | X 1 точки |
| y1 | <code>number</code> | Y 1 точки |
| x2 | <code>number</code> | X 2 точки |
| y2 | <code>number</code> | Y 2 точки |

<a name="JsMB.drawCube"></a>

### JsMB.drawCube(x, y, w, h, q) ⇒ <code>this</code>
Рисует проекцию паралелепипеда (через 2 соединенных прямоугольника)

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X левого верхнего угла |
| y | <code>number</code> | Y левого верхнего угла |
| w | <code>number</code> | ширина |
| h | <code>number</code> | высота |
| q | <code>number</code> | глубина |

<a name="JsMB.drawArc"></a>

### JsMB.drawArc(x, y, radius, startAngle, endAngle, counterClockwise) ⇒ <code>this</code>
Рисует залитую окружность

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | X центра |
| y | <code>number</code> |  | Y центра |
| radius | <code>number</code> |  | радиус |
| startAngle | <code>number</code> | <code>(15*PI/7)</code> | Угол начала |
| endAngle | <code>number</code> | <code>(13*PI/2)</code> | Угол конца |
| counterClockwise | <code>bool</code> | <code>false</code> | По часовой стрелке? |

<a name="JsMB.fillArc"></a>

### JsMB.fillArc(x, y, radius, startAngle, endAngle, counterClockwise) ⇒ <code>this</code>
Рисует залитую окружность

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | X центра |
| y | <code>number</code> |  | Y центра |
| radius | <code>number</code> |  | радиус |
| startAngle | <code>number</code> | <code>(15*PI/7)</code> | Угол начала |
| endAngle | <code>number</code> | <code>(13*PI/2)</code> | Угол конца |
| counterClockwise | <code>bool</code> | <code>false</code> | По часовой стрелке? |

<a name="JsMB.fillRect4"></a>

### JsMB.fillRect4(x1, y1, x2, y2, x3, y3, x4, y4) ⇒ <code>this</code>
Рисует залитый четырехугольник по четырем точкам

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | X 1 точки |
| y1 | <code>number</code> | Y 1 точки |
| x2 | <code>number</code> | X 2 точки |
| y2 | <code>number</code> | Y 2 точки |
| x3 | <code>number</code> | X 3 точки |
| y3 | <code>number</code> | Y 3 точки |
| x4 | <code>number</code> | X 4 точки |
| y4 | <code>number</code> | Y 4 точки |

<a name="JsMB.drawRect4"></a>

### JsMB.drawRect4(x1, y1, x2, y2, x3, y3, x4, y4) ⇒ <code>this</code>
Рисует четырехугольник по четырем точкам

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | X 1 точки |
| y1 | <code>number</code> | Y 1 точки |
| x2 | <code>number</code> | X 2 точки |
| y2 | <code>number</code> | Y 2 точки |
| x3 | <code>number</code> | X 3 точки |
| y3 | <code>number</code> | Y 3 точки |
| x4 | <code>number</code> | X 4 точки |
| y4 | <code>number</code> | Y 4 точки |

<a name="JsMB.fillTriangle"></a>

### JsMB.fillTriangle(x1, y1, x2, y2, x3, y3) ⇒ <code>this</code>
Рисует залитый триугольник по трем точкам

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | X 1 точки |
| y1 | <code>number</code> | Y 1 точки |
| x2 | <code>number</code> | X 2 точки |
| y2 | <code>number</code> | Y 2 точки |
| x3 | <code>number</code> | X 3 точки |
| y3 | <code>number</code> | Y 3 точки |

<a name="JsMB.drawNangle"></a>

### JsMB.drawNangle(array) ⇒ <code>this</code>
Рисует n-угольник по точкам

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | Двумерный массив точек ([[x,y],[x1,y1],...]) |

<a name="JsMB.fillNangle"></a>

### JsMB.fillNangle(array) ⇒ <code>this</code>
Рисует залитый n-угольник по точкам

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | Двумерный массив точек ([[x,y],[x1,y1],...]) |

<a name="JsMB.drawTriangle"></a>

### JsMB.drawTriangle(x1, y1, x2, y2, x3, y3) ⇒ <code>this</code>
Рисует триугольник по трем точкам

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | X 1 точки |
| y1 | <code>number</code> | Y 1 точки |
| x2 | <code>number</code> | X 2 точки |
| y2 | <code>number</code> | Y 2 точки |
| x3 | <code>number</code> | X 3 точки |
| y3 | <code>number</code> | Y 3 точки |

<a name="JsMB.drawString"></a>

### JsMB.drawString(text, x, y) ⇒ <code>this</code>
**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Текст для отображения |
| x | <code>number</code> | X |
| y | <code>number</code> | Y |

<a name="JsMB.repaint"></a>

### JsMB.repaint() ⇒ <code>this</code>
В некоторых реализациях JsMB используется двойная буфферизация
repaint производит отрисовку на экран ранее произведенных действий
В стандартной реализации ничего не делает

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.setFontSize"></a>

### JsMB.setFontSize(size) ⇒ <code>this</code>
Задать размер шрифта

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | Размер |

<a name="JsMB.setFont"></a>

### JsMB.setFont(family) ⇒ <code>this</code>
Задать шрифт

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| family | <code>string</code> | Шрифт |

<a name="JsMB.makeLinearGradient"></a>

### JsMB.makeLinearGradient(x, y, x1, y1) ⇒ <code>this</code>
Создает линейный градиент

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X координата левого верхнего угла |
| y | <code>number</code> | Y координата левого верхнего угла |
| x1 | <code>number</code> | X координата правого нижнего угла |
| y1 | <code>number</code> | Y координата правого нижнего угла |

<a name="JsMB.makeRadialGradient"></a>

### JsMB.makeRadialGradient(x, y, r, x1, y1, r1) ⇒ <code>this</code>
Создает радиальный (круговой) градиент

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X координата левого верхнего угла |
| y | <code>number</code> | Y координата левого верхнего угла |
| r | <code>number</code> | Радиус внутреннего круга |
| x1 | <code>number</code> | X координата правого нижнего угла |
| y1 | <code>number</code> | Y координата правого нижнего угла |
| r1 | <code>number</code> | Радиус внешнего круга |

<a name="JsMB.setGradientColor"></a>

### JsMB.setGradientColor(g, pos, color) ⇒ <code>this</code>
Задать цвет градиенту

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| g | <code>gradient</code> | Градиент |
| pos | <code>number</code> | Позиция (0 - 1) |
| color | <code>string</code> | Цвет в CSS формате |

<a name="JsMB.rgb"></a>

### JsMB.rgb(red, green, blue) ⇒ <code>string</code>
Цвет в rgb

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
**Returns**: <code>string</code> - "rgb(red, green, blue)"  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| red | <code>number</code> | <code>0</code> | Значение красного цвета (0 - 255) |
| green | <code>number</code> | <code>0</code> | Значение зеленого цвета (0 - 255) |
| blue | <code>number</code> | <code>0</code> | Значение синего цвета (0 - 255) |

<a name="JsMB.rgba"></a>

### JsMB.rgba(red, green, blue, alpha) ⇒ <code>string</code>
Цвет в rgb

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
**Returns**: <code>string</code> - "rgba(red, green, blue, alpha)"  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| red | <code>number</code> | <code>0</code> | Значение красного цвета (0 - 255) |
| green | <code>number</code> | <code>0</code> | Значение зеленого цвета (0 - 255) |
| blue | <code>number</code> | <code>0</code> | Значение синего цвета (0 - 255) |
| alpha | <code>number</code> | <code>0</code> | Прозрачность (0 - 1) |

<a name="JsMB.gelLoad"></a>

### JsMB.gelLoad(file, name) ⇒ <code>this</code>
Загрузить гель в память

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Файл (./,http,...) |
| name | <code>string</code> | Имя геля |

<a name="JsMB.spriteGel"></a>

### JsMB.spriteGel(sprite, gel) ⇒ <code>this</code>
[НЕ РЕАЛИЗОВАНО]
Переводит гель в спрайт

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| sprite | <code>string</code> | Имя спрайта |
| gel | <code>string</code> | Имя геля |

<a name="JsMB.drawGel"></a>

### JsMB.drawGel(name, x, y) ⇒ <code>this</code>
Рисует гель по указанным координатам

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Имя геля |
| x | <code>number</code> | X координата левого верхнего угла |
| y | <code>number</code> | Y координата левого верхнего угла |

<a name="JsMB.drawSprite"></a>

### JsMB.drawSprite(name, x, y) ⇒ <code>this</code>
[НЕ РЕАЛИЗОВАНО]
Рисует спрайт по указанным координатам

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Имя спрайта |
| x | <code>number</code> | X координата левого верхнего угла |
| y | <code>number</code> | Y координата левого верхнего угла |

<a name="JsMB.gelSize"></a>

### JsMB.gelSize(name, w, h) ⇒ <code>this</code>
Задать размеры гелю (деформация)

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Название геля |
| w | <code>number</code> | Ширина |
| h | <code>number</code> | Высота |

<a name="JsMB.drawGelFragment"></a>

### JsMB.drawGelFragment(name, fx, fy, fw, fh, x, y, w, h) ⇒ <code>this</code>
Рисует фрагмент геля

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | Имя геля |
| fx | <code>number</code> |  | Координаты левого верхнего угла области |
| fy | <code>number</code> |  | Координаты левого верхнего угла области |
| fw | <code>number</code> |  | Ширина области |
| fh | <code>number</code> |  | Высота области |
| x | <code>number</code> |  | Координаты левого верхнего угла для рисования |
| y | <code>number</code> |  | Координаты левого верхнего угла для рисования |
| w | <code>number</code> | <code>fw</code> | ширина для рисования |
| h | <code>number</code> | <code>fh</code> | высота для рисования |

<a name="JsMB.makeTexture"></a>

### JsMB.makeTexture(gelname, repeat) ⇒ <code>this</code>
Создает текстуру из геля

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| gelname | <code>string</code> |  | Имя геля |
| repeat | <code>string</code> | <code>&quot;&#x27;repeat&#x27;&quot;</code> | Повторение (repeat/no-repeat) |

<a name="JsMB.input"></a>

### JsMB.input(text, [def]) ⇒ <code>this</code>
Окно ввода данных

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Текст заголовка окна |
| [def] | <code>string</code> | Текст по умолчанию |

<a name="JsMB.println"></a>

### JsMB.println() ⇒ <code>this</code>
Вывести текст на экран

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.playSound"></a>

### JsMB.playSound(file, loop, channel) ⇒ <code>this</code>
Играть звук

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| file | <code>string</code> |  | Файл звука |
| loop | <code>bool</code> |  | Зациклить? |
| channel | <code>string</code> | <code>0</code> | Канал |

<a name="JsMB.pauseSound"></a>

### JsMB.pauseSound(channel) ⇒ <code>this</code>
Приостановить воспроизведение звука на канале

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| channel | <code>number</code> | <code>-1</code> | Канал (-1 для остановки на всех каналах) |

<a name="JsMB.sqrt"></a>

### JsMB.sqrt(number) ⇒ <code>number</code>
Возвращает квадратный корень из числа

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | Число |

<a name="JsMB.random"></a>

### JsMB.random(min, max) ⇒ <code>number</code>
Возвращает случайное число

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | От |
| max | <code>number</code> | До |

<a name="JsMB.sin"></a>

### JsMB.sin(angle) ⇒ <code>number</code>
Возвращает синус угла

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | Угол в радианах |

<a name="JsMB.cos"></a>

### JsMB.cos(angle) ⇒ <code>number</code>
Возвращает косинус угла

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | Угол в радианах |

<a name="JsMB.tan"></a>

### JsMB.tan(angle) ⇒ <code>number</code>
Возвращает тангенс угла

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | Угол в радианах |

<a name="JsMB.ctg"></a>

### JsMB.ctg(angle) ⇒ <code>number</code>
Возвращает котангенс угла

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | Угол в радианах |

<a name="JsMB.asin"></a>

### JsMB.asin(number) ⇒ <code>number</code>
Возвращает арксинус угла (в радианах)

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | Угол в радианах |

<a name="JsMB.acos"></a>

### JsMB.acos(number) ⇒ <code>number</code>
Возвращает арккосинус угла (в радианах)

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | Угол в радианах |

<a name="JsMB.atan"></a>

### JsMB.atan(number) ⇒ <code>number</code>
Возвращает арктангенс угла (в радианах)

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | Угол в радианах |

<a name="JsMB.mod"></a>

### JsMB.mod(x, y) ⇒ <code>number</code>
Возвращает остаток от деления 2-х чисел

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Делимое |
| y | <code>number</code> | Делитель |

<a name="JsMB.abs"></a>

### JsMB.abs(number) ⇒ <code>number</code>
Возвращает модуль числа

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | Число |

<a name="JsMB.pow"></a>

### JsMB.pow(number, power) ⇒ <code>number</code>
Возводит число в степень

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | Число |
| power | <code>number</code> | Степень |

<a name="JsMB.ln"></a>

### JsMB.ln(number) ⇒ <code>number</code>
Возвращает натуральный логарифм от числа

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | Число |

<a name="JsMB.exp"></a>

### JsMB.exp(power) ⇒ <code>number</code>
Возвращает число e в степени

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| power | <code>number</code> | Степень |

<a name="JsMB.limit"></a>

### JsMB.limit(variable, min, max) ⇒ <code>number</code>
Возвращает ограниченное значение переменной

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| variable | <code>number</code> | Начальное значение |
| min | <code>number</code> | Минимум (нижняя граница) |
| max | <code>number</code> | Максимум (верхняя граница) |

<a name="JsMB.min"></a>

### JsMB.min() ⇒ <code>number</code>
Возвращает минимальное значение из аргументов

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.max"></a>

### JsMB.max() ⇒ <code>number</code>
Возвращает максимальное значение из аргументов

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.rad"></a>

### JsMB.rad(deg) ⇒ <code>number</code>
Переводит градусы в радианы

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
**Returns**: <code>number</code> - Радианы  

| Param | Type | Description |
| --- | --- | --- |
| deg | <code>number</code> | Значение в градусах |

<a name="JsMB.deg"></a>

### JsMB.deg(rad) ⇒ <code>number</code>
Переводит радианы в градусы

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
**Returns**: <code>number</code> - Градусы  

| Param | Type | Description |
| --- | --- | --- |
| rad | <code>number</code> | Значение в радианах |

<a name="JsMB.len"></a>

### JsMB.len(str) ⇒ <code>number</code>
Возвращает длину строки/массива

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | Строка/массив |

<a name="JsMB.str"></a>

### JsMB.str(num) ⇒ <code>string</code>
Переводит число/значение в строку

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>\*</code> | Число или другое значение |

<a name="JsMB.val"></a>

### JsMB.val(str) ⇒ <code>number</code>
Переводит строку в число (или возвращает NaN, если это невозможно)

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | Строка с числом |

<a name="JsMB.int"></a>

### JsMB.int(str, [system]) ⇒ <code>number</code>
Переводит строку в число (или возвращает NaN, если это невозможно)
Лучше использовать val

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
**Returns**: <code>number</code> - Int  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | Строка с числом |
| [system] | <code>number</code> | <code>10</code> | Система исчисления |

<a name="JsMB.float"></a>

### JsMB.float(str) ⇒ <code>number</code>
Переводит строку в число с плавающей точкой (или возвращает NaN, если это невозможно)

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
**Returns**: <code>number</code> - Float  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | Строка с числом |

<a name="JsMB.upper"></a>

### JsMB.upper(str) ⇒ <code>string</code>
Приводит все символы строки в ВЕРХНИЙ РЕГИСТР

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | Строка |

<a name="JsMB.lower"></a>

### JsMB.lower(str) ⇒ <code>string</code>
Приводит все символы строки в нижний регистр

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | Строка |

<a name="JsMB.mid"></a>

### JsMB.mid(str, pos, len) ⇒ <code>string</code>
Возвращает часть строки

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | Строка |
| pos | <code>number</code> | Начало выделения |
| len | <code>number</code> | Длина выделения |

<a name="JsMB.chr"></a>

### JsMB.chr(code) ⇒ <code>string</code>
Возвращает символ по его коду. Можно передать несколько кодов

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>number</code> | Код(ы) символа |

<a name="JsMB.asc"></a>

### JsMB.asc(str, [pos]) ⇒ <code>number</code>
Возвращает код символа

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | Строка |
| [pos] | <code>number</code> | <code>0</code> | Позиция символа в строке |

<a name="JsMB.split"></a>

### JsMB.split(str, char) ⇒ <code>array</code>
Разбивает строку и возвращает массив частей

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | Строка |
| char | <code>string</code> | Символ/регулярное выражение, по которому разбивать |

<a name="JsMB.replace"></a>

### JsMB.replace(str, reg, to, [all]) ⇒ <code>string</code>
Возвращает строку с замененной частью

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | Строка |
| reg | <code>string</code> |  | Строка/регулярное выражение для замены |
| to | <code>string</code> |  | На что менять |
| [all] | <code>bool</code> | <code>false</code> | Заменять все включения |

<a name="JsMB.localSaveData"></a>

### JsMB.localSaveData(name, _data) ⇒ <code>this</code>
Сохранить данные в хранилище

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Название ячейки |
| _data | <code>\*</code> | Данные |

<a name="JsMB.localReadData"></a>

### JsMB.localReadData(name) ⇒ <code>this</code>
Получить данные из хранилища

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Название ячейки |

<a name="JsMB.parseJSON"></a>

### JsMB.parseJSON(json) ⇒ <code>object</code>
Возвращает объект из JSON строки

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>string</code> | JSON строка |

<a name="JsMB.toJSON"></a>

### JsMB.toJSON(object, [f], [s]) ⇒ <code>string</code>
Возвращает JSON строку из объекта

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>object</code> |  | Объект |
| [f] | <code>function</code> | <code></code> | Дополнительный обработчик |
| [s] | <code>number</code> | <code>4</code> | Отступ |

<a name="JsMB.toPSON"></a>

### JsMB.toPSON(object, [s]) ⇒ <code>string</code>
Возвращает PSON строку из объекта (с функциями)

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>object</code> |  | Объект |
| [s] | <code>number</code> | <code>4</code> | Отступ |

<a name="JsMB.include"></a>

### JsMB.include(file) ⇒ <code>this</code>
Подключает модуль/файл

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Имя/адрес файла |

<a name="JsMB.screenWidth"></a>

### JsMB.screenWidth() ⇒ <code>number</code>
Возвращает ширину экрана

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.screenHeight"></a>

### JsMB.screenHeight() ⇒ <code>number</code>
Возвращает высоту экрана

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.getMouseX"></a>

### JsMB.getMouseX() ⇒ <code>number</code>
Возвращает X координату мыши в данный момент

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.getMouseY"></a>

### JsMB.getMouseY() ⇒ <code>number</code>
Возвращает Y координату мыши в данный момент

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.getLeftClicksCount"></a>

### JsMB.getLeftClicksCount() ⇒ <code>number</code>
Возвращает количество кликов с момента запуска программы

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.getRightClicksCount"></a>

### JsMB.getRightClicksCount() ⇒ <code>number</code>
Возвращает количество правых кликов с момента запуска программы

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
<a name="JsMB.log"></a>

### JsMB.log() ⇒ <code>this</code>
Логирование

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Type | Description |
| --- | --- |
| <code>\*</code> | Данные |

<a name="JsMB.debug"></a>

### JsMB.debug(text, [style]) ⇒ <code>this</code>
Вывести сообщение для отладки

**Kind**: static method of [<code>JsMB</code>](#JsMB)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Сообщение |
| [style] | <code>string</code> | Оформление сообщения (CSS) |

<a name="JsMB.exit"></a>

### JsMB.exit() ⇒ <code>this</code>
Закрыть программу

**Kind**: static method of [<code>JsMB</code>](#JsMB)  
