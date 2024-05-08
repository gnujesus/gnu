Date: April 10, 2024
Time:  19:34

# samsung-ia-class-thrusday
- df.head(\$eval_range) (\$eval range is 10 by default)
- Rango intercuartilico camapan de normalidad
* df.columns accesses al columns
* df.dropna removes nan
- count the nan on the 'deck' col
	![[Pasted image 20240410194948.png]]  
- axis=1 column, axis=0 rows
- search for those with more than 500 missing values
	![[Pasted image 20240410194827.png]]  
	![[Pasted image 20240410195237.png]]
- Delete any row which age is nan
	![[Pasted image 20240410195618.png]]
- If nan, either delete or replace with median
	![[Pasted image 20240410200225.png]]
- nan categorical data -> 3 methods (see notebook or recording)
	1. fillna(\$most_frequent, inplace=True)
	2. fillna(method='ffill', inplace=True)
	3.  duplicates | | delete duplicates
		1. check duplicates
		2. df with duplicates
	4. (extra) Remove
- If other columsn depend on the column, cannot be substituted by the mean
- 