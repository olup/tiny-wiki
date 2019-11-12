import { objectType, stringArg } from 'nexus'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.page()
    t.crud.users()
    t.crud.roles()
    t.crud.pages({ filtering: true })

    t.list.field('listPages', {
      type: 'Page',
    })
  },
})
