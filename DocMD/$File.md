<a name="$File"></a>

## $File : <code>object</code>
Модуль для работы с файлами
Поддерживает:
 JsMB-Interpreter
 NW.JS
 Node.JS
 JsOS

**Kind**: global namespace  
**Author**: PROPHESSOR  

* [$File](#$File) : <code>object</code>
    * [.saveData(filename, data)](#JsMB.saveData) ⇒ <code>this</code>
    * [.readData(filename)](#JsMB.readData) ⇒ <code>object</code>
    * [.readFile(file)](#JsMB.readFile) ⇒ <code>string</code>
    * [.writeFile(file, data)](#JsMB.writeFile) ⇒ <code>this</code>
    * [.readFileBinary(file)](#JsMB.readFileBinary) ⇒ <code>Buffer</code>
    * [.writeFileBinary(file, data)](#JsMB.writeFileBinary) ⇒ <code>this</code>

<a name="JsMB.saveData"></a>

### JsMB.saveData(filename, data) ⇒ <code>this</code>
Сохраняет данные в папку приложения (appdata)

**Kind**: static method of [<code>$File</code>](#$File)  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | Имя файла |
| data | <code>object</code> | Данные для сохранения |

<a name="JsMB.readData"></a>

### JsMB.readData(filename) ⇒ <code>object</code>
Читает данные из файла в папке приложения (appdata)

**Kind**: static method of [<code>$File</code>](#$File)  
**Returns**: <code>object</code> - Объект или строка  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | Имя файла |

<a name="JsMB.readFile"></a>

### JsMB.readFile(file) ⇒ <code>string</code>
Прочитать данные из файла

**Kind**: static method of [<code>$File</code>](#$File)  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Файл |

<a name="JsMB.writeFile"></a>

### JsMB.writeFile(file, data) ⇒ <code>this</code>
Записать в файл

**Kind**: static method of [<code>$File</code>](#$File)  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Файл |
| data | <code>string</code> | Данные |

<a name="JsMB.readFileBinary"></a>

### JsMB.readFileBinary(file) ⇒ <code>Buffer</code>
Чтение файла в бинароном виде

**Kind**: static method of [<code>$File</code>](#$File)  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Файл |

<a name="JsMB.writeFileBinary"></a>

### JsMB.writeFileBinary(file, data) ⇒ <code>this</code>
Запись файла в бинарном виде

**Kind**: static method of [<code>$File</code>](#$File)  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Файл |
| data | <code>Buffer</code> | Буфер с данными |

