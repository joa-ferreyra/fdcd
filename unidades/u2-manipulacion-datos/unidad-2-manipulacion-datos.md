---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Unidad 2 - Manipulación de Datos

## ¿Qué son los datos?

Los datos son una porción de información de algún tema en particular que se guarda para ser utilizada en futuros análisis. Los datos pueden presentarse de tres formas: estructurados, no estructurados y semi-estructurados. A lo largo de este curso trabajaremos mayormente con datos estructurados, y en menor medida con datos semi-estructurados.

## Datos estructurados, no estructurados y semi-estructurados

```{figure} imagenes/types_data.png
---
width: 80%
align: center
---
Representación esquemática de datos no estructurados (*unstructured*), semi-estructurados (*semi structured*) y estructurados (*structured*).
```

### Datos estructurados

Los datos estructurados son aquellos que poseen un formato estandarizado o claramente definido, lo que permite que tanto los sistemas informáticos como las personas puedan almacenarlos, procesarlos y analizarlos de manera eficiente. 

Habitualmente, este tipo de datos se organiza en forma de tablas compuestas por filas y columnas, donde cada fila representa un registro (u observación) y cada columna representa un atributo (o variable). Cada atributo tiene asociado un tipo de dato específico (por ejemplo, numérico, texto, fecha, lógico) y un formato consistente, lo que facilita su validación, consulta y análisis.

**Características más importantes:**

**Atributos definibles.** Los datos estructurados comparten un esquema fijo: todos los registros presentan el mismo conjunto de atributos y cada atributo cumple un rol claramente establecido.

**Atributos relacionales.** Las tablas de datos estructurados suelen contener campos comunes (claves o *keys*) que permiten establecer relaciones entre diferentes tablas, posibilitando la integración de múltiples conjuntos de datos.

```{figure} imagenes/structured_data.png
---
width: 80%
align: center
---
Bases de datos relacionales.
```

**Almacenamiento.** Los datos estructurados se almacenan típicamente en bases de datos relacionales y se gestionan mediante sistemas de gestión de bases de datos. Su consulta y manipulación se realiza de forma estándar a través de lenguajes como SQL (*Structured Query Language*).

### Datos no estructurados

Los datos no estructurados son información que no posee un modelo de datos predefinido ni un esquema fijo, y cuya organización interna no sigue una estructura tabular. Por esta razón, no pueden representarse naturalmente mediante filas y columnas. Este tipo de datos suele presentarse en formatos libres o complejos, donde el significado está implícito en el contenido más que en una estructura explícita. Ejemplos: correos electrónicos, mensajes de chat, documentos de texto, imágenes, audio, video, publicaciones en redes sociales, páginas web.

**Algunas diferencias respecto a los datos estructurados:**

**Facilidad de análisis.** Es considerablemente más difícil organizar, limpiar y analizar datos no estructurados, ya que no cuentan con un esquema explícito. Su procesamiento suele requerir técnicas específicas como procesamiento de lenguaje natural, visión por computadora o reconocimiento de patrones.

**Capacidad de búsqueda.** En los datos estructurados es sencillo realizar búsquedas y filtros porque los valores se almacenan en campos bien definidos (columnas), lo que permite aplicar condiciones precisas, por ejemplo: buscar todas las filas donde *edad > 30* o donde *ciudad = "Córdoba"*.

En los datos no estructurados, en cambio, no existen campos explícitos. Por ello, la búsqueda suele realizarse mediante:

- Búsqueda de texto completo (*full-text search*): se analizan los documentos como texto, identificando palabras o frases dentro del contenido completo (por ejemplo, buscar la palabra contrato dentro de miles de documentos PDF o correos electrónicos).

- Uso de metadatos: se agregan o extraen descriptores asociados a los archivos, como fecha de creación, autor, tipo de archivo, idioma o etiquetas asignadas manual o automáticamente, que permiten filtrar información sin analizar directamente el contenido principal.

- Técnicas de indexación: se construyen estructuras especiales (índices) que permiten localizar rápidamente términos, patrones o características dentro de grandes volúmenes de datos, reduciendo el tiempo de búsqueda y habilitando funcionalidades como ranking de relevancia o coincidencias aproximadas.

Como resultado, mientras que en los datos estructurados la búsqueda se apoya principalmente en el esquema y los campos, en los datos no estructurados la búsqueda depende de procesar el contenido, extraer información auxiliar y utilizar estructuras adicionales.

**Flexibilidad.** Los datos no estructurados presentan menos restricciones sobre su formato, lo que facilita la incorporación de nueva información sin necesidad de modificar un esquema preexistente.

```{dropdown} La era de los datos no estructurados
:class: seealso

Se estima que **más del 80 % de los datos generados a nivel mundial son *no estructurados***, y que una proporción significativa corresponde a datos textuales, como correos electrónicos, publicaciones en redes sociales, documentos y noticias.
```

### Datos semi-estructurados

Los datos semi-estructurados constituyen una categoría intermedia entre los datos estructurados y los no estructurados. Poseen una organización interna reconocible, pero no siguen un esquema rígido como el de las tablas en una base de datos relacional. Utilizan marcas, etiquetas (*tags*) o pares clave–valor para describir los datos, lo que permite representar jerarquías y relaciones simples.

Ejemplos típicos: archivos XML, JSON y YAML.

### XML

XML es un formato basado en texto que utiliza etiquetas para describir la información. Es legible tanto por humanos como por computadoras y permite representar estructuras jerárquicas.

El siguiente código representa el registro de una persona:

```xml
<Person Age="23">
    <FirstName>Quinn</FirstName>
    <LastName>Anderson</LastName>
    <Hobbies>
        <Hobby Type="Sports">Golf</Hobby>
        <Hobby Type="Leisure">Reading</Hobby>
        <Hobby Type="Leisure">Guitar</Hobby>
   </Hobbies>
</Person>

```

Resulta intuitivo observar que el ejemplo anterior contiene información sobre el nombre, apellido, edad y una lista de hobbies, donde cada hobby posee un tipo asociado (*Sports* o *Leisure*).

XML utiliza ***tags*** para darle forma a los datos. Los tags pueden ser:

- **Elementos,** como `<FirstName>`.

- **Atributos,** como `Age='23'`. 

A su vez, los elementos pueden tener elementos hijos que permiten expresar relaciones, como `Hobby` dentro del elemento `Hobbies`.

### JSON (*JavaScript Object Notation*)

JSON es un formato de datos liviano, ampliamente utilizado para almacenar e intercambiar información, especialmente en aplicaciones web y APIs. Está basado en una **estructura de pares clave–valor**, admite listas (arreglos) y soporta estructuras jerárquicas.

Utiliza llaves `{}` para delimitar objetos y corchetes `[]` para listas.

Retomando el mismo registro que en el ejemplo de XML:

```json
{
    "firstName": "Quinn",
    "lastName": "Anderson",
    "age": "23",
    "hobbies": [
        { "type": "Sports", "value": "Golf" },
        { "type": "Leisure", "value": "Reading" },
        { "type": "Leisure", "value": "Guitar" }
    ]
}
```

### YAML (*YAML Ain’t Markup Language*)

YAML es un lenguaje de serialización de datos diseñado para ser altamente legible para humanos. La estructura se define principalmente mediante indentación y saltos de línea, reduciendo el uso de caracteres especiales.

El mismo registro, ahora en YAML:

```yaml
firstName: Quinn
lastName: Anderson
age: 23
hobbies:
    - type: Sports
      value: Golf
    - type: Leisure
      value: Reading
    - type: Leisure
      value: Guitar
```

```{admonition} **XML vs. JSON vs. YAML**
:class: note

**XML.**
Formato basado en etiquetas. Más verboso. Usado históricamente en integración de sistemas y documentos estructurados.

**JSON.**
Formato liviano basado en pares clave–valor y listas. Estándar de facto para intercambio de datos en la web y servicios REST.

**YAML.**
Formato orientado a la legibilidad humana. Muy utilizado en archivos de configuración y automatización.
```

### Un mismo dato, distintos formatos

Vale la pena detenerse en un punto: las tres categorías que acabamos de ver no son compartimentos estancos. Un mismo dato del mundo real puede circular en distintos formatos según la etapa del proceso y el sistema que lo esté manejando. Pensemos en el recorrido de un pedido hecho en un *e-commerce*, desde que se genera hasta que llega a un análisis de datos:

Cuando el pedido se **guarda en la base de datos** de la tienda, queda representado en una tabla con columnas fijas como `id_pedido`, `id_cliente`, `fecha`, `monto` y `estado`. Es un dato **estructurado**: todos los pedidos comparten exactamente los mismos atributos.

Cuando otra aplicación necesita **consultar ese pedido a través de una API**, lo habitual es que la respuesta llegue en formato JSON, algo como:

```json
{
    "id_pedido": 4821,
    "cliente": "Ana Gómez",
    "items": [
        {"producto": "Zapatillas", "cantidad": 1},
        {"producto": "Medias", "cantidad": 3}
    ],
    "estado": "enviado"
}
```

Acá ya no hay un esquema tabular rígido: la cantidad de elementos dentro de `items` puede variar de un pedido a otro. Es un dato **semi-estructurado**.

Si además el cliente dejó un **comentario sobre su compra** ("llegó rápido pero la caja venía golpeada"), ese texto libre es un dato **no estructurado**: no tiene campos predefinidos ni una estructura que pueda anticiparse de antemano.

Reconocer en qué categoría cae cada dato con el que trabajamos es el primer paso antes de decidir cómo procesarlo.

## Datos tabulares

Aunque una gran proporción de los datos generados en el mundo real es no estructurada, en el análisis de datos es muy común trabajar con información representada en formato tabular, es decir, organizada en filas y columnas. Este será el tipo de datos con el que trabajaremos principalmente a lo largo de esta asignatura.

Los datos tabulares pueden almacenarse en distintos tipos de archivos, entre ellos:

- `.csv`

- `.json`

- `.txt`

- `.html`

- `.parquet`


```{admonition} ¿Por qué JSON aparece en esta lista si es semi-estructurado?
:class: important

Puede llamar la atención que JSON, presentado en la sección anterior como un formato semi-estructurado, aparezca ahora entre los formatos utilizados para almacenar datos tabulares (que son, por definición, datos estructurados). Vale la pena aclarar esta aparente contradicción antes de seguir.

La clasificación en *estructurado*, *semi-estructurado* y *no estructurado* describe **qué tan flexible es un formato**, es decir, qué tipos de esquema es capaz de representar. No describe la forma específica que tiene un archivo en particular.

- **CSV** solo puede representar datos con un esquema fijo y tabular: no existe forma de expresar en un CSV una jerarquía o una lista de longitud variable dentro de un registro. Por eso CSV queda siempre atado a la categoría de datos estructurados.

- **JSON**, en cambio, es un formato más flexible: puede representar tanto estructuras jerárquicas y de longitud variable (semi-estructuradas, como el ejemplo de `hobbies` visto anteriormente) como, en un caso particular, una lista de objetos donde todos comparten exactamente las mismas claves. Ese caso particular es, ni más ni menos, una tabla.

En definitiva: **todo dato tabular puede expresarse en JSON, pero no todo archivo JSON representa datos tabulares.** Por eso aparece en esta lista: no porque sea inherentemente estructurado, sino porque es capaz de representar, entre otras cosas, datos que sí lo son.
```

### Archivos orientados a filas y orientados a columnas

Antes de revisar cada tipo de archivo en particular, es preciso establecer una diferenciación entre las formas generales de organizar físicamente los datos tabulares en un archivo o sistema de almacenamiento:

#### Archivos orientados a filas (*row-oriented*)

Los datos se organizan por registros. Todos los valores correspondientes a una misma fila se almacenan juntos. Esto resulta eficiente cuando se necesita leer registros completos o insertar o modificar filas individuales.

Sin embargo, realizar consultas sobre un atributo específico para muchos registros (por ejemplo, leer solo la columna `anio_nacimiento` para todas las personas) puede ser menos eficiente, ya que es necesario leer también otros datos del registro que no se utilizarán.

#### Archivos orientados a columnas (*column-oriented*)

Los datos se organizan por columnas (campos o variables). Todos los valores de una misma columna se almacenan juntos. Esto es eficiente cuando se necesita acceder a una o pocas columnas o realizar operaciones analíticas sobre variables específicas. Además, como todos los valores de una columna suelen ser del mismo tipo, estos formatos permiten una mejor compresión del archivo.

Para ilustrar lo anterior, supongamos que tenemos la siguiente tabla con información sobre un grupo de personas:

| dni | nombre | apellido | año_nacimiento |
| --- | --- | --- | --- |
| 40576890 | Pedro | Aguirre | 1995 |
| 32492645 | Julia | Martinez | 1988 |
| 30298710 | Camila | Suarez | 1985 |

Si el archivo se guarda **orientado a filas**, conceptualmente los datos se almacenan así:

**Fila 1** → 40576890, Pedro, Aguirre, 1995

**Fila 2** → 32492645, Julia, Martinez, 1988

**Fila 3** → 30298710, Camila, Suarez, 1985

Es decir, cada registro contiene todos sus atributos de forma consecutiva.

Por el contrario, si el archivo se guarda **orientado a columnas**, los datos se almacenan así:

**Columna dni** → 40576890, 32492645, 30298710

**Columna nombre** → Pedro, Julia, Camila

**Columna apellido** → Aguirre, Martinez, Suarez

**Columna año_nacimiento** → 1995, 1988, 1985

Es decir, cada columna almacena consecutivamente los valores de ese atributo.

```{figure} imagenes/row_column_oriented.svg
---
width: 100%
align: center
---
Comparación esquemática entre el almacenamiento orientado a filas y el orientado a columnas, usando el mismo conjunto de datos.
```

```{dropdown} Más info
:class: seealso

Los formatos de archivo orientados a columnas (más adelante veremos que Parquet es uno de ellos) son ampliamente utilizados en entornos de análisis y *Big Data*, mientras que muchos formatos tradicionales (como CSV) son esencialmente orientados a filas.

El siguiente [post](https://dataschool.com/data-modeling-101/row-vs-column-oriented-databases/#:~:text=Row%20oriented%20databases%20are%20databases,benefits%20for%20storing%20data%20quickly) muestra de forma clara las ventajas y desventajas de cada tipo de archivo.
```

### Tipos de archivos para el almacenamiento de datos tabulares

Existen distintos formatos de archivo para almacenar datos tabulares. A lo largo de esta materia trabajaremos principalmente con los siguientes:

- .csv

- .json

- .txt

- .html

- .parquet

Cada uno de estos formatos presenta características, ventajas y limitaciones que los hacen más o menos adecuados según el contexto y el tipo de análisis a realizar.

#### CSV (*Comma-Separated Values*)

En los archivos CSV, los diferentes registros (las filas) se separan entre sí mediante **saltos de líneas**, mientras que los atributos O variables (las columnas) se separan mediante un **delimitador**, que habitualmente es la coma, aunque también pueden utilizarse otros caracteres como el punto y coma o el tabulador. Hoy en día, es uno de los formatos más utilizados para el análisis de datos debido a su simplicidad y amplia compatibilidad.

Ejemplo:

```
nombre, edad, ocupacion
Juan, 25, estudiante
Ana, 30, ingeniera
Pedro, 74, jubilado
Agustina, 48, psicologa
```

**Dos cuestiones importantes a tener en cuenta:** 

- Los archivos CSV poseen un formato de almacenamiento **orientado a filas.**

