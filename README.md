# dow_byte
Javascript Class which uses a byte to represent boolean flags for each DOW

Because this class uses ISO DOW designations **Monday = 1** and **Sunday = 7** and this is used as the bit position

| Day  | Bit | Decimal |
|---|---|---|
| Monday | 0000 0001 | 1 |
| Tuesday | 0000 0010 | 2|
| Wednesday | 0000 0100 | 4 |
| Thursday | 0000 1000 | 8 |
| Friday | 0001 0000 | 16 |
| Saturday | 0010 0000 | 32 |
| Sunday | 0100 0000 | 64 |

## Methods
#### set( mask )

**Example**

```
set(32)  // ==> 0000 0010 Saturday
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
toggle('monday') // ==> before: 0000 0000 | after: 0100 0000
toggle('Thursday') // ==> before: 0100 0000 | after: 0100 1000
```

#### reset()

**Example**

```
reset() // ==> before: 0100 0000 | after: 0000 0000
```

