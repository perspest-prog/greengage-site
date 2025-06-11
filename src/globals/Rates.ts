import type { GlobalConfig } from 'payload'

export const Rates: GlobalConfig = {
  slug: 'rates',
  label: 'Курсы я ебал блять',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'number',
      required: true,
      name: 'CNY_TO_USDT',
      label: 'Курс юаня к usdt',
    },
    {
      type: 'number',
      required: true,
      name: 'USDT_TO_RUB',
      label: 'Курс usdt к рублю',
    },
    {
      type: 'number',
      required: true,
      name: 'CNY_TO_EUR',
      label: 'Курс ЦБ юаня к евро',
    },
    {
      type: 'number',
      required: true,
      name: 'EUR_TO_RUB',
      label: 'Курс ЦБ рубля к евро',
    },
  ],
}