- Los archivos CSV **no almacenan información sobre los tipos de datos**, ya que todo su contenido se guarda como texto plano.

**Ventajas:**

- Son ampliamente soportados por prácticamente todas las herramientas y lenguajes de análisis de datos.

- Son legibles por humanos y fáciles de generar desde casi cualquier lenguaje de programación.

- Pueden importarse fácilmente en hojas de cálculo, bases de datos y librerías de análisis.

**Desventajas:**

- No resultan eficientes para conjuntos de datos grandes o con tipos de datos complejos.

- Pueden generar ambigüedades si los valores contienen el carácter separador o saltos de línea (aunque existen mecanismos de escape).

- Al estar orientados a filas, no son ideales para consultas analíticas que operan sobre columnas específicas.

- No almacenan información de tipos de datos, por lo que esta debe inferirse o especificarse al momento de la lectura.

- En archivos de gran tamaño, los tiempos de lectura pueden ser elevados.

#### TXT

El formato `.txt` es uno de los más simples y generales para el almacenamiento de información. Cuando se utilizan para datos tabulares, los archivos de texto suelen ser conceptualmente similares a los CSV, aunque no existe una convención estricta sobre cómo deben estructurarse.

**Aplicaciones:**

Los archivos de texto plano se utilizan comúnmente para almacenar grandes volúmenes de datos textuales, tales como documentos, transcripciones, registros de chat y correos electrónicos. También son ampliamente utilizados en tareas de procesamiento de lenguaje natural (NLP) para el análisis de textos provenientes de noticias, redes sociales, documentos médicos, entre otros.

**Ventajas:**

- Son simples de crear, leer y manipular.

- Son completamente legibles por humanos.

- Resultan adecuados para el intercambio de información entre sistemas, siempre que se conozca la estructura del contenido.

**Desventajas:**

- La falta de una estructura formal (como un esquema fijo de columnas o delimitadores estandarizados) dificulta el procesamiento automático de los datos, ya que muchas veces los programas no pueden interpretarlos de manera directa.

- Suelen requerir tareas adicionales de *parseo* y validación, es decir, analizar el texto para identificar campos y transformarlo en una estructura de datos utilizable, y verificar que los valores cumplan con el formato esperado.

- No son adecuados para almacenar datos complejos ni grandes volúmenes de información estructurada.

- No resultan eficientes en términos de espacio o rendimiento para análisis a gran escala.

#### Apache Parquet

Apache Parquet es un formato de almacenamiento de datos tabulares orientado a columnas, diseñado y optimizado para cargas de datos de gran tamaño y consultas analíticas. Fue desarrollado por Cloudera y Twitter en 2013 como proyecto de código abierto, y es ampliamente utilizado en ecosistemas de *Big Data*, especialmente en conjunto con herramientas como Hadoop, Hive, Impala y Spark.

Parquet almacena los datos en columnas comprimidas, lo que lo hace mucho más eficiente que formatos como CSV cuando se trabaja con grandes volúmenes de información.

**Ventajas:**

- **Compresión eficiente:** Parquet utiliza técnicas de compresión a nivel de columna (por ejemplo, Snappy o Gzip), lo que reduce significativamente el espacio de almacenamiento requerido. Además, al disminuir la cantidad de datos que deben leerse desde disco, mejora el rendimiento de las consultas.

- **Almacenamiento orientado a columnas:** al guardar los datos por columnas en lugar de filas, Parquet permite leer únicamente las variables necesarias para un análisis. Esto resulta especialmente eficiente en tareas típicas de ciencia de datos, donde suelen analizarse subconjuntos de columnas sobre grandes volúmenes de registros.

- **Soporte de tipos de datos y metadatos:** a diferencia de formatos como CSV, Parquet almacena información sobre los tipos de datos de cada columna, lo que evita ambigüedades al leer los datos y reduce errores en los procesos de análisis.

- **Evolución del esquema:** Parquet permite modificar el esquema de los datos (agregar o eliminar columnas) sin necesidad de reescribir completamente los archivos existentes, lo que facilita el mantenimiento de conjuntos de datos a lo largo del tiempo.

- **Integración con ecosistemas de *Big Data*:** es ampliamente soportado por herramientas como Spark, Hive y sistemas de almacenamiento en la nube, lo que lo convierte en un estándar de facto para el análisis de datos a gran escala.

**Desventajas**:

- **Menor eficiencia en escrituras:** debido a su estructura orientada a columnas, Parquet no es ideal para escenarios donde se realizan escrituras frecuentes o incrementales. Su rendimiento es mejor cuando los datos se escriben en bloques grandes y luego se consultan muchas veces.

- **No resulta conveniente para conjuntos de datos pequeños:** en archivos de tamaño reducido, el costo adicional de almacenar metadatos y organizar los datos por columnas puede superar los beneficios, haciendo que formatos más simples como CSV sean más prácticos.

- **Mayor complejidad conceptual y técnica:** el uso de Parquet requiere herramientas específicas para su lectura y escritura, y una comprensión básica de conceptos como esquemas, compresión y almacenamiento columnar, lo que puede representar una barrera inicial para principiantes.

- **No es legible por humanos:** a diferencia de los archivos de texto plano, los archivos Parquet son binarios, por lo que no pueden inspeccionarse o editarse fácilmente sin herramientas especializadas.

#### JSON

El formato JSON fue presentado previamente en la sección de datos semi-estructurados. Como se explicó más arriba, JSON es un formato flexible que puede representar tanto estructuras jerárquicas como datos tabulares. Se utiliza para representar una tabla específicamente cuando los registros tienen una estructura homogénea, es decir, cuando se trata de una lista de objetos donde todos comparten exactamente las mismas claves. Por ejemplo, la misma tabla de personas utilizada anteriormente podría representarse así:

```json
[
    {"dni": "40576890", "nombre": "Pedro", "apellido": "Aguirre", "año_nacimiento": 1995},
    {"dni": "32492645", "nombre": "Julia", "apellido": "Martinez", "año_nacimiento": 1988},
    {"dni": "30298710", "nombre": "Camila", "apellido": "Suarez", "año_nacimiento": 1985}
]
```

Aunque no es su uso principal, este formato es habitual como origen de datos tabulares cuando provienen de una API o de un sistema que expone su información en JSON.

#### HTML (*HyperText Markup Language*)

El formato HTML es un lenguaje de marcado utilizado principalmente para la creación y estructuración de páginas web. En el contexto de la ciencia de datos, no se utiliza como un formato de almacenamiento primario de datos, sino como una fuente frecuente de extracción de información, ya que la mayoría de los datos disponibles en la Web se publican en este formato.

En particular, HTML permite representar datos tabulares mediante tablas, lo que lo convierte en un formato común de origen para tareas de *web scraping* y recolección de datos.

**Sintaxis de marcado en HTML:**

HTML (al igual que XML) utiliza una sintaxis de marcado, basada en etiquetas (*tags*), para estructurar el contenido. Las etiquetas “marcan” o delimitan distintas partes del documento y definen su significado.

**Elementos clave para tablas en HTML:**

`<table>`: define el inicio y el fin de una tabla.

`<tr>` (*table row*): representa una fila de la tabla.

`<th>` (*table header*): representa una celda de encabezado.

`<td>` (*table data*): representa una celda de datos.

Ejemplo de una tabla HTML:

```html
<html>
	<head></head>
	<body>
		<table id="customers">
		  <tbody>
				<tr>
			    <th>Company</th>
			    <th>Contact</th>
			    <th>Country</th>
			  </tr>
			  <tr>
			    <td>Alfreds Futterkiste</td>
			    <td>Maria Anders</td>
			    <td>Germany</td>
			  </tr>
			  <tr>
			    <td>Centro comercial Moctezuma</td>
			    <td>Francisco Chang</td>
			    <td>Mexico</td>
			  </tr>
			  <tr>
			    <td>Ernst Handel</td>
			    <td>Roland Mendel</td>
			    <td>Austria</td>
			  </tr>
			  <tr>
			    <td>Island Trading</td>
			    <td>Helen Bennett</td>
			    <td>UK</td>
			  </tr>
			</tbody>
		</table>
	</body>
</html>
```

**Aplicaciones en ciencia de datos:**

- Extracción de datos desde páginas web mediante técnicas de *web scraping*.

- Análisis de contenido textual publicado en sitios web, como artículos, noticias, blogs y foros.

- Fuente de datos para análisis de opinión, análisis de sentimiento y minería de texto.

- Generación de reportes o visualizaciones simples en formato web.


**Ventajas:**

- Es un estándar ampliamente utilizado y bien documentado.

- Compatible con una gran variedad de lenguajes y herramientas de análisis de datos.

- Permite acceder a una enorme cantidad de datos disponibles públicamente en la Web.

- Las tablas HTML pueden convertirse relativamente fácil a formatos tabulares como `DataFrame`.


**Desventajas:**

- No es un formato diseñado para el almacenamiento eficiente de datos.

- La estructura de los documentos HTML puede ser compleja o inconsistente.

- Cambios en la estructura de una página web pueden romper los procesos de extracción.

- Requiere tareas adicionales de parseo para transformar la información en datos tabulares utilizables.


## Primeros pasos con **pandas**

``` {admonition} **Sobre este apartado**
:class: important
En esta sección se retoman conceptos vistos en Programación III y se incorporan nuevas ideas que serán fundamentales para el trabajo con datos tabulares.
```

**`pandas`** es una librería de Python para el análisis y manipulación de datos. Proporciona **estructuras de datos** eficientes para almacenar y organizar información, y un conjunto de **funciones y métodos** que permiten realizar una gran variedad de operaciones, como filtrar, transformar, agrupar o resumir datos, entre muchas otras.

### Estructuras de datos básicas en **pandas**

`pandas` proporciona dos estructuras principales para trabajar con datos:

- **`Series`:** una `Series` de `pandas` es un array unidimensional capaz de contener cualquier tipo de dato: números enteros, cadenas de texto, números decimales, objetos de Python, etc. Cada elemento de la `Series` posee un identificador único llamado **índice** (*index*).

- **`DataFrame`:** un `DataFrame` es una estructura bidimensional tabular formada por filas y columnas. Cada fila está identificada por un índice, y las distintas columnas pueden almacenar datos de diferente tipo.

```{figure} imagenes/pandas_series_dataframe.svg
---
width: 100%
align: center
---
Una `Series` es un array unidimensional con índice. Un `DataFrame` es un conjunto de `Series` que comparten el mismo índice, una por cada columna.
```

### Tipos de datos usuales

En el trabajo con datos tabulares aparecen con frecuencia los siguientes tipos de datos:

- `int`, para representar valores enteros.

- `float`, para representar valores reales en coma flotante.

- `str`, para representar cadenas de texto.

- `bool`, para representar valores booleanos: `True` o `False`.

- `NaN` / `None`, para representar valores faltantes (ausentes o desconocidos).

```{admonition} **Valores faltantes: NaN, None y NA**
:class: tip 

En el trabajo con datos tabulares es habitual encontrarse con valores faltantes. Dependiendo del contexto y de la herramienta utilizada, estos valores pueden representarse de distintas maneras:

**NaN (*Not a Number*):** es un valor especial utilizado principalmente en contextos de cálculo numérico. Suele aparecer en datos de tipo flotante y representa resultados indefinidos o inválidos (por ejemplo, una división por cero). Una característica importante es que `NaN` no es igual a sí mismo: la comparación `NaN == NaN` siempre devuelve `False`.

**None:** es el valor nulo propio de Python y se utiliza para indicar la ausencia de un valor en un sentido general. No está pensado específicamente para el análisis de datos y, cuando se trabaja con estructuras como `DataFrame`, suele convertirse internamente en un valor faltante del tipo `NaN` o `NA`.

**NA:** es una representación de valor faltante utilizada en el análisis de datos, originalmente asociada al lenguaje R. En `pandas` existe como `pd.NA` y está diseñada para representar datos faltantes de manera explícita, independientemente del tipo de dato (numérico, texto o booleano).

Comprender estas diferencias es importante, ya que la forma en que se representan los valores faltantes influye en las operaciones disponibles, las conversiones de tipo y el comportamiento de los métodos de análisis.
```

```{dropdown} Una aclaración sobre tamaños en memoria

En muchos lenguajes existen distintos tipos de enteros (por ejemplo, 8, 16, 32 o 64 bits). En Python, a partir de la versión 3, el tipo `int` utiliza precisión arbitraria, lo que significa que puede crecer dinámicamente según el valor que almacene, sin un límite fijo de bits como en otros lenguajes.

En cambio, los valores de punto flotante (`float`) suelen almacenarse internamente en doble precisión (64 bits), siguiendo el estándar IEEE 754.

En `pandas`, los tipos numéricos suelen representarse explícitamente con tamaños fijos, como:

- `int64`: enteros de 64 bits

- `float64`: flotantes de 64 bits
```

### Lectura de archivos con datos tabulares

`pandas` permite leer datos desde múltiples formatos de archivo y convertirlos directamente en `DataFrame`. Algunos de los formatos más comunes son: archivos CSV (`.csv`), archivos Excel (`.xlsx`, `.xls`), archivos JSON (`.json`), archivos de texto delimitados (`.txt`) y archivos Parquet (`.parquet`). La lectura de datos se realiza mediante funciones específicas para cada tipo de archivo:

- **`read_csv()`**. Si bien el archivo `.csv` sigue siendo orientado a filas, la función se encarga de convertirlo en un `DataFrame`. `read_csv()` también permite leer archivos `.txt`.

- **`read_excel()`**. La función `read_excel()` permite leer archivos `.xlsx` o `.xls`. Si el archivo en cuestión tiene más de una hoja, se debe especificar el nombre de la hoja con la que se quiere trabajar en el argumento `sheet_name`.

- **`read_json()`**. La función `read_json()` posibilita la lectura de archivos JSON, convirtiéndolos automáticamente en un `DataFrame`.

- **`read_parquet()`**. La función `read_parquet()` permite leer archivos con este formato. Algunos de sus parámetros más habituales son:

  - **`engine`**: indica qué librería utiliza `pandas` por detrás para leer el archivo Parquet. Las opciones son `'pyarrow'`, `'fastparquet'` (ambas son librerías externas especializadas en este formato) o `'auto'`, que es el valor por defecto y deja que `pandas` elija automáticamente según lo que esté instalado en el entorno.

  - **`columns`**: permite indicar una lista con los nombres de las columnas que se quieren leer, en lugar de cargar el archivo completo. Este parámetro es un buen ejemplo concreto de la ventaja de un formato orientado a columnas como Parquet: si solo se necesitan dos o tres columnas de un archivo con cien, `columns` evita leer del disco las columnas restantes.

  - **`storage_options`**: permite pasar credenciales u otras opciones de conexión cuando el archivo no está almacenado localmente, sino en un servicio de almacenamiento remoto (por ejemplo, un *bucket* en la nube). Al leer un archivo local, como en el ejemplo siguiente, este parámetro no es necesario y se deja en `None`.

```{code-cell} python3
:tags: ["skip-execution"]

import pandas as pd

df = pd.read_parquet(
    'datasets/datos.parquet',
    engine = 'auto',
    columns = None,
    storage_options = None
)
```

