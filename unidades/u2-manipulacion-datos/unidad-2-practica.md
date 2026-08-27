# Unidad 2. Manipulación de Datos - Práctica

## Datasets

| Dataset | Ejercicio/s | Descripción | 
|---|---|---|
| [`dataset_autos_sintetico.csv`](https://raw.githubusercontent.com/tuiafceiaunr/fdcd/main/unidades/u2-manipulacion-datos/datasets/dataset_autos_sintetico.csv) | 2 | Dataset sintético de autos usados. |
| [`listings_ba.csv`](https://raw.githubusercontent.com/tuiafceiaunr/fdcd/main/unidades/u2-manipulacion-datos/datasets/listings_ba.csv) | 6 | Listado de publicaciones de alojamientos tipo Airbnb en Buenos Aires. |
| [`conicet_personas_2020.xlsx`](https://raw.githubusercontent.com/tuiafceiaunr/fdcd/main/unidades/u3-analisis-exploratorio-datos/datasets/conicet_personas_2020.xlsx) | 7 | Dataset del CONICET con 75991 investigadores/as registrados en 2020. |
| [`conicet_ref_grado_academico.xlsx`](https://raw.githubusercontent.com/tuiafceiaunr/fdcd/main/unidades/u3-analisis-exploratorio-datos/datasets/conicet_ref_grado_academico.xlsx) | 7 | Tabla de referencia que traduce cada `grado_academico_id` de `conicet_personas_2020.xlsx` a su descripción correspondiente. |
| [`conicet_ref_sexo.xlsx`](https://raw.githubusercontent.com/tuiafceiaunr/fdcd/main/unidades/u3-analisis-exploratorio-datos/datasets/conicet_ref_sexo.xlsx) | 7 | Tabla de referencia que traduce `sexo_id` de `conicet_personas_2020.xlsx` a su descripción correspondiente. |
| [`incendios-cantidad-causas-provincia_2022.csv`](https://raw.githubusercontent.com/tuiafceiaunr/fdcd/main/unidades/u3-analisis-exploratorio-datos/datasets/incendios-cantidad-causas-provincia_2022.csv) | 8 y 9 | Cantidad de incendios forestales por provincia y causa para el periodo 1993-2022, publicado en datos.gob.ar. |
| [`Me_gustas_tuManu_Chao.txt`](https://raw.githubusercontent.com/tuiafceiaunr/fdcd/main/unidades/u3-analisis-exploratorio-datos/datasets/Me_gustas_tuManu_Chao.txt) | 10 | Letra de la canción *Me Gustas Tú* de Manu Chao, en texto plano. |


### Ejercicio 1

En un parque de diversiones existe la necesidad brindar acceso rápido a los visitantes. La información del ticket en PDF a escanear en el sistema de validación de visitantes de la entrada del parque contiene características  de la reserva y de la persona a ser validada.

En lo referente a la reserva se registra en el PDF del ticket:

- Fecha de transacción de compra de entrada

- Fecha de ingreso válida

- Nombre y Apellido del visitante

- Edad

- País de origen

- Nro de DNI/Pasaporte

- Número de tarjeta de crédito del comprador del ticket

- Condición de lesión en espalda (Si/No)

- Condición de presión alta (Si/No)

Una vez leído el PDF de la reserva en los molinetes de entrada, una cámara toma una foto del visitante, la cual también queda asociada a su registro.

a) Indique el tipo de dato de `pandas` en el que debería leerse cada una de las columnas de la reserva, de acuerdo con lo visto en la Unidad 2 de la materia.

b) Elabore un diccionario de las variables. Para cada una, indique tipo de dato (`pandas`), tipo de variable (cualitativa, cuantitativa, identificador) y su escala (nominal, ordinal, de razón o de intervalo), y una breve descripción de la información que contiene. ¿Qué *metadata* adicional sería necesaria para trabajar correctamente con este conjunto de datos?

c) ¿Cuáles serían formas razonables de almacenamiento de esta información? ¿Por cuánto tiempo considera necesario que se almacene?

### Ejercicio 2

Lea el dataset simulado de autos **`dataset_autos_sintetico.csv`** y realice cualquier tarea de adecuación o limpieza que considere necesaria.

a) ¿De qué color es la mayor cantidad de autos en la muestra?

b) ¿Cuántos son de la marca *Honda*?

c) ¿Cuáles son los autos más viejos del dataset?

d) ¿Cuántos modelos diferentes de *Nissan* aparecen en el dataset?

### Ejercicio 3

El partido Argentina-Inglaterra de la Copa Mundial FIFA 2026 se comenzó a jugar a las 16:00 hs. del 15 de julio de 2026 (horario de Argentina). El entretiempo tuvo una duración de 16 minutos y los goles se convirtieron en los siguientes minutos del partido: Gordon 55', Fernádez 85' y Martínez 92'

a) Cree una tabla en `pandas` con la siguiente información del partido: fecha y hora de inicio, resultado final y el detalle de los goles: quiénes los anotaron, en qué minuto de juego y a qué hora del día.

b) ¿A qué hora exacta de Argentina se convirtió cada uno de los 3 goles del partido?

c) Utilizando `pytz.timezone()` modifique la tabla del punto a) para expresarla en el horario de Inglaterra. ¿Cambia la fecha de alguno de los eventos al pasar a ese huso horario?

