# SQL

```sql
SELECT * FROM table;
```


## Join

```sql
SELECT
    TableA.id, TableA.name, TableB.type, TableB.timestamp
FROM TableA
LEFT JOIN TableB
ON TableA.id = TableB.aid
ORDER BY TableB.timestamp
```
