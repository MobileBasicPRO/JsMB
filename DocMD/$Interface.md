<a name="$Interface"></a>

## $Interface : <code>object</code>
Модуль для работы с интерфейсом
Поддерживает только JsMB-Interpreter и NW.JS

**Kind**: global namespace  
**Author**: PROPHESOR  

* [$Interface](#$Interface) : <code>object</code>
    * [.menuAdd(name, title, onClick, [type], [fortype])](#JsMB.menuAdd) ⇒ <code>this</code>
    * [.menuShow(name, x, y)](#JsMB.menuShow) ⇒ <code>this</code>
    * [.menuAddSeparator(name)](#JsMB.menuAddSeparator) ⇒ <code>this</code>
    * [.menuBarAdd(name, title, subMenu)](#JsMB.menuBarAdd) ⇒ <code>this</code>
    * [.menuBarShow(name)](#JsMB.menuBarShow) ⇒ <code>this</code>
    * [.getClipboard([type])](#JsMB.getClipboard) ⇒ <code>string</code>
    * [.setClipboard(value, [type])](#JsMB.setClipboard) ⇒ <code>this</code>
    * [.clearClipboard()](#JsMB.clearClipboard) ⇒ <code>this</code>
    * [.menuTrayAdd([name], title, icon, menu)](#JsMB.menuTrayAdd) ⇒ <code>this</code>
    * [.fullScreen(mode)](#JsMB.fullScreen) ⇒ <code>this</code>

<a name="JsMB.menuAdd"></a>

### JsMB.menuAdd(name, title, onClick, [type], [fortype]) ⇒ <code>this</code>
Добавить пункт в контекстное меню

**Kind**: static method of [<code>$Interface</code>](#$Interface)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | ID название меню |
| title | <code>string</code> | Текст пункта меню |
| onClick | <code>function</code> | Функция выполнится при нажатии на пункт меню |
| [type] | <code>string</code> | Тип меню (subMenu, checkbox, separator) |
| [fortype] | <code>string</code> | Родительское меню для subMenu |

<a name="JsMB.menuShow"></a>

### JsMB.menuShow(name, x, y) ⇒ <code>this</code>
Отобразить контекстное меню

**Kind**: static method of [<code>$Interface</code>](#$Interface)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | ID название меню |
| x | <code>number</code> | XY координата |
| y | <code>number</code> | XY координата |

<a name="JsMB.menuAddSeparator"></a>

### JsMB.menuAddSeparator(name) ⇒ <code>this</code>
Добавляет разделитель в меню

**Kind**: static method of [<code>$Interface</code>](#$Interface)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | ID название меню |

<a name="JsMB.menuBarAdd"></a>

### JsMB.menuBarAdd(name, title, subMenu) ⇒ <code>this</code>
Добавляет меню в меню-бар

**Kind**: static method of [<code>$Interface</code>](#$Interface)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | ID название меню-бара |
| title | <code>string</code> | Заголовок меню |
| subMenu | <code>string</code> | ID название меню |

<a name="JsMB.menuBarShow"></a>

### JsMB.menuBarShow(name) ⇒ <code>this</code>
Отобразить меню-бар на экране

**Kind**: static method of [<code>$Interface</code>](#$Interface)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | ID название меню-бара |

<a name="JsMB.getClipboard"></a>

### JsMB.getClipboard([type]) ⇒ <code>string</code>
Получить данные из буфера обмена

**Kind**: static method of [<code>$Interface</code>](#$Interface)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [type] | <code>string</code> | <code>&quot;&#x27;text&#x27;&quot;</code> | Тип получаемых данных |

<a name="JsMB.setClipboard"></a>

### JsMB.setClipboard(value, [type]) ⇒ <code>this</code>
Поместить данные в буфер обмена

**Kind**: static method of [<code>$Interface</code>](#$Interface)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> |  | Данные для помещения |
| [type] | <code>string</code> | <code>&quot;&#x27;text&#x27;&quot;</code> | Тип данных |

<a name="JsMB.clearClipboard"></a>

### JsMB.clearClipboard() ⇒ <code>this</code>
Очищает буфер обмена

**Kind**: static method of [<code>$Interface</code>](#$Interface)  
<a name="JsMB.menuTrayAdd"></a>

### JsMB.menuTrayAdd([name], title, icon, menu) ⇒ <code>this</code>
Добавить пункт в трэй

**Kind**: static method of [<code>$Interface</code>](#$Interface)  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | ID название трэя |
| title | <code>string</code> | Текст при удерживании мыши |
| icon | <code>string</code> | Иконка |
| menu | <code>string</code> | ID название открывающегося меню |

<a name="JsMB.fullScreen"></a>

### JsMB.fullScreen(mode) ⇒ <code>this</code>
Переключить полноэкранный режим

**Kind**: static method of [<code>$Interface</code>](#$Interface)  

| Param | Type | Description |
| --- | --- | --- |
| mode | <code>bool</code> | true - включить, false - отключить |

