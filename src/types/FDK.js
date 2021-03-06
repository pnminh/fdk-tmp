//import ufs from '../ufs'
import use from '../use'

export default class FDK {

  constructor({ middleware }) {
    this.middleware = middleware || []
  }


  // handler(fn) {
  //   return ufs(async (context, event) => {
  //     context = await flow(obj.middleware)(context)
  //     const handler = await use(...context.middleware)((evt) => fn(evt, context))
  //     return await handler(event, context)
  //   })
  // },

  // azure(fn, obj) {
  //
  // },

  // google(fn, obj) {
  //
  // },

  // lambda(fn, obj) {
  //   return obj.handler(async (event, context) => {
  //     return new Promise((resolve, reject) => {
  //       try {
  //         fn(event.native, context.native, (error, response) => {
  //           if (!error) {
  //             return resolve(response)
  //           }
  //           return reject(error)
  //         })
  //       } catch(error) {
  //         reject(error)
  //       }
  //     })
  //   })
  // },

  // openwhisk(fn, obj) {
  //
  // },

  use(fn) {
    return update(obj, 'middleware', (middleware) => push(middleware, (ctx) => {
      const result = fn(ctx)
      return isFunction(result) ? ctx.use(result) : result
    }))
  }
})

export default FDK