```{dropdown} Nota sobre versiones de **pandas**
`read_parquet()` tiene además un parámetro llamado `dtype_backend`, que permite elegir con qué tipo de estructura interna se representan los datos leídos (por ejemplo, `'numpy_nullable'` o `'pyarrow'`). Es una opción más avanzada, pensada sobre todo para el manejo fino de valores faltantes, y no es necesaria para el uso habitual de la función en esta asignatura.
```

Estas funciones permiten especificar opciones adicionales, como el delimitador, la presencia de encabezados, el tipo de dato de las columnas o el manejo de valores faltantes.

#### Inferencia de tipos de datos al leer archivos

Como se comentó anteriormente, los archivos CSV no almacenan información explícita sobre el tipo de dato de cada columna, ya que todo el contenido se guarda como texto plano.

Cuando se lee un archivo CSV con herramientas básicas, toda la información se interpreta inicialmente como texto. Sin embargo, cuando se utiliza `pandas`, la librería intenta inferir automáticamente el tipo de dato más apropiado para cada columna. Además, es posible especificar manualmente los tipos deseados mediante el parámetro `dtype`:

```{code-cell} python3
:tags: ["skip-execution"]

pd.read_csv('listings.csv', dtype = {'price' : 'float'})
```

Esto fuerza a que la columna `price` sea interpretada como número de punto flotante.

### Inspección de un DataFrame

Para ilustrar esta sección y algunas de las próximas que se presentan en esta unidad, vamos a trabajar con un dataset de terremotos construido a partir de la **API pública del USGS** (*United States Geological Survey*). Cada fila representa un sismo, con información como su magnitud, ubicación, momento en que ocurrió, y si estuvo asociado a un tsunami o a una alerta del sistema PAGER de USGS.

