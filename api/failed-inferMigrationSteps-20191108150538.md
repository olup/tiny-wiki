# Failed inferMigrationSteps at 2019-11-08T14:05:38.521Z
## RPC One-Liner
```json
{"id":2,"jsonrpc":"2.0","method":"inferMigrationSteps","params":{"projectInfo":"","sourceConfig":"datasource db {\n  provider = \"sqlite\"\n  url      = \"file:../db/dev.db\"\n  default  = true\n}\n\ngenerator photon {\n  provider = \"photonjs\"\n}\n\ngenerator nexus_prisma {\n  provider = \"nexus-prisma\"\n}\n\nmodel User {\n  id     String  @default(cuid()) @id @unique\n  email  String  @unique\n  name   String?\n  roles  Role[]\n  drafts Page[]  @relation(name: \"draftOwner\")\n}\n\nmodel Role {\n  slug      String  @default(cuid()) @id @unique\n  users     User[]\n  locked    Boolean @default(false)\n  viewPages Page[]  @relation(name: \"users_can_view_pages\")\n  editPages Page[]  @relation(name: \"users_can_edit_pages\")\n}\n\n\nmodel Page {\n  id         String  @default(cuid()) @id @unique\n  title      String\n  slug       String  @unique\n  content    String?\n  published  Boolean\n  draftOwner User?   @relation(name: \"draftOwner\")\n\n  canView Role[] @relation(name: \"users_can_view_pages\")\n  canEdit Role[] @relation(name: \"users_can_edit_pages\")\n\n  parent   Page[]\n  children Page[]\n}","datamodel":"datasource db {\n  provider = \"sqlite\"\n  url      = \"file:../db/dev.db\"\n  default  = true\n}\n\ngenerator photon {\n  provider = \"photonjs\"\n}\n\ngenerator nexus_prisma {\n  provider = \"nexus-prisma\"\n}\n\nmodel User {\n  id     String  @default(cuid()) @id @unique\n  email  String  @unique\n  name   String?\n  roles  Role[]\n  drafts Page[]  @relation(name: \"draftOwner\")\n}\n\nmodel Role {\n  slug      String  @default(cuid()) @id @unique\n  users     User[]\n  locked    Boolean @default(false)\n  viewPages Page[]  @relation(name: \"users_can_view_pages\")\n  editPages Page[]  @relation(name: \"users_can_edit_pages\")\n}\n\n\nmodel Page {\n  id         String  @default(cuid()) @id @unique\n  title      String\n  slug       String  @unique\n  content    String?\n  published  Boolean\n  draftOwner User?   @relation(name: \"draftOwner\")\n\n  canView Role[] @relation(name: \"users_can_view_pages\")\n  canEdit Role[] @relation(name: \"users_can_edit_pages\")\n\n  parent   Page[]\n  children Page[]\n}","migrationId":"DUMMY_NAME","assumeToBeApplied":[{"stepType":"CreateModel","name":"User","embedded":false},{"stepType":"CreateModel","name":"Role","embedded":false},{"stepType":"CreateModel","name":"Page","embedded":false},{"stepType":"CreateField","model":"User","name":"id","type":{"Base":"String"},"arity":"required","isUnique":true,"id":{"strategy":"Auto","sequence":null},"default":{"Expression":["cuid","String",[]]}},{"stepType":"CreateField","model":"User","name":"email","type":{"Base":"String"},"arity":"required","isUnique":true},{"stepType":"CreateField","model":"User","name":"name","type":{"Base":"String"},"arity":"optional","isUnique":false},{"stepType":"CreateField","model":"User","name":"roles","type":{"Relation":{"to":"Role","to_fields":["slug"],"name":"RoleToUser","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"User","name":"drafts","type":{"Relation":{"to":"Page","to_fields":[],"name":"draftOwner","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"Role","name":"slug","type":{"Base":"String"},"arity":"required","isUnique":true,"id":{"strategy":"Auto","sequence":null},"default":{"Expression":["cuid","String",[]]}},{"stepType":"CreateField","model":"Role","name":"users","type":{"Relation":{"to":"User","to_fields":["id"],"name":"RoleToUser","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"Role","name":"locked","type":{"Base":"Boolean"},"arity":"required","isUnique":false,"default":{"Boolean":false}},{"stepType":"CreateField","model":"Role","name":"viewPages","type":{"Relation":{"to":"Page","to_fields":["id"],"name":"users_can_view_pages","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"Role","name":"editPages","type":{"Relation":{"to":"Page","to_fields":["id"],"name":"users_can_edit_pages","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"Page","name":"id","type":{"Base":"String"},"arity":"required","isUnique":true,"id":{"strategy":"Auto","sequence":null},"default":{"Expression":["cuid","String",[]]}},{"stepType":"CreateField","model":"Page","name":"title","type":{"Base":"String"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Page","name":"slug","type":{"Base":"String"},"arity":"required","isUnique":true},{"stepType":"CreateField","model":"Page","name":"content","type":{"Base":"String"},"arity":"optional","isUnique":false},{"stepType":"CreateField","model":"Page","name":"published","type":{"Base":"Boolean"},"arity":"required","isUnique":false},{"stepType":"CreateField","model":"Page","name":"draftOwner","type":{"Relation":{"to":"User","to_fields":["id"],"name":"draftOwner","on_delete":"None"}},"arity":"optional","isUnique":false},{"stepType":"CreateField","model":"Page","name":"canView","type":{"Relation":{"to":"Role","to_fields":["slug"],"name":"users_can_view_pages","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"Page","name":"canEdit","type":{"Relation":{"to":"Role","to_fields":["slug"],"name":"users_can_edit_pages","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"Page","name":"parent","type":{"Relation":{"to":"Page","to_fields":["id"],"name":"PageToPage","on_delete":"None"}},"arity":"list","isUnique":false},{"stepType":"CreateField","model":"Page","name":"children","type":{"Relation":{"to":"Page","to_fields":["id"],"name":"PageToPage","on_delete":"None"}},"arity":"list","isUnique":false}]}}
```