### Ejercicio 4

A partir de los datos de la siguiente tabla, construya una función que realice una interpolación lineal por tramos. La función debe recibir como entrada un valor $x$ y devolver como salida el valor interpolado de $y$, utilizando los intervalos definidos por los puntos dados.

| **x** | **y** |
| --- | --- |
| 1 | 2 |
| 2 | 3 |
| 3 | 5 |
| 10 | 6 |

### Ejercicio 5

La siguiente tabla resume la evolución de la población total argentina desde 1960 a la actualidad según los censos nacionales de población (fuente: [INDEC](https://www.indec.gob.ar/indec/web/Nivel4-Tema-2-18-77#:~:text=Aqu%C3%AD%20presentamos%20los%20datos%20del,de%20la%20poblaci%C3%B3n%20del%20pa%C3%ADs.&text=La%20poblaci%C3%B3n%20nacional%20est%C3%A1%20compuesta,mujeres%20hay%2094%2C8%20varones.)):

| **Año** | **Población total** |
| --- | --- |
| 1960 | 20013793 |
| 1970 | 23364431 |
| 1978 |  |
| 1980 | 27949780 |
| 1986 |  |
| 1991 | 32615528 |
| 2001 | 36260130 |
| 2010 | 40117096 |
| 2014 |  |
| 2022 | 46044703 |

Utilizando una interpolación lineal, completar la información sobre **Población total** para aquellos años en los que no se cuenta con datos de censos nacionales.

### Ejercicio 6

Usando los datos de `listings_ba.csv` de Buenos Aires, realizar la imputación de los precios de alquiler faltantes empleando:

a) La media de los datos no faltantes 

b) La moda de los datos no faltantes

c) Una medida de resumen de su elección por barrio y tipo de habitación

d) Los 10 puntos más cercanos geográficamente a cada dato faltante usando las coordenadas.

En cada uno de los casos indicar la cantidad de datos que se usaron para la imputación.

### Ejercicio 7

Utilizando los archivos `conicet_personas_2020.xlsx`, `conicet_ref_sexo.xlsx` y `conicet_ref_grado_academico.xlsx`, genere una tabla en la cual se informe cuántos empleados de CONICET hay de cada sexo para cada máximo grado académico en 2020.

### Ejercicio 8 

Lea el archivo `incendios-cantidad-causas-provincia_2022.csv` y realice cualquier tarea de limpieza y/o adecuación del dataset que considere necesaria.

a)  Obtenga el número de incendios totales por año para todo el país. ¿Cuál fue el año en el que se presentó un mayor número de incendios?

b) Obtenga el número de incendios totales por año para el período 1993-2021 en la provincia de Córdoba.

c) Realice una tabla en la que se muestre, para cada año del periodo 1993-2021, la provincia en la que tuvo lugar el mayor número de incendios intencionales. *Sugerencia: explore las funcionalidades del método `idxmax()` de `pandas`.*

d) Obtenga el número promedio de incendios intencionales, por negligencia y naturales para la provincia de Río Negro durante el periodo 1993-2021.

### Ejercicio 9

Utilizando el archivo `incendios-cantidad-causas-provincia_2022.csv` del ejercicio anterior, genere una tabla que muestre el número de incendios intencionales por provincia para cada año de los incluidos en dicho dataset. 

### Ejercicio 10

Utilizando *regex*: 

a) Escriba una función que determine si una url es válida e imprima ‘URL válida’ (por ejemplo para `"https://pythondiario.com/"`) si la url dada como input es válida y ‘URL no válida’ en caso de que no sea válida (p.ej: `"htps:/pythondiario.com/"`).

b) Escriba una función que determine si una dirección de correo electrónico es un correo electrónico **de gmail** válido.

c) Escriba una función que determine si un string corresponde a una fecha válida y se encuentra en el formato YYYY-MM-DD.

d) Utilizando el archivo `Me_gustas_tu-Manu_Chao.txt` , que contiene la letra de la canción ***Me gustas tú*** de Manu Chao: 

- indique cuántas veces en la canción se hace referencia al verbo *gustar*

- ¿cuántos verbos en infinitivo tiene la letra de la canción?

- Realice una lista de todas las cosas que le gustan a Manu Chao. Por ejemplo: cosas_que_le_gusta = [los aviones, viajar, la mañana, el viento, soñar, la mar …. etc].

### Ejercicio 11

a) Represente la siguiente tabla en cada uno de los formatos estudiados en la Unidad 2, utilizando un procesador de texto:

- CSV (utilizando `|` como delimitador)

- TXT

- YAML

- XML

- JSON

- HTML

| **id** | **desc_prod** | **precio** | **proveedor** |
| --- | --- | --- | --- |
| 0049570 | camisa | 2000 | fashionistas |
| 0769298 | jean | 6000 | tu moda |
| 8458909 | polera | 3000 | el ropero |

b) Modifique los archivos generados para especificar que el producto *jean* es de tipo *skinny*.

c) Importe cada uno de los archivos generados en el ítem a) utilizando las librerías y funciones apropiadas. Luego:

- Verifique que los datos se hayan cargado correctamente.

- Explore el `DataFrame` resultante (por ejemplo, visualizando sus primeras filas, tipos de datos y dimensiones).