El enfoque de trabajar con estos datos está inspirado en el libro *Hands-On Data Analysis with Pandas*, de Stefanie Molin ([repositorio de GitHub](https://github.com/stefmolin/Hands-On-Data-Analysis-with-Pandas-2nd-edition)). A diferencia del dataset original del libro, el que usamos en este apunte se descargó directamente desde la API de USGS, filtrando los sismos de magnitud 4.5 o mayor, ocurridos en el último año. Además, el archivo fue modificado ligeramente con fines pedagógicos, para poder ilustrar más adelante algunas situaciones de validación de datos que suelen aparecer en la práctica.

```{code-cell} python
import pandas as pd

df_quakes = pd.read_csv('datasets/earthquakes.csv')
```

Antes de empezar a trabajar con un dataset, conviene hacer una primera inspección para entender su tamaño, sus columnas y los tipos de datos que contiene. Además, esta primera inspección nos va a dar pistas sobre hacia dónde dirigir las operaciones de *data wrangling* que veremos más adelante. `pandas` ofrece varios atributos y métodos para esto, y este es un buen momento para dejar completamente clara una distinción que venimos usando de manera intuitiva.

```{admonition} Función, método o atributo
:class: tip

Pensemos en un objeto cualquiera, como un auto. Un auto **tiene** ciertas propiedades ya definidas, como su color, su marca, la cantidad de puertas, y las mismas no requieren ningún cálculo para conocerlas: alcanza con consultarlas. Pero un auto también **hace** cosas, como ponerse en marcha, frenar o cambiar de dirección, acciones que se ejecutan cada vez que se las solicita. Esta misma distinción existe en los objetos de Python:

- Un **atributo** es una propiedad que el objeto ya tiene calculada, a la que se accede directamente, sin paréntesis. Por ejemplo, `df_quakes.shape` no *hace* nada: simplemente devuelve una propiedad que el `DataFrame` ya conoce sobre sí mismo.

- Un **método** es una acción que el objeto puede ejecutar, y por eso siempre se invoca con paréntesis, incluso si no recibe ningún argumento. Por ejemplo, `df_quakes.head()` ejecuta una operación (tomar las primeras filas, como veremos más adelante) cada vez que se lo llama.

- Una **función**, a diferencia de un método, no pertenece a ningún objeto en particular: se invoca directamente desde el módulo que la define, como `pd.read_csv(...)`. La diferencia con un método es que una función necesita que se le pase explícitamente todo lo que va a usar, mientras que un método ya "conoce" al objeto sobre el que actúa, porque se invoca sobre él.

| | Se invoca así | Ejemplo |
|---|---|---|
| **Función** | `modulo.algo()` | `pd.read_csv(...)` |
| **Método** | `objeto.algo()` | `df_quakes.head()` |
| **Atributo** | `objeto.algo` (sin paréntesis) | `df_quakes.shape` |
```

#### Atributos

Como se mencionó anteriormente, los atributos son propiedades del objeto que devuelven información directamente.

- **`shape`**: devuelve una tupla `(cantidad_de_filas, cantidad_de_columnas)` que nos permite conocer el número de observaciones (filas) y el número de variables (columnas) de nuestro dataset.

```{code-cell} python
df_quakes.shape
```

- **`columns`**: devuelve los nombres de las columnas del `DataFrame`.

```{code-cell} python
df_quakes.columns
```

- **`dtypes`**: devuelve el tipo de dato asignado a cada columna. Es un atributo útil para advertir columnas que no contienen el tipo esperado de dato.

```{code-cell} python
df_quakes.dtypes
```

#### Métodos

Además de los atributos mencionados anteriormente, hay varios métodos útiles para una primera inspección:

- **`head()`**: muestra las primeras filas del `DataFrame` (por defecto, 5). Es útil para tener una primera idea de cómo lucen los datos.

```{code-cell} python
df_quakes.head()
```

- **`tail()`**: análogo a `head()`, pero muestra las últimas filas. Es una buena práctica revisarlas también, ya que a veces hay filas con datos corruptos o incompletos al final de un archivo.

```{code-cell} python
df_quakes.tail()
```

- **`info()`**: combina buena parte de la información anterior en una única salida: cantidad de filas y columnas, tipo de dato y cantidad de valores no nulos por columna. Los valores nulos que reporta (*Null*) son los valores faltantes que ya presentamos al principio de esta sección (`NaN`, `None` o `NA`, según el caso).

```{code-cell} python
df_quakes.info()
```

La utilización de este método es una buena práctica luego de importar los datos, ya que permite detectar inconsistencias entre el tipo de dato esperado y el tipo asignado, e identificar columnas que contienen valores faltantes. Por este motivo, `info()` suele ser uno de los primeros comandos que se ejecutan al comenzar a explorar un nuevo conjunto de datos.

#### El tipo de dato de las columnas de texto

Cuando inspeccionamos un `DataFrame` utilizando el método `info()`, las columnas que contienen cadenas de texto pueden aparecer con dos tipos de dato distintos según la versión de `pandas` que estemos utilizando. 

Históricamente, `pandas` no contaba con un tipo de dato específico para texto: las columnas de cadenas se representaban con el tipo `object`, un tipo general de `NumPy` capaz de almacenar cualquier objeto de Python y de aceptar tanto `None` como `NaN` como representación de valores faltantes. En enero de 2026 salió a la luz la [**versión 3.0 de `pandas`**](https://pandas.pydata.org/community/blog/pandas-3.0.html), la cual, entre sus novedades, incorpora un tipo de dato dedicado especialmente a las cadenas de texto que se identifica como `str`. Se trata de una variante del tipo de dato `string`, ya existente, con la diferencia de que utiliza `NaN` como indicador de valores faltantes, por lo que resulta consistente con los otros tipos de datos que ya se venían utilizando.

Comencemos verificando con qué versión de la librería estamos trabajando:
  
````{code-cell} python
# Chequeo de la versión de pandas que tenemos instalada
print('Versión de pandas:', pd.__version__)
````

Nos fabricamos ahora un `DataFrame` "de juguete", que combina una columna de texto con dos columnas numéricas:

````{code-cell} python

df_juguete = pd.DataFrame({
    'ciudad': ['Rosario', 'Santa Fe', None],
    'provincia': ['Santa Fe', 'Santa Fe', 'Chubut'],
    'habitantes': [1029619, 408572, None],
    'tasa_natalidad': [9.3, 8.7, None]
})

df_juguete
```` 

Observemos que el valor `None` que pasamos al construir el `DataFrame` fue convertido automáticamente por `pandas` a `NaN`. Con el nuevo tipo de dato `str`, el valor faltante se representa siempre de la misma manera, de forma consistente con lo que ocurre en las columnas numéricas.

Analicemos ahora qué tipo de dato asignó `pandas` a cada una de las columnas:

````{code-cell} python

df_juguete.info()
````

La columna `ciudad` es reportada como `str` y no como `object`, que es lo que habríamos obtenido en versiones anteriores de la librería. Notemos, de paso, que `habitantes` fue inferida como `float64` a pesar de contener números enteros: como veremos más adelante, los enteros de NumPy no admiten valores faltantes, de modo que la presencia de un `NaN` fuerza la conversión a punto flotante.

Cabe mencionar que el tipo `str`, a diferencia de lo que ocurre con `object`, **sólo admite cadenas de texto**. Si intentamos asignar un valor de otro tipo, `pandas` devuelve un error.

**¿El tipo `object` desapareció?** No. Es importante mencionar que el tipo `object` sigue existiendo y sigue siendo el que aparece cuando una columna contiene objetos de Python que no son cadenas, o una mezcla de tipos. Por ejemplo:

```{code-cell} python
mezcla = pd.Series(['Rosario', 3, [1, 2]])

print(mezcla.dtype)
```

También puede solicitarse explícitamente mediante el comando `astype('object')`, algo necesario cuando queremos almacenar valores heterogéneos en una misma columna.

Para más información al respecto, puede consultarse la [guía para la migración hacia el nuevo tipo `str`](https://pandas.pydata.org/docs/dev/user_guide/migration.html#the-new-string-data-type).

### Selección de subconjuntos de datos

Una vez que conocemos la estructura general del dataset, el siguiente paso habitual es seleccionar subconjuntos de interés: algunas columnas, algunas filas, o combinaciones de ambas.

#### Selección de columnas

Podemos acceder a una columna como si fuera un atributo del `DataFrame`. Es oportuno recordar que una columna es, en sí misma, un objeto `Series`, por lo que al seleccionar la columna `mag` del objeto `df_quakes` obtenemos las magnitudes de los sismos como una `Series`:

```{code-cell} python
df_quakes.mag.head()
```

Como alternativa a esta notación de atributo, también es posible seleccionar una columna utilizando su nombre entre corchetes:

```{code-cell} python
df_quakes['mag'].head()
```

```{admonition} ¿Cuál conviene usar?
:class: note

La notación de corchetes (`df_quakes['mag']`) es, en general, la más segura y la que se recomienda usar por defecto. La notación de atributo (`df_quakes.mag`) solo funciona si el nombre de la columna es un identificador válido de Python (sin espacios ni caracteres especiales) y si no coincide con el nombre de algún método o atributo ya existente del `DataFrame`. Por ejemplo, no podríamos acceder así a una columna llamada `count` o `shape`, porque esos nombres ya están ocupados.
```

Para seleccionar varias columnas a la vez, se pasa una lista de nombres. El resultado, en este caso, es un `DataFrame`:

```{code-cell} python
df_quakes[['place', 'mag', 'tsunami']].head()
```

#### Slicing

El *slicing* permite seleccionar un rango de filas, utilizando su posición numérica:

```{code-cell} python
df_quakes[100:103]
```

Esto devuelve las filas ubicadas entre la posición 100 (inclusive) y la 103 (exclusive).

Podemos combinar la selección de columnas y de filas utilizando lo que se conoce como ***chaining***:

```{code-cell} python
df_quakes[['place', 'mag', 'tsunami']][100:103]
```

El *chaining* es útil para inspeccionar datos, como en el ejemplo anterior. Sin embargo, no es recomendable utilizarlo para **modificar** valores, ya que puede generar resultados inesperados o una advertencia de pandas (`SettingWithCopyWarning`). Para modificar datos, es preferible utilizar `.loc[]`, que vamos a ver a continuación.

#### Indexación con `.loc[]` y `.iloc[]`

`pandas` ofrece dos formas distintas de acceder a filas y columnas de manera más precisa, y es importante no confundirlas:

- **`.loc[]`** selecciona **por etiqueta** (el nombre del índice o de la columna).

- **`.iloc[]`** selecciona **por posición** (un número entero, sin importar cómo se llame el índice).

Por ejemplo, para seleccionar la fila con índice `10` y únicamente las columnas `place` y `mag`:

```{code-cell} python
df_quakes.loc[10, ['place', 'mag']]
```

Y para seleccionar la fila que se encuentra en la **posición** 10 (es decir, la undécima fila, sin importar qué índice tenga asignado) y las dos primeras columnas:

```{code-cell} python
df_quakes.iloc[10, :2]
```

Es importante tener en cuenta que mientras el índice de un `DataFrame` sea el numérico por defecto (`0, 1, 2, ...`), `df.loc[10]` y `df.iloc[10]` van a devolver lo mismo. Sin embargo, la diferencia se vuelve importante cuando el índice no es un rango numérico simple (por ejemplo, si se estableció una columna como índice, o si el `DataFrame` es el resultado de un filtro previo y el índice quedó con "huecos"). En esos casos, `.loc[]` sigue buscando la etiqueta indicada, mientras que `.iloc[]` sigue contando posiciones desde cero.

Podemos seleccionar todas las filas utilizando `:` como indexador de filas. Por ejemplo, seleccionemos todas las filas de la columna `title` con `.loc[]`:

```{code-cell} python
df_quakes.loc[:, 'title']
```

También podemos seleccionar múltiples filas y columnas al mismo tiempo:

```{code-cell} python
df_quakes.loc[10:15, ['title', 'mag']]
```

Notar que, al utilizar `.loc[]`, el límite final del rango es **inclusivo**. No ocurre lo mismo con `.iloc[]`, que se comporta como el *slicing* habitual de Python:

```{code-cell} python
df_quakes.iloc[10:15, [19, 8]]
```

Aquí las posiciones `19` y `8` corresponden a las columnas `title` y `mag`, respectivamente, el mismo par de columnas que usamos en el ejemplo anterior con `.loc[]`.

#### Filtrado

`pandas` ofrece varias formas de filtrar datos, entre ellas las **máscaras booleanas**. Una máscara booleana se construye evaluando una condición sobre una columna: el resultado es una `Series` de la misma longitud que el `DataFrame` original, compuesta enteramente por valores `True` o `False`, uno por cada fila, según si esa fila cumple o no la condición. Existen infinitas formas de construir una máscara booleana: alcanza con cualquier expresión que devuelva un único valor booleano por fila.

Por ejemplo, podemos ver qué filas corresponden a sismos asociados a un tsunami:

```{code-cell} python
df_quakes['tsunami'] == 1
```

Esta `Series` booleana, por sí sola, no filtra nada. Solo indica, fila por fila, si se cumple la condición. Para quedarnos efectivamente con las filas donde el resultado es `True`, pasamos esta máscara entre corchetes, junto al `DataFrame` que queremos filtrar:

```{code-cell} python
# Se agrega .head() a los fines de acortar la salida
df_quakes[df_quakes['tsunami'] == 1].head()
```

También es posible combinar más de una condición. Por ejemplo, seleccionemos únicamente los sismos de magnitud mayor a 7 que además estuvieron asociados a un tsunami. Para combinar máscaras es importante encerrar cada condición entre paréntesis, y utilizar el operador **AND** (`&`) para requerir que **ambas condiciones sean ciertas**:

```{code-cell} python
df_quakes[(df_quakes['mag'] > 7) & (df_quakes['tsunami'] == 1)]
```

Si, en cambio, quisiéramos que **al menos una de las condiciones sea cierta**, usamos el operador **OR** (`|`):

```{code-cell} python
# Se agrega .head() a los fines de acortar la salida
df_quakes[(df_quakes['mag'] > 7) | (df_quakes['tsunami'] == 1)].head()
```

En los ejemplos anteriores, combinamos condiciones de igualdad y de comparación numérica. Sin embargo, no estamos limitados a esto: también podemos construir máscaras a partir de métodos que operan sobre el contenido de una columna. Como ejemplo, seleccionemos todos los sismos ocurridos en Alaska que no tengan un valor faltante en la columna `alert`. ¿Cómo podríamos lograr esto?

Los objetos `Series` tienen métodos especiales para trabajar con cadenas de texto, accesibles a través del accesor `str`. Usando esto, podemos crear una máscara booleana de todas las filas donde la columna `place` contiene la palabra `Alaska`:

```{code-cell} python
df_quakes['place'].str.contains('Alaska')
```

Por otro lado, para identificar todas las filas en las que hay datos en la columna `alert`, podemos usar el método `notnull()` (que funciona tanto para objetos `Series` como para `DataFrame`) para crear una máscara booleana:

```{code-cell} python
df_quakes['alert'].notnull()
```

Finalmente, combinamos ambas condiciones con el operador **AND** (`&`) para completar la máscara:

```{code-cell} python
# Se agrega .head() a los fines de acortar la salida
df_quakes[(df_quakes['place'].str.contains('Alaska')) & (df_quakes['alert'].notnull())].head()
```

```{admonition} MANOS A LA OBRA N° 1
:class: manos-a-la-obra

Considerando el archivo `earthquakes.csv`:

1. Seleccionar del dataset todos los terremotos ocurridos en California con una magnitud de al menos 3.8. Tener en cuenta que el lugar puede estar escrito como `CA` o `California`.

2. Seleccionar todos los terremotos con magnitudes comprendidas entre 6.5 y 7.5 (inclusive).

3. Seleccionar los sismos que fueron evaluados por el sistema PAGER (es decir, que tengan algún valor esperado en la columna `alert`), pero cuya alerta **no haya sido `'red'`**.
```

El método `isin()` permite construir una máscara booleana que identifica los valores que coinciden con alguno de los elementos de una lista dada. Esto evita tener que escribir una condición separada para cada valor posible y unirlas con el operador `|`. Por ejemplo, filtremos los terremotos cuya magnitud fue medida utilizando el método `mw` o `mwb`:

```{code-cell} python
df_quakes.loc[df_quakes['magType'].isin(['mw', 'mwb']), ['mag', 'title']]
```

#### Obtención de índices con valores extremos

En muchas ocasiones, no alcanza con conocer el valor máximo o mínimo de una columna: también queremos acceder a la fila completa a la que pertenece ese valor. Para esto, pandas ofrece los métodos **`idxmin()`** e **`idxmax()`**, que devuelven la etiqueta del índice donde se encuentra, respectivamente, el valor mínimo o máximo de una `Series`.

La columna `sig` mide la significancia de un sismo, en una escala calculada por USGS que combina la magnitud con otros factores del evento. Busquemos el índice de los sismos de menor y mayor significancia:

```{code-cell} python
df_quakes['sig'].idxmin(), df_quakes['sig'].idxmax()
```

Una vez que contamos con estos índices, podemos combinarlos con `.loc[]` para obtener las filas completas correspondientes:

```{code-cell} python
df_quakes.loc[[df_quakes['sig'].idxmin(), df_quakes['sig'].idxmax()]]
```

Notar que, al pasarle a `.loc[]` una lista de índices (en lugar de un único valor), el resultado es un `DataFrame` con ambas filas, en vez de una `Series` con una sola.

```{admonition} ¿Y la magnitud máxima?
:class: note

Sería natural preguntarse, con esta misma técnica, cuál es el sismo de mayor magnitud registrado en `df_quakes`. Vamos a responder esa pregunta en la sección de Validación de datos, más adelante en esta unidad — porque, como vamos a ver, la columna `mag` esconde algo que conviene detectar y corregir antes de confiar en su valor máximo.
```

### Conversión de tipos de datos

En muchos casos, al leer un conjunto de datos, el tipo asignado automáticamente por `pandas` a una columna no coincide con el tipo deseado. Algunos ejemplos de estas situaciones son los siguientes:

- Números almacenados como texto.

- Variables categóricas representadas como números.

- Columnas que deberían ser booleanas.

Para convertir explícitamente el tipo de una columna se utiliza el método **`astype()`**.

#### Conversión de una columna

La columna `tsunami` de nuestro dataset de terremotos indica, con `1` o `0`, si el sismo estuvo asociado a un tsunami. Es decir, conceptualmente es una variable booleana, aunque se lee como entero, como se muestra a continuación:

```{code-cell} python
df_quakes['tsunami'].dtype
```

La convertimos con `astype()`:

```{code-cell} python
:tags: ["skip-execution"]

df_quakes['tsunami'] = df_quakes['tsunami'].astype('bool')
```

El mismo método sirve para convertir a cualquier otro tipo, como por ejemplo `float`, `object` o `category`.

#### Conversión de varias columnas a la vez

Se puede pasar un diccionario indicando el tipo deseado para cada columna. Convirtamos `tsunami` a `bool`, tal como hicimos recién, y de paso `magType` a `category` (ya que es una columna de texto con un conjunto acotado de valores que se repiten):

```{code-cell} python
:tags: ["skip-execution"]

df_quakes = df_quakes.astype({
    'tsunami': 'bool',
    'magType': 'category'
})
```

#### Errores frecuentes en la conversión

Definir el tipo de dato de una columna suele ser una tarea intuitiva y, en muchos casos, pandas realiza una inferencia adecuada de forma automática. Sin embargo, en la práctica aparecen situaciones en las que una elección incorrecta del tipo de dato puede conducir a errores o a la pérdida de información.

Algunos problemas habituales son los siguientes:

- **Pérdida de información al leer identificadores numéricos como enteros.** En muchos conjuntos de datos existen columnas que representan identificadores o códigos y no cantidades. Por ejemplo, una columna de seis dígitos que codifica una localización con la estructura ***ccdddd***, donde los primeros dos dígitos representan la ciudad y los últimos cuatro el distrito. Si el código de ciudad puede comenzar con 0 y la columna se lee como `int`, ese cero inicial se pierde: el valor `013349` pasaría a leerse como `13349`, y al recuperar la ciudad extrayendo los dos primeros dígitos se obtendría `13` en lugar de `01`. En estos casos, el tipo de dato adecuado es `str`, ya que el valor debe interpretarse como un código y no como un número. La columna `code` de nuestro dataset de terremotos es un ejemplo de esto ya resuelto correctamente: al combinar letras y números (por ejemplo, `ci37389218`), pandas la infiere directamente como texto, sin que perdamos ningún dígito.

- **Conversión a texto en presencia de valores faltantes.** Intentar convertir una columna completa a `str` cuando contiene valores faltantes puede generar comportamientos no deseados. Los valores nulos (`NaN`) pueden coexistir naturalmente con datos numéricos, pero no con cadenas de texto estándar. Una estrategia recomendada es tratar primero los valores faltantes (imputándolos o eliminándolos, algo que abordamos en la sección de Data Wrangling) y luego realizar la conversión al tipo `str`. La columna `alert` de nuestro dataset, con una gran cantidad de valores faltantes, es un buen candidato para tener esta precaución en cuenta.

- **Valores incompatibles con el tipo de dato al que se quiere convertir.** Si una columna contiene valores incompatibles con el tipo solicitado, el método `astype()` produce un error. Por ejemplo, si se intenta convertir una columna con valores faltantes a un tipo entero (`int`), la conversión falla, ya que los enteros estándar no admiten `NaN`. Por este motivo, suele ser necesario limpiar o tratar los datos faltantes antes de realizar la conversión de tipos.

#### Conversión segura con `to_numeric()`

En situaciones donde una columna contiene números almacenados como texto, junto con algunos valores que no pueden interpretarse como número, puede utilizarse la función `to_numeric()`. Por ejemplo:

```{code-cell} python
valores = pd.Series(['1.4', '2.1', 'ml', '3.0'])

pd.to_numeric(valores, errors = 'coerce')
```

Con `errors = 'coerce'`, los valores que sí pueden interpretarse como número se convierten correctamente, y los que no (como `'ml'`, en este ejemplo) se reemplazan por `NaN`, en lugar de que la conversión falle por completo. Luego, si es necesario, se puede aplicar `astype()` sobre el resultado.

### Escritura de datos tabulares en archivos

Desde Python es posible escribir datos tabulares en distintos formatos de archivo. Entre los más utilizados se encuentran CSV y Parquet, cada uno con objetivos y características diferentes.

En la práctica, la escritura de datos suele realizarse a partir de estructuras como listas, diccionarios o —muy especialmente— objetos ``pandas`.DataFrame`.

#### Escritura de datos en formato CSV

El formato CSV es uno de los más simples y extendidos para almacenar datos tabulares. Como se mencionó anteriormente, se trata de archivos de texto plano, fácilmente legibles por humanos y compatibles con una gran variedad de programas (Excel, LibreOffice, R, Python, etc.).

**Opción 1: Usando la librería estándar `csv`**

Python incluye el módulo `csv`, que permite escribir archivos CSV sin depender de librerías externas.

```{code-cell} python
:tags: ["skip-execution"]

import csv

# Datos a escribir en el archivo CSV
datos = [
    ['nombre', 'edad', 'ocupacion'],  # Encabezados (no todos los CSV los incluyen)
    ['Juan', 25, 'estudiante'],
    ['Ana', 30, 'ingeniera'],
    ['Agustina', 48, 'psicologa'],
    ['Pedro', 74, 'jubilado']
]

# Escritura del archivo CSV
with open('personas.csv', mode = 'w') as archivo:
    # En Windows es recomendable especificar lineterminator = '\n'
    writer = csv.writer(archivo, lineterminator = '\n')
    for fila in datos:
        writer.writerow(fila)
```

En este ejemplo, los datos se organizan como una lista de listas, donde cada sublista representa una fila de la tabla. El objeto `csv.writer` se encarga de transformar esa estructura en el formato CSV correspondiente.

👉 Esta forma es útil para entender cómo funciona el formato CSV “desde abajo”, pero **no es la más habitual cuando se trabaja con datos en análisis de datos.**

**Opción 2: usando `pandas` (mucho más habitual)**

En contextos de análisis de datos, la forma más común y conveniente de escribir un CSV es a partir de un `DataFrame`.

```{code-cell} python
:tags: ["skip-execution"]

import pandas as pd

datos = [
    ['Juan', 25, 'estudiante'],
    ['Ana', 30, 'ingeniera'],
    ['Agustina', 48, 'psicologa'],
    ['Pedro', 74, 'jubilado']
]

df = pd.DataFrame(
    datos,
    columns = ['nombre', 'edad', 'ocupacion']
)

df.to_csv('personas.csv', index = False)

print(pd.read_csv('personas.csv'))
```

Aquí:

- Los datos se almacenan directamente en un `DataFrame`.

- El método **`to_csv()`** se encarga de la escritura.

- El argumento `index = False` evita que se guarde el índice del DataFrame como una columna adicional.

👉 Esta es la forma recomendada cuando los datos ya están en `pandas`, ya que es más clara, menos propensa a errores y fácilmente extensible.

#### Escritura de datos en formato Parquet

Como se mencionó previamente, el formato Parquet es un formato binario, columnar y comprimido, muy utilizado en entornos de *Big Data* y análisis de grandes volúmenes de información. Para trabajar con Parquet en Python, suele utilizarse la librería `pyarrow` junto con `pandas`.

```{code-cell} python
:tags: ["skip-execution"]

import pandas as pd
import pyarrow as pa
import pyarrow.parquet as pq

# Creamos un DataFrame de `pandas`
datos = pd.DataFrame({
    'nombre': ['Juan', 'Ana', 'Agustina', 'Pedro'],
    'edad': [25, 30, 48, 74],
    'ocupacion': ['estudiante', 'ingeniera', 'psicologa', 'jubilado']
})

# Convertimos el DataFrame en una tabla de PyArrow
tabla = pa.Table.from_pandas(datos)

# Escribimos el archivo Parquet
pq.write_table(tabla, 'personas.parquet')
```

En este ejemplo, los datos se crean como un `DataFrame` de `pandas` y posteriormente se convierten a un objeto `pa.Table`, que es la estructura interna que utiliza `pyarrow`. Finalmente, se escriben en un archivo Parquet con `write_table()`. El archivo resultante puede ser leído por cualquier herramienta que soporte el formato Parquet, incluyendo `pandas`, Spark y otros motores de procesamiento de datos.

## Manejo de fechas

El módulo `datetime` de Python provee clases para representar y manipular fechas y horas ((puede consultarse la documentación correspondiente en el siguiente [link](https://docs.python.org/3/library/datetime.html). Los objetos de fecha y hora pueden clasificarse en ***naive*** o ***aware***, dependiendo de si incluyen o no información sobre el huso horario.

### Fechas y horas *naive*

Un objeto de fecha y hora de tipo *naive* no contiene información sobre la zona horaria. Representa una fecha y una hora determinadas, pero no queda especificado a qué huso horario se refiere. Este tipo de objetos es frecuente cuando se trabaja con datos simples o cuando la información proviene de archivos de texto, como archivos CSV. Sin embargo, puede generar ambigüedades en contextos internacionales.

Por ejemplo, podemos representar la fecha y la hora de uno de los partidos más recordados del Mundial 2026: la semifinal entre Argentina e Inglaterra, jugada en el Atlanta Stadium, donde Argentina remontó un 0-1 en contra para ganar 2-1 y clasificarse a la final, sin indicar el huso horario:

```{code-cell} python

from datetime import datetime

partido_naive = datetime(2026, 7, 15, 15, 0, 0)
print(partido_naive)
```

Este valor indica simplemente "el 15 de julio de 2026 a las 15:00", pero no especifica en qué huso horario. Sin esa información, no queda claro si se trata de la hora de Atlanta, de Argentina o de algún otro lugar, y el instante exacto del evento queda ambiguo.

### Fechas y horas *aware*

Un objeto de tipo *aware* contiene información explícita sobre la zona horaria, lo que permite representar un instante específico en el tiempo de forma inequívoca. Para trabajar con este tipo de objetos es habitual utilizar la librería `pytz`, que provee una base completa de husos horarios.

El partido se jugó en el Atlanta Stadium, en Georgia, Estados Unidos, y comenzó a las 15:00, hora local de esa ciudad. Podemos representar correctamente ese instante incluyendo el huso horario correspondiente a la sede del partido:

```{code-cell} python

from datetime import datetime
import pytz

zona_atlanta = pytz.timezone('America/New_York')

partido_aware = zona_atlanta.localize(datetime(2026, 7, 15, 15, 0, 0))

print(partido_aware)
```

Una vez que el datetime es *aware*, es posible convertirlo a cualquier otra zona horaria sin ambigüedad, utilizando el método `astimezone()`. Por ejemplo, podemos saber a qué hora comenzó el partido en Argentina:

```{code-cell} python

zona_arg = pytz.timezone('America/Argentina/Buenos_Aires')

partido_argentina = partido_aware.astimezone(zona_arg)

print(partido_argentina)
```

Esta es precisamente la ventaja de trabajar con datetimes *aware*: al tener información explícita sobre la zona horaria de origen, es posible convertir el instante a la hora local de cualquier otra región del mundo de manera directa y sin errores. Con un objeto *naive* esta conversión no sería posible, porque no habría forma de saber a partir de qué huso horario convertir.

Es evidente que este tipo de representación es especialmente importante en eventos internacionales, ya que un mismo evento ocurre en un único momento real, pero se manifiesta a distintas horas locales según la ubicación geográfica.

```{admonition} Una alternativa a pytz
:class: note

Desde la versión 3.9 de Python, la librería estándar incluye el módulo `zoneinfo`, que también permite trabajar con husos horarios sin necesidad de instalar una librería externa. `pytz` sigue siendo ampliamente utilizado y es perfectamente válido, pero vale la pena mencionar que `zoneinfo` es una alternativa moderna e integrada al lenguaje.
```

### Manejo de fechas en pandas

Cuando los datos se leen desde archivos como `.csv`, no se conserva información sobre los tipos de datos de cada columna. Si una columna contiene fechas, `pandas` no siempre las reconoce automáticamente como tales.

Retomando nuestro dataset de terremotos, la columna `time` indica el momento en que ocurrió cada sismo. Sin embargo, si inspeccionamos su tipo de dato:

````{code-cell} python
df_quakes['time'].dtype
````

Vemos que `pandas` la interpretó como `int64`, no como una fecha. Esto se debe a que el USGS no almacena esta columna como texto, sino como la cantidad de milisegundos transcurridos desde el 1 de enero de 1970, una forma de representar fechas muy habitual en APIs y sistemas informáticos.

Para convertir una columna al tipo fecha se utiliza la función **`pd.to_datetime()`**. Sin embargo, en este caso no alcanza con aplicarla directamente:

````{code-cell} python
pd.to_datetime(df_quakes['time']).head(3)
````

El resultado anterior no tiene sentido: todas las fechas caen en enero de 1970. Esto pasa porque, al recibir una columna numérica, `pd.to_datetime()` asume por defecto que esos números representan **nanosegundos** desde el 1 de enero de 1970. Sin embargo, en nuestro caso representan **milisegundos**. Como la conversión no falla ni genera ningún error, es un problema fácil de pasar por alto si no se revisa el resultado con cuidado.

La solución es indicar explícitamente la unidad correcta mediante el argumento `unit`:

````{code-cell} python
df_quakes['time'] = pd.to_datetime(df_quakes['time'], unit = 'ms')

df_quakes['time'].head(3)
````

Como resultado, la columna se transforma al tipo de dato especial de `pandas` llamado `datetime64`, que permite realizar operaciones temporales de manera eficiente.

En este punto, podemos retomar la distinción entre los tipos de fechas que presentamos al inicio de esta sección. Y es que, al hacer la transformación a `datetime64` que realizamos, obtuvimos un datetime de tipo *naive*. Dado que los datos con los que contamos están expresados en UTC, si quisiéramos conservar esa información explícitamente podemos agregar el argumento `utc = True`:

```python
pd.to_datetime(df_quakes['time'], unit = 'ms', utc = True)
```

#### Sobre `datetime64`

`datetime64` es un tipo de dato numérico que se representa internamente como un entero, donde cada valor corresponde a la cantidad de unidades de tiempo transcurridas desde una fecha de referencia conocida como *epoch* y que es el 1 de enero de 1970 que mencionamos recién.

La precisión puede ajustarse según la unidad de tiempo utilizada, por ejemplo:

`datetime64[s]`: precisión en segundos

`datetime64[ms]`: precisión en milisegundos

`datetime64[us]`: precisión en microsegundos

De hecho, como convertimos `time` indicando `unit = 'ms'`, `pandas` conservó esa misma precisión: el resultado quedó directamente en `datetime64[ms]`, sin necesidad de especificarlo por separado.

Este tipo de dato está optimizado para trabajar con grandes volúmenes de datos y permite realizar operaciones vectorizadas, como ordenar fechas, calcular diferencias temporales o extraer componentes como año, mes o día. Mencionaremos algunas de ellas a continuación.

### Operaciones frecuentes con fechas en pandas

Una vez que una columna fue convertida al tipo `datetime64`, `pandas` permite realizar de forma sencilla distintas operaciones temporales. Estas operaciones son muy habituales en el análisis de datos y justifican la importancia de convertir correctamente las fechas.

#### Extracción de componentes temporales

Es posible extraer fácilmente partes de la fecha, como el año, el mes o el día, utilizando el accesor `.dt`:

````{code-cell} python
df_quakes['time'].dt.year
````

````{code-cell} python
df_quakes['time'].dt.month
````

````{code-cell} python
df_quakes['time'].dt.day
````

`year`, `month` y `day` son **atributos** del accesor `.dt`. Devuelven directamente un valor ya calculado, en vez de ejecutar una operación. Esto resulta útil, por ejemplo, para agrupar observaciones por año o mes y analizar comportamientos estacionales. Como nuestro dataset abarca aproximadamente un año completo, esta información permite reconocer que los sismos registrados se distribuyen a lo largo de dos años calendario distintos.

#### Diferencias entre fechas

También es posible calcular diferencias entre fechas. Por ejemplo, podemos saber cuánto tiempo transcurrió entre el sismo más antiguo y el más reciente registrado en nuestro dataset:

````{code-cell} python
diferencia = df_quakes['time'].max() - df_quakes['time'].min()

diferencia
````

El resultado es un objeto de tipo `timedelta`, que representa la cantidad de tiempo transcurrida entre ambos instantes. A partir de este objeto es posible obtener, por ejemplo, el número de días:

````{code-cell} python
diferencia.days
````

#### Ordenamiento temporal

Al tratarse de un tipo de dato específico, las fechas pueden ordenarse cronológicamente sin necesidad de conversiones adicionales. Por ejemplo, para ver los sismos más recientes primero recurrimos al método `sort_values()`, seteando apropiadamente el parámetro `ascending = False`:

````{code-cell} python
df_quakes.sort_values('time', ascending = False)[['time', 'place', 'mag']]
````

Para concluir esta sección, es oportuno mencionar que el manejo adecuado de fechas es fundamental en muchos problemas reales, como el análisis de series temporales, el estudio de eventos en el tiempo o la comparación entre períodos. 


```{figure} imagenes/date.png
---
width: 70%
align: center
---
```

```{admonition} MANOS A LA OBRA N° 2
:class: manos-a-la-obra

Considerando el archivo `earthquakes.csv`, con la columna `time` ya convertida al tipo de dato correspondiente, como se realizó en esta sección:

1. Generar una nueva columna llamada `nombre_mes`, que contenga el nombre del mes en español en el que tuvo lugar cada sismo. *Pista: `pandas` no tiene una forma automática de traducir nombres de meses al español. Una opción es construir un diccionario con la equivalencia numérica de cada mes (por ejemplo, `{1: 'enero', 2: 'febrero', ...}`) y aplicarlo sobre la columna con el método `map()`, que reemplaza cada valor de una `Series` según el diccionario provisto. Vamos a volver a usar este mismo método más adelante, en la sección de Validación de datos.*

2. Utilizando la columna `nombre_mes` recién creada, ¿cuál fue el mes con mayor cantidad de sismos registrados?

3. Obtener la hora del día (0 a 23) en la que ocurrió cada sismo y generar una nueva columna que contenga dicha información. ¿Existe alguna hora en la que se hayan registrado notablemente más sismos que en las demás? 

4. Extraer únicamente los sismos ocurridos durante el último mes registrado en el dataset, es decir, entre la fecha máxima de `time` y esa misma fecha menos 30 días. ¿Cuántos sismos cumplen esa condición?
```

## Manipulación de datos

El *Data Wrangling*, por su nombre en inglés, es el proceso de limpiar, transformar y reorganizar los datos para dejarlos en un formato adecuado para su posterior análisis. En la práctica, los datos rara vez vienen listos para ser utilizados: suelen contener inconsistencias, valores faltantes o estructuras poco convenientes.

```{figure} imagenes/dataset_wild.png
---
align: center
---
Cualquier semejanza con la realidad es pura coincidencia...
```

Antes de ver técnicas puntuales, vale la pena repasar por qué motivos los datos suelen llegar en mal estado. Algunas de las causas más frecuentes son:

- **Errores humanos.** Alguien tipea mal un valor (por ejemplo, escribe `1000` como `100`), o una misma categoría queda registrada de formas distintas según quién haya cargado el dato (`Rosario`, `ROSARIO`, `rosario`).

- **Errores del sistema.** Fallas técnicas que interrumpen el registro de información durante un período, generando datos faltantes que no tienen que ver con el fenómeno en sí, sino con un problema de captura.

- **Valores inesperados.** Por ejemplo, si alguien decide representar un dato faltante con un signo de interrogación dentro de una columna numérica, `pandas` va a interpretar toda la columna como texto (`object`) en lugar de como un tipo numérico, aunque casi todos los valores sean números.

- **Información incompleta.** Es el caso típico de una encuesta con preguntas opcionales: no todas las personas las responden, y eso genera valores faltantes que no se deben a ningún error, sino a que la información directamente no existe.

- **Resolución inadecuada.** Los datos pueden estar disponibles con una granularidad distinta a la que necesitamos para el análisis (por ejemplo, se registraron por día, pero el análisis requiere una resolución horaria).

- **Relevancia de las variables.** Muchas veces los datos se generan como subproducto de otro proceso (un sistema de ventas, una *app*, un sensor) y no fueron pensados específicamente para el análisis que queremos hacer. Antes de poder usarlos, hay que adaptarlos a ese propósito.

- **Formato inadecuado.** La estructura en la que llegan los datos (por ejemplo, en formato ancho cuando se necesita en formato largo, como vamos a ver a continuación) puede no ser la más conveniente para el análisis, y es necesario reorganizarla.

- **Errores de configuración en el registro.** Cuando los datos provienen de fuentes automáticas (sensores, formularios web, integraciones entre sistemas), una mala configuración puede hacer que falten campos o que lleguen en un orden distinto al esperado.

No todos estos problemas tienen solución: por ejemplo, si los datos se registraron a diario y el análisis requiere resolución horaria, esa información simplemente no está disponible y no hay forma de reconstruirla. Sin embargo, la mayoría de los problemas de calidad de datos sí pueden abordarse, y es responsabilidad de quien analiza los datos identificarlos y tratarlos adecuadamente antes de sacar conclusiones. El resto de esta sección presenta algunas de las herramientas más importantes de `pandas` para esa tarea.

### Datos en forma larga o ancha

Reformar un `DataFrame` de `pandas` es una de las tareas de manipulación de datos más comunes en el mundo del análisis de datos y consiste en su transformación desde un **formato ancho** (*wide*) a uno **largo** (*long*), o viceversa. A continuación, abordaremos esta operación trabajando con un ejemplo concreto.

Supongamos una encuesta de movilidad urbana en la que a cada persona se le pregunta cuánto tiempo tarda en ir de su casa al trabajo utilizando distintos medios de transporte: auto, moto, colectivo y bicicleta. Además, se registra cuál es el modo de transporte que la persona utiliza habitualmente.

**Formato ancho**

En el formato ancho, cada fila corresponde a una persona y cada variable ocupa su propia columna. En este caso, el identificador `persona_id` no se repite. Este formato suele ser cómodo para la carga de datos o para su inspección inicial.

| **persona_id** | **tiempo_viaje_auto** | **tiempo_viaje_moto** | **tiempo_viaje_bus** | **tiempo_viaje_bici** | **modo_elegido** |
| --- | --- | --- | --- | --- | --- |
| 1 | 29 | 25 | 39 | 24 | moto |
| 2 | 29 | 29 | 60 | 18 | bici |

\

**Formato largo**

En el formato largo, cada fila representa una observación individual. En este ejemplo, eso implica una fila por persona y por modo de transporte. Por este motivo, el identificador `persona_id` aparece repetido y deja de ser suficiente por sí solo para identificar un registro.

| **persona_id** | **modo** | **tiempo_viaje** | **modo_elegido**
| --- | --- | --- | --- |
| 1 | auto | 29 | moto |
| 1 | moto | 25 | moto |
| 1 | bus | 39 | moto |
| 1 | bici | 24 | moto |
| 2 | auto | 29 | bici |
| 2 | moto | 29 | bici |
| 2 | bus | 60 | bici |
| 2 | bici | 18 | bici |


Este formato es especialmente útil para realizar agrupamientos, generar visualizaciones y ajustar modelos estadísticos o de *machine learning*.

#### De formato ancho a formato largo

Para pasar de formato ancho a formato largo en `pandas` se utiliza la función **`pd.melt()`**, que permite agrupar varias columnas en una sola, generando un `DataFrame` con mayor cantidad de filas.

A continuación, generamos un conjunto de datos sintético que representa la encuesta de movilidad en formato ancho:

```{code-cell} python

import pandas as pd
import random

modos = ['auto', 'moto', 'bus', 'bici']

# Seteamos una semilla y generamos datos de ejemplo en formato ancho
random.seed(2020)

data = pd.DataFrame({
'persona_id': range(1,101),
'tiempo_viaje_auto': [random.randint(10, 30) for _ in range(100)],
'tiempo_viaje_moto': [random.randint(10, 30) for _ in range(100)],
'tiempo_viaje_bus': [random.randint(10, 60) for _ in range(100)],
'tiempo_viaje_bici': [random.randint(10, 70) for _ in range(100)],
'modo_elegido': [random.choice(modos) for _ in range(100)]
})

# Extraemos las primeras filas del dataset generado
data.head()
```

Transformamos ahora el `DataFrame` al formato largo:

```{code-cell} python

# Pasamos de formato ancho a formato largo
df_largo = pd.melt(data, id_vars = ['persona_id', 'modo_elegido'],
value_vars = ['tiempo_viaje_auto', 'tiempo_viaje_moto', 'tiempo_viaje_bus', 'tiempo_viaje_bici'], var_name = 'modo', value_name = 'tiempo_viaje')

# Limpiamos el nombre del modo de transporte utilizando el método replace
df_largo['modo'] = df_largo['modo'].str.replace('tiempo_viaje_', '')

print(df_largo)
```

**Sobre los parámetros de `pd.melt()`:**

- `data` es el DataFrame original,

- con `id_vars = ['persona_id', 'modo_elegido']` indicamos qué variables deben permanecer fijas y repetirse en cada nueva fila (identificando a cada persona y su modo efectivamente elegido),

- `value_vars` especifica las columnas que se van a transponer, es decir, aquellas que contienen los tiempos de viaje para cada alternativa (auto, moto, bus y bici), 

- el argumento `var_name = 'modo'` define el nombre de la nueva columna que almacenará los nombres originales de esas variables,

- `value_name = 'tiempo_viaje'` establece el nombre de la columna que contendrá los valores numéricos correspondientes. 

Si exploramos la estructura del `DataFrame` resultante utilizando el método `info()` presentado anteriormente, nos encontramos con la siguiente salida:

```{code-cell} python

df_largo.info()
```

```{dropdown} Para pensar…
:class: seealso

🤔 ¿Por qué el DataFrame en formato largo contiene 400 filas si contamos con la información de sólo 100 personas?
```

#### De formato largo a formato ancho

En algunas situaciones, el formato largo no resulta el más conveniente. Al momento de comparar los tiempos de viaje entre distintos modos para cada persona, calcular diferencias entre ellos, o construir tablas resumen donde cada modo de transporte aparezca como una columna, resulta más conveniente trabajar con los datos en formato ancho.

En `pandas`, esta transformación puede realizarse mediante el método **`pivot()`**, que reorganiza un `DataFrame` a partir de tres componentes clave:

- un índice, que identifica las filas,

- una columna, cuyos valores pasan a convertirse en nombres de columnas,

- y una variable de valores, que completa la tabla resultante.

Continuando con el ejemplo anterior, partimos del `DataFrame` `df_largo`, que se encuentra en formato largo y contiene una fila por persona y por modo de transporte.

```{code-cell} python

# Pasamos de formato largo a formato ancho utilizando pivot
df_ancho = df_largo.pivot(index = ['persona_id', 'modo_elegido'],
    columns='modo', values='tiempo_viaje')

print(df_ancho)
```
Como resultado, obtenemos un `DataFrame` en el que cada fila corresponde a una persona y cada columna representa el tiempo de viaje asociado a un modo de transporte.

````{admonition} **Punto importante**
:class: important

Notar que el `DataFrame` generado presenta un **índice multinivel**, ya que cada observación está identificada simultáneamente por `persona_id` y por `modo_elegido`. Este tipo de índice surge de manera natural cuando se combinan múltiples variables para identificar las filas.

En muchos casos, puede resultar más cómodo trabajar con un índice simple. Para ello, podemos restablecer el índice y volver a convertir estas variables en columnas explícitas con el método `reset_index()`:

```python
df_ancho = df_ancho.reset_index()

print(df_ancho.head())

modo  persona_id modo_elegido  auto  bici  bus  moto
0              1         moto    29    24   39    25
1              2         bici    29    18   60    29
2              3         auto    15    47   33    30
3              4         auto    24    26   45    29
4              5         moto    24    48   23    29
```

La palabra `modo` que aparece arriba de la fila de encabezados no es una columna: es el nombre que `pandas` le asigna al índice de columnas, heredado del parámetro `columns = 'modo'` que usamos en el `pivot()`.
````

**¿Por qué volver al formato ancho?**

Una ventaja clara del formato ancho es que facilita la comparación directa entre modos de transporte. Por ejemplo, podemos calcular la diferencia entre el tiempo de viaje en auto y en colectivo para cada persona de manera inmediata:

```{code-cell} python
:tags: ["skip-execution"]

df_ancho['diferencia_auto_bus'] = df_ancho['auto'] - df_ancho['bus']
```

Este tipo de operaciones resulta mucho más simple cuando cada modo de transporte se encuentra en su propia columna.

### Validación de datos

Una pregunta que es importante hacerse en las primeras instancias de trabajo con un conjunto de datos es: **¿los valores que tenemos son plausibles?** Un dataset puede tener los tipos de datos correctos y ninguna columna problemática a simple vista, y aun así contener errores: un valor numérico fuera de todo rango físicamente posible, o una misma categoría registrada en más de una forma distinta. Resulta importante dedicar algo de tiempo a **verificar que nuestros datos efectivamente cumplen con lo que se espera de ellos**.

A este proceso se lo conoce como **validación de datos**, y consiste en aplicar un conjunto de reglas o chequeos que permiten detectar inconsistencias antes de que afecten un análisis posterior.

Para esta sección retomamos el dataset de terremotos utilizado anteriormente.

#### Validación de atributos numéricos

Para validar una variable cuantitativa, resulta útil preguntarse cuál es el rango de valores físicamente posibles, y compararlo contra lo que efectivamente aparece en los datos. La escala de magnitud sismológica que utiliza este dataset es la escala Richter. De acuerdo a los [registros](https://www.usgs.gov/media/images/10-largest-earthquakes-ever-recorded), el terremoto más fuerte registrado fue en 1960 en Chile, con una magnitud de 9.5. Teniendo en cuenta esta información, analicemos qué ocurre con los registros en el dataset.

Con el método `describe()`, que retomaremos en la unidad siguiente, podemos ver si el rango de valores registrados en el dataset para la magnitud tiene sentido:

```{code-cell} python
df_quakes['mag'].describe()
```

Vemos que el valor máximo es de 75.0, lo que no tiene sentido. Realizamos un filtrado para identificar registros sísmicos en los que la magnitud supera el máximo histórico conocido:

```{code-cell} python
df_quakes[df_quakes['mag'] > 9.5]
```

Se trata del par de terremotos ocurridos en Venezuela, en junio del 2026. Según la información oficial de ambos eventos ([acá uno](https://earthquake.usgs.gov/earthquakes/eventpage/us6000t7zp/executive) y [acá el otro](https://earthquake.usgs.gov/earthquakes/eventpage/us6000t7zc)), los mismos tuvieron una magnitud real de 7.2 y 7.5, por lo que todo indica que, en algún punto de la carga de estos datos, se perdió el separador decimal. Corregimos dichos valores utilizando `.loc[]`:

```{code-cell} python
df_quakes_val = df_quakes.copy()
df_quakes_val.loc[df_quakes_val['mag'] > 9.5, 'mag'] = [7.5, 7.2]
```

Teniendo en cuenta los índices correspondientes a dichos registros, podemos chequear que la modificación se haya realizado de manera correcta:

```{code-cell} python
df_quakes_val.loc[[910,911], 'mag']
```

````{admonition} **Punto importante**
:class: important

Hay un punto importante a remarcar aquí y es que, en el ejemplo anterior, pudimos corregir las magnitudes **porque conocíamos su valor real, publicado por el USGS y documentado en múltiples fuentes**. Esto no siempre es posible: cuando detectamos un valor imposible pero no tenemos forma de saber cuál era el correcto, **la práctica habitual (y más segura) es reemplazarlo por `NaN`**, es decir, tratarlo explícitamente como un dato faltante en lugar de conservar un número que sabemos que es falso.

``` python
df_quakes.loc[df_quakes['mag'] > 9.5, 'mag'] = np.nan
```

Esto tiene una consecuencia importante: la validación no sólo detecta errores, sino que muchas veces **genera nuevos valores faltantes que se suman a los que ya pudieran estar presentes en el dataset**. El tratamiento de esos faltantes es, entonces, el paso que sigue naturalmente, y es un tema que abordaremos en la próxima sección, luego de presentar algunas ideas acerca de la validación de atributos categóricos.
```` 

#### Validación de atributos categóricos

La columna `alert` indica el nivel de alerta asociado a un sismo, y en este dataset debería tomar únicamente los valores `'green'`, `'yellow'`, `'orange'` o `'red'`, o quedar vacía (`NaN`) cuando no se asignó ninguna alerta. Inspeccionemos qué valores aparecen realmente:

```{code-cell} python
df_quakes_val['alert'].value_counts(dropna = False)
```

Aparecen dos problemas distintos: algunas filas tienen `'GREEN'` en mayúscula y otras tienen `'YelloW'`, con mayúsculas al inicio y al final de la cadena. Deberemos resolver estos inconvenientes, ya que de lo contrario se considerarán como categorías separadas de `'green'` y `'yellow'`.

Cuando, como en este caso, el problema es únicamente de mayúsculas, podemos estandarizar todo el texto con `str.lower()`:

```{code-cell} python
df_quakes_val['alert'] = df_quakes_val['alert'].str.lower()

df_quakes_val['alert'].value_counts(dropna = False)
```

En otras ocasiones, podemos encontrarnos con categorías escritas de otra forma, aunque se trate del mismo nivel. Esto podría ocurrir ya sea por un error de tipeo o por usar directamente una palabra distinta para referirse al mismo nivel de la variable. Por ejemplo, podríamos tener algún registro de `alert` que figure erróneamente como `'greeen'`. En este caso, el problema no es de mayúsculas, así que `str.lower()` no soluciona nada, y hace falta `replace()`:

```{code-cell} python
:tags: ["skip-execution"]

df_quakes_val['alert'] = df_quakes_val['alert'].replace({'greeen': 'green'})
```

#### Validar con `assert`

Además de inspeccionar visualmente las filas problemáticas, es habitual utilizar la sentencia `assert` de Python para que el propio código interrumpa su ejecución si una condición de validación no se cumple. Esto es particularmente útil en scripts o notebooks que se ejecutan de forma repetida, ya que evita que un análisis continúe corriendo sobre datos inválidos sin que nadie lo note.

Ejemplifiquemos su uso con la columna `mag` de `df_quakes` (recordar que las modificaciones las hicimos sobre una copia del mismo, y se encuentran guardadas en el objeto `df_quakes_val`):

```python
assert df_quakes['mag'].between(4.5, 9.5).all(), 
'¡CUIDADO! Hay magnitudes fuera de rango en el dataset'
```

```python
---------------------------------------------------------------------------
AssertionError                            Traceback (most recent call last)
Cell In[60], line 1
----> 1 assert df_quakes['mag'].between(4.5, 9.5).all(), "¡CUIDADO! Hay magnitudes fuera de rango en el dataset"

AssertionError: ¡CUIDADO! Hay magnitudes fuera de rango en el dataset
```

El método `all()` devuelve `True` únicamente si **todas** las filas cumplen la condición. Si `assert` recibe un valor `False`, interrumpe la ejecución del programa con un error (`AssertionError`) y muestra el mensaje indicado, lo que facilita identificar rápidamente qué chequeo falló.

#### Más allá de `pandas`

Para proyectos más grandes, donde conviene declarar de forma reutilizable qué reglas debe cumplir un dataset, existen librerías especializadas en validación de datos, como `pandera`. Permiten definir un "esquema" con las reglas esperadas para cada columna y validar un `DataFrame` completo de una sola vez:

```python
import pandera as pa

esquema = pa.DataFrameSchema({
    'mag': pa.Column(float, pa.Check.between(4.5, 9.5)),
    'alert': pa.Column(str, pa.Check.isin(['green', 'yellow', 'orange', 'red']), nullable = True),
})

esquema.validate(df_quakes_val)
```

También existen herramientas orientadas a validar datos dentro de flujos de trabajo más grandes y automatizados, como `Great Expectations`. No forman parte del contenido de este curso, pero vale la pena saber que existen para cuando el volumen o la complejidad de los datos lo justifique.

### Manejo de datos faltantes

```{figure} imagenes/missing_values.png
---
width: 80%
align: center
---
```

En el análisis de datos es muy común encontrarnos con valores faltantes, usualmente representados como `NaN` (*Not a Number*) en `pandas`. La presencia de estos valores puede deberse a múltiples razones: errores en la recolección de datos, problemas en la carga de la base, o simplemente al hecho de que no todas las variables son relevantes o aplicables para todos los registros. Un ejemplo de esto último podría ser el caso de una base de datos compuesta por información recolectada a partir de una encuesta a todas las personas que componen un grupo de hogares. Si en una de las preguntas se indaga a cada persona acerca de la edad a la cual consiguió su primer trabajo, no sería esperable recibir una respuesta en el caso de un niño de 5 años.

```{admonition} Importante
:class: important

Antes de realizar cualquier análisis estadístico o construir modelos, es fundamental identificar y tratar adecuadamente los datos faltantes, ya que su presencia puede afectar resultados, estimaciones y conclusiones.
```

#### Estrategias generales frente a los datos faltantes

A grandes rasgos, existen dos enfoques principales para manejar valores faltantes:

- Eliminar los registros (o columnas) que contienen datos faltantes.

- Imputar los valores faltantes, es decir, reemplazarlos por valores plausibles según algún criterio.

La elección entre una u otra estrategia dependerá del contexto del problema, de la cantidad de datos faltantes y del rol que cumpla la variable en el análisis.

#### Eliminación de registros con datos faltantes

Por defecto, el método `dropna()` elimina cualquier fila del `DataFrame` que contenga al menos un valor faltante.

Consideremos el siguiente `DataFrame` de ejemplo:

```{code-cell} python
import numpy as np

data = pd.DataFrame(
    [[1., 6.5, 3.],
     [1., np.nan, np.nan],
     [np.nan, np.nan, np.nan],
     [np.nan, 6.5, 3.]],
    columns = ['ColA', 'ColB', 'ColC']
)

print(data)
```

Si aplicamos `dropna()` sin especificar particularmente ningún parámetro:

```{code-cell} python

data_dropped = data.dropna()
print(data_dropped)
```

Observamos que sólo se conserva la fila que no contiene ningún valor faltante.

**Eliminación selectiva con `how = 'all'`**

En algunos casos, puede resultar excesivo eliminar registros que tengan sólo uno o dos valores faltantes. Si nuestro interés es eliminar únicamente aquellas filas que estén **completamente compuestas por `NaN`**, podemos usar el argumento `how = 'all'`:

```{code-cell} python

data_dropped_all = data.dropna(how='all')
print(data_dropped_all)
```

En este caso, sólo se elimina la fila cuyo contenido es enteramente faltante.

Si quisiéramos realizar una operación análoga sobre columnas en lugar de filas, podemos incluir el argumento `axis='columns'`.

```{admonition} Comentario importante
:class: warning

Eliminar registros con datos faltantes es una estrategia sencilla y, en muchos casos, válida. Sin embargo, puede implicar la pérdida de información relevante, especialmente si los valores faltantes son frecuentes o no se distribuyen aleatoriamente. Por este motivo, en muchos contextos resulta preferible considerar el uso de alguna estrategia de imputación.
```

#### Imputación de datos faltantes

La imputación consiste en reemplazar los valores faltantes por valores estimados o plausibles, con el objetivo de conservar la mayor cantidad posible de información.

Algunas estrategias comunes de imputación incluyen:

- Reemplazar por una medida resumen (media, mediana o moda)

- Utilizar valores segmentados por grupos (por ejemplo, promedios por categoría)

- Reemplazar por valores aleatorios dentro del rango observado

- Estimar los valores mediante técnicas de interpolación o modelos estadísticos

En este apartado nos enfocaremos en las estrategias más simples y habituales.

**Ejemplo: imputación del precio de viviendas**

Para ilustrar esta sección vamos a trabajar con un dataset de propiedades en la ciudad de Rosario, que puede descargarse [acá](https://raw.githubusercontent.com/tuiafceiaunr/fdcd/main/unidades/u2-manipulacion-datos/datasets/hogares.xlsx) (también listado en la sección de *Datasets utilizados* del `README`). El resumen de la información del `DataFrame` muestra que existen valores faltantes en la variable `precio_usd`:

```{code-cell} python

data_hogares = pd.read_excel('datasets/hogares.xlsx')
data_hogares.info()
```

Haciendo el filtrado correspondiente podemos identificar que son las propiedades sobre las que no se tiene información del precio son aquellas que poseen los ID 11 y 14:

```{code-cell} python

data_hogares.loc[data_hogares['precio_usd'].isna()]
```

##### Imputación mediante fillna()

**Imputación con el promedio general**

Una primera alternativa consiste en reemplazar los valores faltantes por el precio promedio del resto de las propiedades:

```{code-cell} python

# Hacemos una copia del dataset original
data_mean = data_hogares.copy()

# Calculamos el precio promedio de todos los departamentos del dataset
precio_promedio = data_mean['precio_usd'].mean()

# Realizamos la imputación con fillna()
data_mean['precio_usd'] = data_mean['precio_usd'].fillna(precio_promedio)

# Corroboramos la imputacicón
data_mean.iloc[[10, 13]]
```

Esta estrategia es sencilla y rápida, pero ignora posibles diferencias sistemáticas entre barrios, que pueden ser relevantes en este contexto. En este punto, resulta interesante preguntarse, por ejemplo, si tiene sentido haber imputado el mismo valor para dos departamentos que están ubicados en barrios diferentes.

**Imputación con promedio segmentado por barrio**

Una alternativa más informativa consiste en imputar los valores faltantes utilizando el precio promedio dentro de cada barrio.

Primero, calculamos los precios promedio por barrio:

```{code-cell} python

data_hogares.groupby('barrio')['precio_usd'].mean()
```

Luego, utilizamos `groupby()` junto con `transform()` para imputar los valores faltantes manteniendo la estructura original del DataFrame:

```{code-cell} python

# Hacemos una copia del dataset original para no modificarlo
data_grouped_mean = data_hogares.copy()

# Calculamos el precio promedio por barrio. La función transform('mean') devuelve una Serie del mismo tamaño que el DataFrame original, donde cada fila contiene el promedio correspondiente a su barrio.
precio_promedio_barrio = data_grouped_mean.groupby('barrio')['precio_usd'].transform('mean')

# Imputamos los valores faltantes de 'precio_usd' utilizando el promedio del barrio correspondiente
data_grouped_mean['precio_usd'] =  data_grouped_mean['precio_usd'].fillna(precio_promedio_barrio)

# Verificamos la imputación
data_grouped_mean.iloc[[10, 13]]
```

En este caso, cada valor faltante se reemplaza por el precio promedio del barrio correspondiente. Esta elección se apoya en el supuesto de que propiedades ubicadas en el mismo barrio tienden a tener precios similares, por lo que la imputación resulta más realista.

```{admonition} **Nota sobre transform()**
:class: tip

El método `transform()` permite aplicar una operación por grupos y devolver un objeto con el mismo índice y tamaño que el original. Esto lo hace especialmente útil para tareas de imputación, ya que permite combinar información agregada con el DataFrame original sin perder alineación entre observaciones.
```

##### La idea de cercanía en la imputación de datos

La estrategia de imputar valores faltantes utilizando el promedio por barrio se apoya en la noción de cercanía entre observaciones. En este contexto, dos propiedades se consideran cercanas si se encuentran ubicadas en el mismo barrio, bajo el supuesto de que comparten características relevantes que influyen en su precio.

Es importante destacar que la cercanía en análisis de datos no se limita únicamente a la distancia física o espacial. En un sentido más general, la cercanía puede definirse a partir de distintos criterios, según el problema y la información disponible. En muchos casos, puede pensarse como una forma de segmentar el espacio de datos en clases o grupos relativamente homogéneos.

Algunos ejemplos de criterios de cercanía que pueden utilizarse al momento de imputar datos faltantes son:

- **Cercanía espacial:** dos observaciones pueden considerarse cercanas si se encuentran a una distancia menor que un umbral previamente definido. En ese caso, los valores observados en una ubicación pueden utilizarse para imputar valores faltantes en otra cercana.

- **Pertenencia a un mismo segmento o clase:** dos registros pueden considerarse cercanos si pertenecen al mismo grupo definido por ciertas características. Por ejemplo, individuos de un mismo segmento socioeconómico, o propiedades con características similares.

- **Cercanía temporal:** dos observaciones pueden considerarse cercanas si fueron registradas en momentos próximos en el tiempo. Este criterio es especialmente relevante en el análisis de series temporales, donde las observaciones cercanas en el tiempo suelen presentar valores similares.

En todos los casos, la imputación se basa en el supuesto de que observaciones cercanas según algún criterio relevante tienden a presentar valores similares. Por este motivo, la elección del criterio de cercanía debe estar guiada por el conocimiento del fenómeno que se está analizando y por los objetivos del estudio.

##### Imputación mediante estimación de una función (interpolación)

Además de reemplazar valores faltantes utilizando medidas resumen o promedios por grupos, otra estrategia frecuente consiste en estimar una función a partir de los datos observados y utilizarla para predecir los valores faltantes.

En este enfoque, la variable que presenta datos faltantes se trata como variable dependiente de un modelo, mientras que una o más variables explicativas se utilizan para estimar su comportamiento. Una vez estimado el modelo, los valores faltantes pueden imputarse utilizando las predicciones obtenidas.

Un caso particular y muy utilizado de este tipo de estrategias es la interpolación numérica, especialmente cuando los datos presentan un orden natural, como ocurre en series temporales o datos medidos sobre una escala continua.

Supongamos que disponemos de un conjunto de observaciones

$$(x_1,y_1), (x_2, y_2), ..., (x_{n}, y_{n})$$

generadas a partir de una función desconocida. Si conocemos un valor intermedio $x_i$, pero el correspondiente valor $y_i$ es desconocido, la interpolación busca aproximar ese valor faltante utilizando la información de los puntos observados.

Desde el punto de vista del manejo de datos faltantes, la interpolación se apoya en la idea de cercanía numérica o temporal: se asume que valores de $x$ cercanos tienden a producir valores de $y$ similares.

**Interpolación lineal**

La interpolación lineal es la forma más sencilla de interpolación. Dados dos puntos $(x_0,y_0)$ y $(x_1,y_1)$, puede construirse una única recta que pase por ambos. Esta recta se utiliza para estimar el valor de $y$ correspondiente a un valor intermedio $x_i$, siempre que $x_i \in [x_0,x_1]$.

La relación utilizada es:

$$\frac{x_1 - x_0}{x_i - x_0} = \frac{y_1 - y_0}{y_i - y_0}$$

```{figure} imagenes/interpolacion_lineal.png
---
align: center
width: 50%
---
Interpolación lineal: estimación del valor desconocido $y_i$ mediante el segmento de recta que une los puntos observados más cercanos.
```

Este método es especialmente útil cuando los cambios entre observaciones consecutivas son suaves y aproximadamente lineales.

```{admonition} **Interpolación vs. extrapolación**
:class: tip

Si el valor de $x$ utilizado para la predicción se encuentra fuera del intervalo observado, el procedimiento deja de ser una interpolación y pasa a denominarse extrapolación, lo cual implica supuestos adicionales y mayor incertidumbre.
```

**Interpolación polinómica**

En la interpolación polinómica se busca un único polinomio que pase exactamente por todos los puntos observados. El grado del polinomio depende de la cantidad de puntos disponibles:

- **2 puntos:** polinomio de grado 1 (recta)

- **3 puntos no alineados:** polinomio de grado 2

- **4 puntos no alineados:** polinomio de grado 3

- **n+1 puntos no alineados:** polinomio de grado n

Este enfoque utiliza toda la información disponible de manera global para construir una única función.

```{figure} imagenes/interpolacion_polinomica.png
---
align: center
width: 50%
---
Interpolación polinómica: el polinomio de grado adecuado se ajusta de modo que atraviese todos los puntos observados.
```

```{admonition} **Más allá de las interpolaciones lineales**
:class: tip

Existen diversos métodos de interpolación no lineales, como los métodos de Newton y de Lagrange, o la interpolación mediante *splines*. Según el método elegido, los valores imputados pueden diferir considerablemente, por lo que es importante evaluar cuál resulta más apropiado para cada aplicación.
```

**Interpolación por intervalos**

Las interpolaciones vistas anteriormente son globales, ya que utilizan todos los puntos para construir una única función. En contraste, la interpolación por intervalos consiste en definir una función distinta para cada intervalo entre observaciones consecutivas.

Dado el conjunto de puntos

$$(x_1,y_1), (x_2, y_2), ..., (x_{n}, y_{n})$$

se construyen $n$ funciones $f_i(x)$, cada una válida en el intervalo correspondiente:

$$y = f_i(x), \qquad x_i < x < x_{i+1}$$

Por ejemplo, si se cuenta con tres puntos $(x_0,y_0)$, $(x_1,y_1)$ y $(x_2,y_2)$, las funciones de interpolación lineal por intervalos quedan definidas como:

$$f_{1}(x) = y_{0} + \frac{y_{1}-y_{0}}{x_{1} - x_{0}}(x_{i} - x_{0})\qquad , \qquad x_{0}\lt x_{i} \lt x_{1}$$

$$f_{2}(x) = y_{1} + \frac{y_{2}-y_{1}}{x_{2} - x_{1}}(x_{i} - x_{1})\qquad , \qquad x_{1}\lt x_{i} \lt x_{2}$$

```{figure} imagenes/interpolacion_tramos.png
---
width: 50%
align: center
---
Interpolación lineal por intervalos: en lugar de utilizar un único polinomio global, se construyen rectas independientes en cada intervalo entre puntos consecutivos.
```

Este tipo de interpolación resulta especialmente útil cuando el comportamiento de los datos cambia entre distintos tramos, y es común en el análisis de series temporales.

### Combinaciones de conjuntos de datos

En muchos análisis, la información relevante no se encuentra en un único conjunto de datos, sino distribuida en múltiples tablas. La combinación de datasets permite integrar distintas fuentes de información para ampliar el análisis.

Este tipo de operaciones es fundamental en el trabajo con datos y constituye el núcleo del funcionamiento de las bases de datos relacionales (como aquellas basadas en SQL).

En `pandas`, los métodos más utilizados para combinar DataFrames son:

- `concat()`

- `merge()`

- `join()`

Cada uno responde a una lógica diferente.

```{figure} imagenes/combine_pandas.png
---
width: 85%
align: center
---
```

#### Concatenación con concat()

El método `concat()` se utiliza para combinar DataFrames a lo largo de un eje específico, ya sea horizontal o verticalmente. Esta información se especifica en el argumento `axis`:

- `axis = 0`: concatenación vertical

- `axis = 1`: concatenación horizontal

Consideremos los siguientes DataFrames como ejemplo:

```{code-cell} python

df1 = pd.DataFrame({'A': [1,2,3], 'B': [4,5,6]}, index = [0,1,2])
df2 = pd.DataFrame({'A': [4,5,6], 'B': [7,8,9], 'C': [10,11,12]}, index = [1,2,3])
```

```{code-cell} python

print(df1)
```

```{code-cell} python

print(df2)
```

**Concatenación vertical**

```{code-cell} python

nuevo_df = pd.concat([df1, df2], axis = 0)

print(nuevo_df)
```

En este caso se agregan las filas de `df2` **debajo** de `df1`. Como `df1` no tiene la columna `C`, aparecen valores `NaN` (notar también que se modifica el tipo de dato de esa columna a *float* para que sea compatible con dichos valores faltantes).

Por defecto, `concat()` realiza una **unión de tipo *outer***, es decir, conserva todas las columnas presentes en cualquiera de los DataFrames. Si especificamos el parámetro `join = 'inner'`, sólo se conservan las columnas comunes a ambos DataFrames:

```{code-cell} python

nuevo_df_inner = pd.concat([df1, df2], axis = 0, join = 'inner')

print(nuevo_df_inner)
```

**Concatenación horizontal**

```{code-cell} python

nuevo_df_h = pd.concat([df1, df2], axis = 1)

print(nuevo_df_h)
```

Aquí los DataFrames **se combinan por índice**. Si los índices no coinciden completamente, aparecerán valores faltantes.

Si agregamos el parámetro `join = 'inner'`, sólo se conservan los índices compartidos por ambos DataFrames.

```{admonition} **Idea clave sobre concat()**
:class: tip

`concat()` no busca correspondencias entre columnas específicas.
Simplemente combina estructuras de datos respetando índices y columnas.

Es útil cuando:

- Tenemos datasets homogéneos (por ejemplo, distintas muestras del mismo formato).

- Queremos agregar observaciones.

- Queremos unir variables alineadas por índice.
```

#### Unión mediante claves con merge()

El método `merge()` es la herramienta más flexible y utilizada para combinar DataFrames. Permite unir tablas en función de una o más columnas que actúan como claves (*keys*). Es el equivalente en `pandas` a los JOIN de SQL. 

##### Tipos de uniones

El parámetro `how` permite especificar el tipo de unión:

- **'inner'** → conserva solo las coincidencias en ambas tablas.

- **'left'** → conserva todas las filas del DataFrame izquierdo.

- **'right'** → conserva todas las filas del DataFrame derecho.

- **'outer'** → conserva todas las filas de ambos.

- **'cross'** → realiza una unión cruzada (ver más adelante).

```{figure} imagenes/tipos_uniones.png
---
width: 80%
align: center
---
Esquema visual de los distintos tipos de unión entre dos datasets (*inner*, *outer*, *left*, *right*). Las regiones sombreadas indican qué observaciones se conservan en cada caso.
```

##### Ejemplo: encuesta de hogares

Supongamos que contamos con dos tablas provenientes de una encuesta de movilidad. A fines prácticos, ambas tienen escasa cantidad de registros pero podemos imaginar que son un extracto de tablas más grandes.

**Tabla hogares**

Notar que cada fila representa un hogar y cada hogar pertenece a un único barrio.

| id_hogar | barrio   |
| -------- | -------- |
| 450956   | Centro   |
| 450957   | Belgrano |
| 450958   | Lourdes  |

**Tabla personas**

En la siguiente tabla, cada fila representa una persona encuestada, `id_persona` identifica a cada individuo y `id_hogar` indica a qué hogar pertenece

| id_persona | motivo_viaje | genero    | id_hogar |
| ---------- | ------------ | --------- | -------- |
| 3449       | trabajo      | femenino  | 450956   |
| 3450       | no_trabajo   | masculino | 450956   |
| 3451       | trabajo      | masculino | 450958   |

A continuación, creamos ambas tablas utilizando funciones de `pandas`:

```{code-cell} python

tabla_hogares = pd.DataFrame({
    'id_hogar': ['450956','450957','450958'],
    'barrio': ['Centro','Belgrano','Lourdes']
})

tabla_personas = pd.DataFrame({
    'id_persona': ['3449','3450','3451'],
    'motivo_viaje': ['trabajo','no_trabajo','trabajo'],
    'genero': ['femenino','masculino','masculino'],
    'id_hogar': ['450956','450956','450958']
})
```

El propósito es conocer en qué barrio vive cada una de las personas encuestadas. Como se observa, la información del barrio está en `tabla_hogares`, mientras que la información individual está en `tabla_personas`. **Necesitamos combinar ambas tablas usando la columna común `id_hogar`.** De esta forma. realizamos el *merge* utilizando la mencionada columna como *key*:

```{code-cell} python
df = pd.merge(
    tabla_personas,
    tabla_hogares,
    on = 'id_hogar',
    how = 'left'
)

print(df)
```

Aquí:

- `tabla_personas` es el DataFrame izquierdo.

- `tabla_hogares` es el derecho.

- `on = 'id_hogar'` indica la clave de unión (*key*).

- `how = 'left'` conserva todas las personas, incluso si algún hogar no tuviera correspondencia.

```{dropdown} Para pensar…
:class: seealso

🤔 ¿Cómo cambiaría el dataset `df` si, sobre el mismo código utilizado actualmente, modificamos el parámetro `how` por cada una de las otras posibilidades?
```

#### Unión cruzada (*cross join*)

Una unión cruzada genera todas las combinaciones posibles entre dos tablas.

```{code-cell} python

df1 = pd.DataFrame({'A': [1, 2]})
df2 = pd.DataFrame({'B': ['a', 'b', 'c']})

pd.merge(df1, df2, how = 'cross')
```

Como se puede ver, el nuevo DataFrame resultante contiene todas las combinaciones posibles entre los valores de ambas tablas, sin importar si los valores coinciden o no.

```{figure} imagenes/cross_join.png
---
align: center
---
Esquema visual de la unión cruzada realizada en el ejemplo anterior.
```

La unión cruzada es útil cuando queremos construir el espacio completo de posibilidades antes de aplicar un modelo o una simulación. Por ejemplo, supongamos que un comercio en línea vende productos electrónicos y quiere diseñar paquetes promocionales combinando un producto principal (laptop, smartphone y tablet) y un accesorio complementario (cargador, auriculares, estuche). El objetivo es generar todas las combinaciones posibles entre productos y accesorios para evaluar qué paquetes podrían ofrecerse. Desde un punto de vista matemático, estaríamos interesados en obtener el producto cartesiano entre ambos conjuntos.

```{code-cell} python
productos_electronicos = pd.DataFrame({'Producto': ['Laptop', 'Smartphone', 'Tablet']})
accesorios = pd.DataFrame({'Accesorio': ['Cargador', 'Auriculares', 'Estuche']})

combinaciones = pd.merge(productos_electronicos, accesorios, how = 'cross')

print(combinaciones)
```

En este ejemplo, hicimos uso de un *cross join* para generar todas las posibles combinaciones de productos electrónicos y accesorios que se podrían ofrecer juntos en un paquete promocional. Esto podría ayudar a identificar combinaciones de productos y accesorios que se venden bien juntos y a diseñar paquetes promocionales efectivos para los clientes.

```{admonition} Importante
:class: warning

Este tipo de unión puede generar datasets muy grandes si las tablas originales tienen muchas filas. Para ilustrar esto, pensar cuántas filas tendría el DataFrame resultante de la unión cruzada entre una tabla que tiene 10000 filas y otra que tiene 5000.
```

#### Unión basada en índices con join()

El método `join()` es similar a `merge()`, pero está orientado principalmente a combinar DataFrames en función de sus índices. Consideremos los siguientes dos DataFrames y combinémoslos utilizando este método:

```{code-cell} python

df1 = pd.DataFrame({'A':[1,2,3,4], 'B':[4,5,6,7]},
                   index = ['a','b','c','d'])

print(df1)
```                   

```{code-cell} python

df2 = pd.DataFrame({'C':[7,8,9], 'D':[10,11,12]},
                   index = ['a','b','c'])

print(df2)
```

Aplicamos `join()`:

```{code-cell} python
df1.join(df2)
```

Vemos que por defecto se realiza una unión de tipo *left*, ya que se conservaron todas las filas de `df1`. La aparición de valores `NaN` se debe a que el índice `'d'` no existe en el DataFrame `df2`.

Podemos modificar el tipo de unión a través del parámetro `how`. En este sentido, la elección de una unión de tipo *inner* conservaría sólo los índices compartidos por ambos DataFrames, es decir: `'a'`, `'b'` y `'c'`.

Aunque `join()` está pensado para índices, también puede usarse con columnas específicas.

Supongamos:

```{code-cell} python

df3 = pd.DataFrame({'A': [1,2,3], 'E': ['x','y','z']})

print(df3)
```

Si queremos unir usando la columna `A` de `df1`:

```{code-cell} python

df1.join(df3.set_index('A'), on = 'A')
```

Aquí ocurre lo siguiente: primero convertimos `A` en índice de `df3`, y posteriormente `join()` busca coincidencias entre la columna `A` de `df1` y el índice de `df3`.

### Listado de métodos útiles

Llegados a este punto de este capítulo, ya hemos echado mano a una buena cantidad de métodos de `pandas` a lo largo de las secciones previas: `astype()`, `to_numeric()`, `sort_values()`, `pd.melt()`, `pivot()`, `dropna()`, `fillna()`, `groupby()` junto con `transform()`, `describe()`, `value_counts()`, `str.lower()`, `replace()`, `duplicated()`, `drop_duplicates()`, `map()`, entre otros. Esta sección suma las herramientas que todavía faltaban, para completar una caja de herramientas básica de *data wrangling* con `pandas`.

#### Renombrar columnas

Con frecuencia los nombres de las columnas no son claros, contienen espacios o no siguen una convención consistente. El método `rename()` permite modificarlos de una manera explícita.

```{code-cell} python
:tags: ["skip-execution"]

df_quakes.rename(columns={'mag': 'magnitud', 'place': 'lugar'})
```

#### Reemplazo de subcadenas de texto

A diferencia de `replace()` (que compara el **valor completo** de cada celda, como vimos en la sección *Validación de datos*), el método `str.replace()` busca **una subcadena** dentro del texto y la reemplaza donde aparezca, sin importar en qué parte del valor esté:


```{code-cell} python
etiquetas = pd.Series(['nivel_bajo', 'nivel_medio', 'nivel_alto'])

etiquetas.str.replace('nivel_', '')
```
#### Eliminación de espacios en blanco

Es habitual que los datos importados contengan espacios al inicio o al final de las cadenas, lo que puede generar categorías duplicadas aparentemente distintas.

```{code-cell} python
texto_con_espacios = pd.Series(['  green', 'red  ', ' yellow '])

texto_con_espacios.str.strip()
```

#### Detección de valores faltantes

Ya usamos `notnull()` en la sección de *Filtrado*. `isna()` (equivalente a `isnull()`) es su complemento: devuelve `True` donde el valor **es** faltante. Es habitual combinarlo con `sum()` para contar cuántos valores faltantes tenemos en una columna del `DataFrame`:

```{code-cell} python
df_quakes_val['alert'].isna().sum()
```

#### Valores únicos

El método `unique()` devuelve un array con los valores únicos observados en una columna:

```{code-cell} python
df_quakes_val['alert'].unique()
```

Cuando sólo interesa **cuántos** valores distintos hay, sin necesidad de listarlos, es más directo usar `nunique()`:

```{code-cell} python
df_quakes_val['alert'].nunique()
```

#### Eliminación de columnas o filas

El método `drop()` es útil para eliminar columnas de un `DataFrame`.

```{code-cell} python
df_quakes.drop(columns = ['tz']).head()
```

También es posible eliminar filas específicas indicando su índice, con `df.drop(index = [...])`. En ambos casos, el método devuelve una copia del `DataFrame`, salvo que se indique `inplace = True` como argumento.

#### Aplicar una función a cada valor

El método `apply()` permite aplicar una función propia a cada valor de una columna, cuando la transformación necesaria no está disponible como un método directo de `pandas`. Por ejemplo, podemos clasificar cada sismo según su magnitud:

```{code-cell} python
# Definimos una función
def clasificar_magnitud(mag):
    if mag < 5:
        return 'moderado'
    elif mag < 7:
        return 'fuerte'
    else:
        return 'mayor'

# Aplicamos la función a través del método apply()
df_quakes_val['categoria_mag'] = df_quakes_val['mag'].apply(clasificar_magnitud)

df_quakes_val[['mag', 'categoria_mag']].head()
```

`apply()` tiene la ventajade ser un método muy flexible, pero a la vez es más lento que los métodos vectorizados de `pandas` como `astype()`, `str.lower()` o las operaciones aritméticas directas sobre columnas, especialmente en datasets grandes. Es buena práctica reservarlo para los casos en que realmente no existe una alternativa vectorizada, como en el ejemplo anterior, donde la lógica de clasificación no se resuelve con un único método existente.

Cuando la lógica es lo suficientemente simple como para expresarse en una sola línea, es común evitar definir una función aparte y usar en su lugar una **función anónima** (o `lambda`), directamente dentro de `apply()`. Por ejemplo, para crear una columna booleana que indique si un sismo fue de magnitud considerable:

```{code-cell} python
df_quakes_val['mag_considerable'] = df_quakes_val['mag'].apply(lambda mag: mag >= 6)

df_quakes_val[['mag', 'mag_considerable']].head()
```

## Expresiones regulares

Las expresiones regulares (regular expressions o *regex*) proporcionan una manera flexible y potente de buscar patrones dentro de cadenas de texto. 

Una expresión regular es una cadena escrita según un lenguaje específico que describe un patrón de búsqueda. En lugar de buscar texto literal, podemos definir reglas: por ejemplo, buscar “una o más cifras”, “una palabra que comience con determinada letra”, o “una fecha con cierto formato”. Por ejemplo, podemos analizar si la subcadena `rr` aparece dentro de un texto como: *r con r guitarra, r con r barril, r con r que rápido ruedan las ruedas del ferrocarril*.

La coincidencia puede ser simple (ver si aparece en algún lugar) o más compleja (por ejemplo, que aparezca al principio o al final de la cadena).

### ¿Qué puede ser una expresión regular?

Una expresión regular puede construirse a partir de:

**1. Caracteres literales.** Todo carácter que no sea especial coincide consigo mismo.

Por ejemplo:

- `a` coincide con la letra “a”.

- `casa` coincide con la palabra exacta “casa”.

**2. Secuencias de caracteres.** Buscar la coincidencia de una cadena dentro de otra:

- Buscar `casa` dentro de "Mi casa es naranja" → hay coincidencia.

- Buscar `casa` dentro de "Mis flores florecieron" → no hay coincidencia.

**3. Caracteres especiales.** Aquí está la verdadera potencia de las *regex*. Algunos de los más utilizados son:

| Expresión | Significado                               |
| --------- | ----------------------------------------- |
| `.`       | Cualquier carácter excepto salto de línea |
| `^`       | Inicio de la cadena                       |
| `$`       | Final de la cadena                        |
| `*`       | Cero o más ocurrencias                    |
| `+`       | Una o más ocurrencias                     |
| `?`       | Cero o una ocurrencia                     |
| `{n}`     | Exactamente n ocurrencias                 |
| `[ ]`     | Conjunto de caracteres                    |
| `[^ ]`    | Negación de conjunto                      |
| `\d`      | Dígito (0–9)                              |
| `\D`      | No dígito                                 |
| `\w`      | Carácter de palabra                       |
| `\W`      | No carácter de palabra                    |
| `\b`      | Límite de palabra                         |
| `\A`      | Inicio absoluto de la cadena              |
| `\`       | Escape de caracteres especiales           |

Algunos ejemplos:

- `[0-9]` → cualquier dígito.

- `[039]` → 0, 3 ó 9.

- `[^039]` → cualquier carácter que NO sea 0, 3 ó 9.

- `c.sa` → coincide con “casa”, “cosa”, etc.

- `^camino` → cadenas que comienzan con “camino”.

- `camino$` → cadenas que terminan con “camino”.

- `ca.+e` → “calle”, “carne”, etc.

- `\d{4}` → secuencia de exactamente cuatro dígitos.

Los caracteres especiales pueden combinarse para construir patrones más complejos. Por ejemplo, la siguiente expresión permite buscar fechas en formato DD/MM/YYYY correspondientes al mes de mayo:

```python
\b(?:0[1-9]|[12][0-9]|3[01])\/05\/\d{4}\b
```

```{figure} imagenes/regex_meme.png
---
width: 80%
align: center
---
Cualquier semejanza con la realidad de trabajar con *regex* es pura coincidencia...
```

### Expresiones regulares en Python

Python incluye el módulo `re`, que proporciona un conjunto de funciones para trabajar con expresiones regulares. Estas funciones permiten realizar operaciones de búsqueda, extracción, división y sustitución de patrones dentro de cadenas de texto. A continuación, ilustramos las principales herramientas a partir de un ejemplo sencillo. 

```{code-cell} python
import re
```

Trabajaremos con el siguiente *string*:

```{code-cell} python
texto = 'Se necesitan 30 azulejos para revestir 1 m2'
```

#### re.search()

Busca la primera ocurrencia del patrón y devuelve un objeto `Match`, que contiene información sobre la coincidencia encontrada (posición, texto coincidente, etc.).

```{code-cell} python
re.search(r'\D+', texto)
```

La expresión regular `\D+` indica "uno o más caracteres que NO sean dígitos". Por lo tanto, la función devuelve la primera secuencia continua de caracteres no numéricos presente en la cadena.

#### re.findall()

A diferencia de `search()`, la función `re.findall()` devuelve todas las coincidencias del patrón en forma de lista.

```{code-cell} python
re.findall(r'\D+', texto)
```

De este modo, se obtienen todas las secuencias de caracteres no numéricos que aparecen en el texto. La diferencia fundamental es que `search()` se detiene en la primera coincidencia, mientras que `findall()` recorre la cadena completa.

#### re.split()

La función `re.split()` divide la cadena cada vez que encuentra una coincidencia del patrón especificado.

```{code-cell} python
re.split(r'\D+', texto)
```

En este caso, la división se realiza cada vez que aparece una secuencia de caracteres no numéricos, lo que permite aislar los valores numéricos contenidos en el texto.

#### re.sub()

re.sub() permite reemplazar las coincidencias del patrón por otro valor. Devuelve una nueva cadena con las sustituciones realizadas.

```{code-cell} python
re.sub(r'30', '15', texto)
```

#### Expresiones regulares en `pandas`

En análisis de datos es muy frecuente necesitar extraer información específica desde columnas que contienen texto. En muchos casos, los datos relevantes se encuentran formando parte de cadenas más largas (por ejemplo, valores numéricos acompañados de símbolos o unidades). Para este tipo de tareas, `pandas` integra el uso de expresiones regulares a través del accesor `str`.

Supongamos el siguiente DataFrame:

```{code-cell} python

precios_deptos = pd.DataFrame({'id': [1, 2, 3], 'precio': ['USD 87000', 'usd 104000', 'USD 95000']})

precios_deptos
```

En este caso, la columna `precio` contiene tanto la moneda como el valor numérico. Si quisiéramos trabajar únicamente con el monto, resulta conveniente separarlo en una nueva columna. Podemos hacerlo utilizando el método `str.extract()`:

```{code-cell} python
precios_deptos['precio_usd'] = precios_deptos['precio'].str.extract(r'(\d+)')

precios_deptos
```

La expresión regular (\d+) funciona de la siguiente manera: `\d+` busca una secuencia de uno o más dígitos consecutivos, mientras que los paréntesis `()` indican que esa parte del patrón constituye un grupo de captura, es decir, un fragmento cuya coincidencia se almacena y puede recuperarse posteriormente. 

El método `str.extract()` devuelve un DataFrame con las capturas encontradas y permite asignarlas directamente a una nueva columna. Este tipo de operación es muy habitual en procesos de limpieza y estructuración de datos.

````{admonition} Importante
:class: tip

Si dentro de una misma cadena existen múltiples coincidencias del patrón, `str.extract()` devuelve únicamente la primera.

Por ejemplo:

```python
precios_deptos = pd.DataFrame({'id': [1, 2, 3], 'precio': ['USD 87000 EUR 78577', 'usd 104000 eur 93931', 'USD 95000 EUR 85803']})

precios_deptos['precio_usd'] = precios_deptos['precio'].str.extract(r'(\d+)')

print(precios_deptos)

   id                precio   precio_usd
0   1   USD 87000 EUR 78577        87000
1   2  usd 104000 eur 93931       104000
2   3   USD 95000 EUR 85803        95000
```

En cada fila existen dos valores numéricos, pero el método extrae únicamente el primero que coincide con el patrón. Cuando se requiere recuperar todas las coincidencias dentro de cada cadena, puede utilizarse la variante `str.extractall()`, que devuelve todas las capturas en una estructura indexada adecuadamente.
````

En la práctica, la combinación de expresiones regulares con los métodos del accesor `str` convierte a `pandas` en una herramienta muy potente para el preprocesamiento de datos textuales, permitiendo transformar información no estructurada en variables listas para el análisis cuantitativo.