## RPC Input Readable
```json
{
  "id": 2,
  "jsonrpc": "2.0",
  "method": "inferMigrationSteps",
  "params": {
    "projectInfo": "",
    "sourceConfig": "datasource db {\n  provider = \"sqlite\"\n  url      = \"file:../db/dev.db\"\n  default  = true\n}\n\ngenerator photon {\n  provider = \"photonjs\"\n}\n\ngenerator nexus_prisma {\n  provider = \"nexus-prisma\"\n}\n\nmodel User {\n  id     String  @default(cuid()) @id @unique\n  email  String  @unique\n  name   String?\n  roles  Role[]\n  drafts Page[]  @relation(name: \"draftOwner\")\n}\n\nmodel Role {\n  slug      String  @default(cuid()) @id @unique\n  users     User[]\n  locked    Boolean @default(false)\n  viewPages Page[]  @relation(name: \"users_can_view_pages\")\n  editPages Page[]  @relation(name: \"users_can_edit_pages\")\n}\n\n\nmodel Page {\n  id         String  @default(cuid()) @id @unique\n  title      String\n  slug       String  @unique\n  content    String?\n  published  Boolean\n  draftOwner User?   @relation(name: \"draftOwner\")\n\n  canView Role[] @relation(name: \"users_can_view_pages\")\n  canEdit Role[] @relation(name: \"users_can_edit_pages\")\n\n  parent   Page[]\n  children Page[]\n}",
    "datamodel": "datasource db {\n  provider = \"sqlite\"\n  url      = \"file:../db/dev.db\"\n  default  = true\n}\n\ngenerator photon {\n  provider = \"photonjs\"\n}\n\ngenerator nexus_prisma {\n  provider = \"nexus-prisma\"\n}\n\nmodel User {\n  id     String  @default(cuid()) @id @unique\n  email  String  @unique\n  name   String?\n  roles  Role[]\n  drafts Page[]  @relation(name: \"draftOwner\")\n}\n\nmodel Role {\n  slug      String  @default(cuid()) @id @unique\n  users     User[]\n  locked    Boolean @default(false)\n  viewPages Page[]  @relation(name: \"users_can_view_pages\")\n  editPages Page[]  @relation(name: \"users_can_edit_pages\")\n}\n\n\nmodel Page {\n  id         String  @default(cuid()) @id @unique\n  title      String\n  slug       String  @unique\n  content    String?\n  published  Boolean\n  draftOwner User?   @relation(name: \"draftOwner\")\n\n  canView Role[] @relation(name: \"users_can_view_pages\")\n  canEdit Role[] @relation(name: \"users_can_edit_pages\")\n\n  parent   Page[]\n  children Page[]\n}",
    "migrationId": "DUMMY_NAME",
    "assumeToBeApplied": [
      {
        "stepType": "CreateModel",
        "name": "User",
        "embedded": false
      },
      {
        "stepType": "CreateModel",
        "name": "Role",
        "embedded": false
      },
      {
        "stepType": "CreateModel",
        "name": "Page",
        "embedded": false
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "id",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": true,
        "id": {
          "strategy": "Auto",
          "sequence": null
        },
        "default": {
          "Expression": [
            "cuid",
            "String",
            []
          ]
        }
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "email",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": true
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "name",
        "type": {
          "Base": "String"
        },
        "arity": "optional",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "roles",
        "type": {
          "Relation": {
            "to": "Role",
            "to_fields": [
              "slug"
            ],
            "name": "RoleToUser",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "name": "drafts",
        "type": {
          "Relation": {
            "to": "Page",
            "to_fields": [],
            "name": "draftOwner",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Role",
        "name": "slug",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": true,
        "id": {
          "strategy": "Auto",
          "sequence": null
        },
        "default": {
          "Expression": [
            "cuid",
            "String",
            []
          ]
        }
      },
      {
        "stepType": "CreateField",
        "model": "Role",
        "name": "users",
        "type": {
          "Relation": {
            "to": "User",
            "to_fields": [
              "id"
            ],
            "name": "RoleToUser",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Role",
        "name": "locked",
        "type": {
          "Base": "Boolean"
        },
        "arity": "required",
        "isUnique": false,
        "default": {
          "Boolean": false
        }
      },
      {
        "stepType": "CreateField",
        "model": "Role",
        "name": "viewPages",
        "type": {
          "Relation": {
            "to": "Page",
            "to_fields": [
              "id"
            ],
            "name": "users_can_view_pages",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Role",
        "name": "editPages",
        "type": {
          "Relation": {
            "to": "Page",
            "to_fields": [
              "id"
            ],
            "name": "users_can_edit_pages",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Page",
        "name": "id",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": true,
        "id": {
          "strategy": "Auto",
          "sequence": null
        },
        "default": {
          "Expression": [
            "cuid",
            "String",
            []
          ]
        }
      },
      {
        "stepType": "CreateField",
        "model": "Page",
        "name": "title",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Page",
        "name": "slug",
        "type": {
          "Base": "String"
        },
        "arity": "required",
        "isUnique": true
      },
      {
        "stepType": "CreateField",
        "model": "Page",
        "name": "content",
        "type": {
          "Base": "String"
        },
        "arity": "optional",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Page",
        "name": "published",
        "type": {
          "Base": "Boolean"
        },
        "arity": "required",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Page",
        "name": "draftOwner",
        "type": {
          "Relation": {
            "to": "User",
            "to_fields": [
              "id"
            ],
            "name": "draftOwner",
            "on_delete": "None"
          }
        },
        "arity": "optional",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Page",
        "name": "canView",
        "type": {
          "Relation": {
            "to": "Role",
            "to_fields": [
              "slug"
            ],
            "name": "users_can_view_pages",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Page",
        "name": "canEdit",
        "type": {
          "Relation": {
            "to": "Role",
            "to_fields": [
              "slug"
            ],
            "name": "users_can_edit_pages",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Page",
        "name": "parent",
        "type": {
          "Relation": {
            "to": "Page",
            "to_fields": [
              "id"
            ],
            "name": "PageToPage",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      },
      {
        "stepType": "CreateField",
        "model": "Page",
        "name": "children",
        "type": {
          "Relation": {
            "to": "Page",
            "to_fields": [
              "id"
            ],
            "name": "PageToPage",
            "on_delete": "None"
          }
        },
        "arity": "list",
        "isUnique": false
      }
    ]
  }
}
```

## Stack Trace
```bash
[2019-11-08T14:05:38Z INFO  quaint::pool] Starting an SQLite pool with 9 connections.
```
