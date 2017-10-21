# dow_byte
Javascript Class which uses a byte to represent boolean flags for each DOW

Because this class uses ISO DOW designations **Monday = 1** and **Sunday = 7** and this is used as the bit position

| Day  | Bit |
|---|---|
| Monday | 0000 0001 |
| Tuesday | 0000 0010 |
| Wednesday | 0000 0100 |
| Thursday | 0000 1000 |
| Friday | 0001 0000 |
| Saturday | 0010 0000 |
| Sunday | 0100 0000 |

## Methods
####set( array )

**Example**

```
set([2,4])  // ==> 0000 1010 Tuesday, Thursday
```

####get( DOW )

**Example**

```
get(2)  // ==> 1
get(5)  // ==> 0
```


#### is\[DOW\]() 

**Example**

```
isMonday()  // ==> false
isThursday() // ==> true
```
