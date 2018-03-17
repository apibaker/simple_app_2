{
    "name": "simple_app",
    "version": "1.0.0",
    "description": "a simple sample app of api baker",
    "domain": [
        {
            "name": "main",
            "description": "main domain",
            "entity": [
                {
                    "name": "Ent",
                    "description": "ent",
                    "prop": [
                        {
                            "name": "Prop1",
                            "description": "Prop1",
                            "type": "string"
                        }
                    ],
                    "action": [
                        {
                            "name": "CreateEnt",
                            "description": "create ent",
                            "type": "Create",
                            "field": [
                                "Prop1"
                            ],
                            "path": "/ent",
                            "method": "PUT"
                        },
                        {
                            "name": "ReadEnt",
                            "description": "read ent",
                            "type": "Read",
                            "field": [
                                "Prop1"
                            ],
                            "path": "/ent/:id",
                            "method": "GET"
                        }
                    ]
                }
            ]
        }
    ],
    "test": [
        {
            "action": "main_CreateEnt",
            "in": {
                "obj": {
                    "Prop1": "str1"
                }
            },
            "out": {
                "main_EntId": 1
            }
        },
        {
            "action": "main_ReadEnt",
            "in": {
                "id": 1
            },
            "out": {
                "count": 1,
                "data": [
                    {
                        "Prop1": "str1"
                    }
                ]
            }
        }
    ]
}