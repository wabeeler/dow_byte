# dow_byte
Javascript Class which uses a byte to represent boolean flags for each DOW

Because this class uses ISO DOW designations **Monday = 1** and **Sunday = 7** and this is used as the bit position

| Day  | Bit |
|---|---|
| Monday | 0100 0000 |
| Tuesday | 0010 0000 |
| Wednesday | 0001 0000 |
| Thursday | 0000 1000 |
| Friday | 0000 0100 |
| Saturday | 0000 0010 |
| Sunday | 0000 0001 |

## Methods
####set( int val )

**Example**

```
set(2)  // ==> 0000 0010 Saturday
set(4)  // ==> 0000 1010 Thursday, Saturday
```

####get( type = [array|string] )

**Example**

```
get('array')  // ==> [0,1,0,0,0,0,1,0]
get('strng')  // ==> 0100 0010
```

#### toggle( day )

**Example**

```
toggle(monday) // ==> before: 0100 0000 | after: 0000 0000
```

#### reset()

**Example**

```
reset() // ==> before: 0100 0000 | after: 0000 0000
```

