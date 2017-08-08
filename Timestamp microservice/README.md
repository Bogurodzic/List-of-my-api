# Timestamp microservice
With this api you can change your time format from natural to unix, or from unix to natural.
After you pass one time format, it will return both.

## User stories:
* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.

## Example usage:
```
http://localhost:3000/December 8 2000
http://localhost:3000/976316400
```

## Example output
```
{
    "unix": "976316400",
    "natural": "December 8 2000"
}
```

## Technologies I have used:
* Node.js
* Express
