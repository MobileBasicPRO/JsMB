<a name="$Process"></a>

## $Process : <code>object</code>
Модуль для работы с процессами
Поддерживает:
JsMB-Interpreter
NW.JS
Node.JS

**Kind**: global namespace  
**Author**: PROPHESSOR  

* [$Process](#$Process) : <code>object</code>
    * [.exec(target)](#JsMB.exec) ⇒ <code>this</code>
    * [.execReturn(target)](#JsMB.execReturn) ⇒ <code>string</code>
    * [.execFile(file, [keys])](#JsMB.execFile) ⇒ <code>this</code>
    * [.execFileReturn(file, [keys])](#JsMB.execFileReturn) ⇒ <code>this</code>

<a name="JsMB.exec"></a>

### JsMB.exec(target) ⇒ <code>this</code>
Выполнить команду

**Kind**: static method of [<code>$Process</code>](#$Process)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | Команда |

<a name="JsMB.execReturn"></a>

### JsMB.execReturn(target) ⇒ <code>string</code>
Выполнить команду и вернуть результат

**Kind**: static method of [<code>$Process</code>](#$Process)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | Команда |

<a name="JsMB.execFile"></a>

### JsMB.execFile(file, [keys]) ⇒ <code>this</code>
Выполнить файл

**Kind**: static method of [<code>$Process</code>](#$Process)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| file | <code>string</code> |  | Файл |
| [keys] | <code>array</code> | <code>[]</code> | Массив с ключами |

<a name="JsMB.execFileReturn"></a>

### JsMB.execFileReturn(file, [keys]) ⇒ <code>this</code>
Выполнить файл и вернуть результат

**Kind**: static method of [<code>$Process</code>](#$Process)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| file | <code>string</code> |  | Файл |
| [keys] | <code>array</code> | <code>[]</code> | Массив с ключами |

