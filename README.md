# four-bytes-db
Comprehensive Collection of Ethereum Signatures from multiple sources

## Download the Archive 

[https://www.dropbox.com/s/l86oms58b70ywhs/signatures_4bytes.zip?dl=0](https://www.dropbox.com/s/l86oms58b70ywhs/signatures_4bytes.zip?dl=0)

## Function Signatures

```json
{
    "name": "Signature List",
    "description": "",
    "renders": [
        "application/json",
        "text/html"
    ],
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data"
    ],
    "actions": {
        "POST": {
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "created_at": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created at"
            },
            "text_signature": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Text signature"
            },
            "hex_signature": {
                "type": "string",
                "required": false,
                "read_only": true,
                "label": "Hex signature"
            },
            "bytes_signature": {
                "type": "string",
                "required": false,
                "read_only": true,
                "label": "Bytes signature"
            }
        }
    }
}

```

## Event Signatures

```json
{
    "name": "Event Signature List",
    "description": "",
    "renders": [
        "application/json",
        "text/html"
    ],
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data"
    ],
    "actions": {
        "POST": {
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "created_at": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created at"
            },
            "text_signature": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Text signature"
            },
            "hex_signature": {
                "type": "string",
                "required": false,
                "read_only": true,
                "label": "Hex signature"
            },
            "bytes_signature": {
                "type": "string",
                "required": false,
                "read_only": true,
                "label": "Bytes signature"
            }
        }
    }
}
```
