import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import 'dotenv/config'
import { restaurantRouter } from './restaurant/restaurant.router'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/restaurant', restaurantRouter)


serve({
  fetch: app.fetch,
  port: parseInt(process.env.PORT || '3000')
})

console.log(`Server is running on port ${process.env.PORT}`)