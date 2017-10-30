# dow_byte
Javascript Class which uses a byte to represent boolean flags for each DOW

Because this class uses ISO DOW designations **Monday = 1** and **Sunday = 7** and this is used as the bit position

| Day  | Bit | Decimal |
|---|---|---|
| Sunday | 0000 0001 | 1 |
| Saturday | 0000 0010 | 2|
| Friday | 0000 0100 | 4 |
| Thursday | 0000 1000 | 8 |
| Wednesday | 0001 0000 | 16 |
| Tuesday | 0010 0000 | 32 |
| Monday | 0100 0000 | 64 |

## Methods
#### set( int )

**Example**

```
set(2)  // ==> 0000 0010 Saturday
```

#### setMask( string )
Set mask will clear any existing values and is desiged to 

**Example**

```
setMask('01000010') // ==> Monday, Saturday
setMask('0010 0100') // ==> Tuesday, Friday
```

####isDaySet( string )

**Example**

```
set('monday); // ==> 0100 0000
set(2); // ==> 0100 0010
isDaySet('Monday') // ==> true
isDaySet('friday') // ==> false
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

