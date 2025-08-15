   import { ProductInputSchema } from '@/lib/validator'
   import { UserInputSchema } from '@/lib/validator'
   import { UserSignInSchema } from '@/lib/validator'
   import { UserSignUpSchema } from '@/lib/validator'
   import { ShippingAddressSchema } from '@/lib/validator'
   import { OrderInputSchema } from '@/lib/validator'
    import { z } from 'zod'
      import {
     CartSchema,
     OrderItemSchema,
   } from '@/lib/validator'

    export type IProductInput = z.infer<typeof ProductInputSchema>
    export type Data = {
      users: IUserInput[]
      products: IProductInput[]
      headerMenus: {
        name: string
        href: string
      }[]
      carousels: {
        image: string
        url: string
        title: string
        buttonCaption: string
        isPublished: boolean
      }[]
    }
   export type IOrderInput = z.infer<typeof OrderInputSchema>
   export type OrderItem = z.infer<typeof OrderItemSchema>
   export type Cart = z.infer<typeof CartSchema>
   export type ShippingAddress = z.infer<typeof ShippingAddressSchema>


// user
export type IUserInput = z.infer<typeof UserInputSchema>
export type IUserSignIn = z.infer<typeof UserSignInSchema>
export type IUserSignUp = z.infer<typeof UserSignUpSchema>
