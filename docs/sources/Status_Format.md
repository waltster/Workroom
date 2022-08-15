# Source Status Data Format
This file defines the format for reporting the status of any data source.

The status ought to be reported as a JSON object of the following structure:

```json
{
  "level": string,
  "description": optinoal string,
  "recommendation": optional string
}
```

The `level` string can be one of the following, in order of severity:
* `info`
* `okay`
* `warning`
* `error`

The `description` string can provide context for the status and may be displayed by the UI.

The `recommendation` string can provide a recommendation to ameliorate the current status.
